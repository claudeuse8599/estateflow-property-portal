const MAX_BODY_BYTES = 16 * 1024;
const MAX_MESSAGE_LENGTH = 1000;
const MAX_HISTORY_ITEMS = 12;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 20;

const rateLimitStore = new Map();

function getHeader(req, name) {
  const headers = req.headers || {};
  return headers[name.toLowerCase()] || headers[name] || "";
}

function setHeader(res, name, value) {
  if (typeof res.setHeader === "function") {
    res.setHeader(name, value);
  }
}

function sendJson(res, statusCode, payload) {
  setHeader(res, "Content-Type", "application/json; charset=utf-8");
  if (typeof res.status === "function" && typeof res.json === "function") {
    return res.status(statusCode).json(payload);
  }
  res.statusCode = statusCode;
  return res.end(JSON.stringify(payload));
}

function sendNoContent(res) {
  if (typeof res.status === "function" && typeof res.end === "function") {
    return res.status(204).end();
  }
  res.statusCode = 204;
  return res.end();
}

function requestError(statusCode, code, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  error.code = code;
  return error;
}

function parseAllowedOrigins() {
  return String(process.env.AI_ALLOWED_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function sameOriginFromRequest(req) {
  const host = getHeader(req, "host");
  if (!host) return "";
  const proto = getHeader(req, "x-forwarded-proto") || (req.socket?.encrypted ? "https" : "http");
  return `${proto}://${host}`;
}

function isOriginAllowed(req) {
  const origin = getHeader(req, "origin");
  if (!origin) return true;

  const allowedOrigins = parseAllowedOrigins();
  if (allowedOrigins.length > 0) return allowedOrigins.includes(origin);

  return origin === sameOriginFromRequest(req);
}

function applyCors(req, res) {
  const origin = getHeader(req, "origin");
  setHeader(res, "Vary", "Origin");
  setHeader(res, "Access-Control-Allow-Methods", "POST, OPTIONS");
  setHeader(res, "Access-Control-Allow-Headers", "Content-Type");
  setHeader(res, "Access-Control-Max-Age", "600");
  if (origin && isOriginAllowed(req)) {
    setHeader(res, "Access-Control-Allow-Origin", origin);
  }
}

function clientIp(req) {
  const forwardedFor = getHeader(req, "x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

function withinRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || now - entry.startedAt > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ip, { startedAt: now, count: 1 });
    return true;
  }

  entry.count += 1;
  if (rateLimitStore.size > 500) {
    for (const [key, value] of rateLimitStore.entries()) {
      if (now - value.startedAt > RATE_LIMIT_WINDOW_MS) rateLimitStore.delete(key);
    }
  }

  return entry.count <= RATE_LIMIT_MAX_REQUESTS;
}

function parseJson(raw) {
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    throw requestError(400, "INVALID_JSON", "Request body must be valid JSON.");
  }
}

function readBody(req) {
  if (req.body !== undefined && req.body !== null) {
    if (typeof req.body === "object" && !Buffer.isBuffer(req.body)) return Promise.resolve(req.body);
    const raw = Buffer.isBuffer(req.body) ? req.body.toString("utf8") : String(req.body);
    if (Buffer.byteLength(raw, "utf8") > MAX_BODY_BYTES) {
      return Promise.reject(requestError(413, "REQUEST_TOO_LARGE", "Request body is too large."));
    }
    return Promise.resolve(parseJson(raw));
  }

  return new Promise((resolve, reject) => {
    let raw = "";
    let settled = false;
    let tooLarge = false;

    function fail(error) {
      if (settled) return;
      settled = true;
      reject(error);
    }

    function done(value) {
      if (settled) return;
      settled = true;
      resolve(value);
    }

    req.on("data", (chunk) => {
      if (tooLarge) return;
      raw += chunk;
      if (Buffer.byteLength(raw, "utf8") > MAX_BODY_BYTES) {
        tooLarge = true;
        fail(requestError(413, "REQUEST_TOO_LARGE", "Request body is too large."));
      }
    });
    req.on("end", () => {
      try {
        done(parseJson(raw));
      } catch (error) {
        fail(error);
      }
    });
    req.on("error", () => {
      fail(requestError(400, "REQUEST_FAILED", "Request could not be read."));
    });
  });
}

function cleanText(value, maxLength) {
  const text = String(value || "").replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim();
  if (text.length > maxLength) {
    throw requestError(400, "FIELD_TOO_LONG", "Request contains text that is too long.");
  }
  return text;
}

function cleanContext(pageContext = {}) {
  const source = typeof pageContext === "object" && pageContext !== null ? pageContext : {};
  return {
    page: cleanText(source.page || "", 80),
    title: cleanText(source.title || "", 120),
    subtitle: cleanText(source.subtitle || "", 180)
  };
}

