import { createServer } from "node:http";
import { createRequire } from "node:module";
import { readFile, stat } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 4181);
const HOST = process.env.HOST || "127.0.0.1";

function loadEnvFile(fileName) {
  const filePath = path.join(__dirname, fileName);
  if (!existsSync(filePath)) return;

  const lines = readFileSync(filePath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const index = trimmed.indexOf("=");
    const key = trimmed.slice(0, index).trim();
    let value = trimmed.slice(index + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (key && process.env[key] === undefined) process.env[key] = value;
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env");

const require = createRequire(import.meta.url);
const askAIHandler = require("./api/ask-ai.js");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp"
};

function localAskAIMode() {
  if (process.env.ASK_AI_MODE) return process.env.ASK_AI_MODE;
  return process.env.OPENAI_API_KEY || process.env.AI_API_KEY ? "api" : "demo";
}

function configScript() {
  return `// Runtime configuration served by the local EstateFlow server.
window.ESTATEFLOW_CONFIG = {
  appId: ${JSON.stringify(process.env.ESTATEFLOW_APP_ID || "estateflow-mvp")},
  backendMode: ${JSON.stringify(process.env.ESTATEFLOW_BACKEND_MODE || "local")},
  convexHttpUrl: ${JSON.stringify(process.env.ESTATEFLOW_CONVEX_HTTP_URL || "")},
  askAiMode: ${JSON.stringify(localAskAIMode())}
};
`;
}

async function serveStatic(request, response) {
  const url = new URL(request.url || "/", `http://${HOST}:${PORT}`);
  if (url.pathname === "/config.js") {
    response.writeHead(200, {
      "Content-Type": "text/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    });
    response.end(configScript());
    return;
  }

  const requestedPath = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
  const filePath = path.normalize(path.join(__dirname, requestedPath));
  if (!filePath.startsWith(__dirname)) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  try {
    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) throw new Error("Not a file");
    const body = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream"
    });
    response.end(body);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}

const server = createServer((request, response) => {
  if (request.url?.startsWith("/api/ask-ai")) {
    askAIHandler(request, response);
    return;
  }

  serveStatic(request, response).catch(() => {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Server error");
  });
});

server.listen(PORT, HOST, () => {
  console.log(`EstateFlow local server running at http://${HOST}:${PORT}/`);
});
