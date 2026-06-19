# EstateFlow Property Portal

Frontend MVP for a real estate property management portal with tenant and company dashboards, persistent demo data, an Action Center, document views, payment review flows, maintenance tracking, contract renewals, notifications, and dark/light mode.

## Run Locally

This is a static frontend demo. No real authentication or real payment gateway is required.

```bash
python3 -m http.server 4181 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4181/
```

To run Ask AI against the local secure backend, use the Node server instead:

```bash
node server.mjs
```

The local server reads `.env.local`, serves the same dashboard, and proxies Ask AI through `/api/ask-ai`.

## Demo Roles

- Tenant
- Property Management

Any email and password will open the selected demo portal.

## Notes

- Demo data persists locally first and syncs to the configured Convex backend.
- Convex stores the shared internal MVP snapshot for tenant and management portals.
- The Data Reset button restores the original seeded data.
- Payment, document, notification, and request flows are demo-only.
- Ask AI runs through the Convex backend on GitHub Pages so the API key stays server-side.

## Convex Backend

GitHub Pages can continue hosting the frontend while Convex stores shared tenant/company data.

The live `config.js` uses the production Convex HTTP actions URL:

```js
backendMode: "convex"
convexHttpUrl: "https://fast-duck-582.convex.site"
askAiMode: "api"
```

The `convexHttpUrl` value is public and safe to expose. Private values such as `OPENAI_API_KEY` live only in Convex environment variables.

For a local-only fallback, switch `config.js` back to:

```js
backendMode: "local"
askAiMode: "demo"
```

See `CONVEX_SETUP.md` for deployment steps, environment variables, and the later auth plan.

## Ask AI API Readiness

The public GitHub Pages site is static, so it cannot safely hold an AI API key. The repository includes a server-side `/api/ask-ai` route for hosts that support backend/serverless functions and a Convex `/estateflow/ask-ai` HTTP action for the GitHub Pages setup.

Both server routes include dashboard-only scope checks, tenant/management role boundaries, prompt-injection blocking, duplicate/rate limiting, and usage limits based on actual LLM processing time. The MVP backend only allows `gpt-5.4-nano`.

To rotate or reconnect the provider:

1. Update the private `OPENAI_API_KEY` only in Convex environment variables.
2. Keep `AI_MODEL=gpt-5.4-nano`, or omit it to use the locked default.
3. Keep `ASK_AI_USAGE_LIMIT_MS` and rate-limit values set for the demo window.
4. Redeploy Convex if backend function code changes.
5. Keep GitHub Pages free of private keys.

Never put a real key in `app.js`, `index.html`, `styles.css`, local storage, or any browser-exposed environment variable.

## Security Checks

Before publishing public updates, run:

```bash
node scripts/security-scan.mjs
node tests/interaction-audit.mjs
```

See `SECURITY.md` and `SECURITY_CHECKLIST.md` for the full public-repo checklist.