function cleanHistory(conversationHistory) {
  if (!Array.isArray(conversationHistory)) return [];
  return conversationHistory
    .slice(-MAX_HISTORY_ITEMS)
    .map((item) => {
      const role = item?.role === "assistant" ? "assistant" : item?.role === "user" ? "user" : "";
      const content = cleanText(item?.content || "", MAX_MESSAGE_LENGTH);
      return role && content ? { role, content } : null;
    })
    .filter(Boolean);
}

function cleanProviderText(value, maxLength) {
  const text = String(value || "").replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim();
  return text.length > maxLength ? `${text.slice(0, maxLength - 3)}...` : text;
}

function validatePayload(body) {
  const message = cleanText(body?.message || "", MAX_MESSAGE_LENGTH);
  if (!message) {
    throw requestError(400, "MESSAGE_REQUIRED", "Message is required.");
  }

  const role = body?.role === "manager" || body?.role === "management" ? "manager" : "tenant";
  return {
    message,
    role,
    pageContext: cleanContext(body?.pageContext),
    conversationHistory: cleanHistory(body?.conversationHistory)
  };
}

function systemPromptFor(payload) {
  const roleLabel = payload.role === "manager" ? "property management company" : "tenant";
  return [
    "You are EstateFlow Ask AI, a concise assistant inside a real estate management dashboard.",
    `The current user is a ${roleLabel}.`,
    "Use the provided page context only for dashboard-specific guidance.",
    "Do not request or expose API keys, credentials, payment card data, or private secrets.",
    "If an action needs real authentication or payment confirmation, explain the next safe step and stop."
  ].join(" ");
}

function providerMessages(payload) {
  const contextLine = `Current page: ${payload.pageContext.title || "Dashboard"} (${payload.pageContext.page || "unknown"}). ${payload.pageContext.subtitle || ""}`;
  return [
    { role: "system", content: systemPromptFor(payload) },
    { role: "user", content: contextLine },
    ...payload.conversationHistory,
    { role: "user", content: payload.message }
  ];
}

function extractProviderMessage(data) {
  if (typeof data?.choices?.[0]?.message?.content === "string") return data.choices[0].message.content;
  if (typeof data?.output_text === "string") return data.output_text;
  if (Array.isArray(data?.output)) {
    const text = data.output
      .flatMap((item) => item?.content || [])
      .map((item) => item?.text || "")
      .filter(Boolean)
      .join(" ");
    if (text) return text;
  }
  return "";
}

async function requestAI(payload) {
  const apiKey = process.env.AI_API_KEY;
  const model = process.env.AI_MODEL;
  const baseUrl = process.env.AI_API_BASE_URL || "https://api.openai.com/v1/chat/completions";

  if (!apiKey || !model || !baseUrl) {
    throw requestError(503, "AI_NOT_CONFIGURED", "AI is not configured yet.");
  }

  const providerResponse = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      messages: providerMessages(payload),
      temperature: 0.2,
      max_tokens: 500
    })
  });

  if (!providerResponse.ok) {
    throw requestError(502, "AI_PROVIDER_ERROR", "AI provider request failed.");
  }

  const data = await providerResponse.json();
  const message = cleanProviderText(extractProviderMessage(data), 4000);
  if (!message) {
    throw requestError(502, "AI_EMPTY_RESPONSE", "AI provider returned an empty response.");
  }
  return message;
}

async function handler(req, res) {
  applyCors(req, res);

  if (!isOriginAllowed(req)) {
    return sendJson(res, 403, { error: "ORIGIN_NOT_ALLOWED", message: "Origin is not allowed." });
  }

  if (req.method === "OPTIONS") return sendNoContent(res);
  if (req.method !== "POST") {
    return sendJson(res, 405, { error: "METHOD_NOT_ALLOWED", message: "Use POST." });
  }

  if (!withinRateLimit(clientIp(req))) {
    return sendJson(res, 429, { error: "RATE_LIMITED", message: "Too many requests. Try again shortly." });
  }

  try {
    const body = await readBody(req);
    const payload = validatePayload(body);
    const message = await requestAI(payload);
    return sendJson(res, 200, { message });
  } catch (error) {
    const statusCode = error.statusCode || 500;
    const code = error.code || "AI_REQUEST_FAILED";
    const message = statusCode >= 500 && code !== "AI_NOT_CONFIGURED"
      ? "AI response could not be loaded. Try again."
      : error.message;
    return sendJson(res, statusCode, { error: code, message });
  }
}

module.exports = handler;
module.exports._internal = {
  MAX_BODY_BYTES,
  MAX_MESSAGE_LENGTH,
  MAX_HISTORY_ITEMS,
  RATE_LIMIT_WINDOW_MS,
  RATE_LIMIT_MAX_REQUESTS,
  validatePayload,
  isOriginAllowed,
  withinRateLimit
};
