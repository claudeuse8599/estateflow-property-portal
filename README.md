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

- Demo data persists in browser local storage.
- Convex support is available as an optional shared backend for internal MVP data.
- The Data Reset button restores the original seeded data.
- Payment, document, notification, and request flows are demo-only.
- Ask AI runs in demo mode on GitHub Pages until Convex API mode is configured.

## Optional Convex Backend

GitHub Pages can continue hosting the frontend while Convex stores shared tenant/company data.

By default, `config.js` keeps the app in local mode:

```js
backendMode: "local"
```

After deploying Convex, switch it to:

```js
backendMode: "convex"
convexHttpUrl: "https://your-deployment.convex.site"
```

See `CONVEX_SETUP.md` for deployment steps, environment variables, and the later auth plan.

## Ask AI API Readiness

The public GitHub Pages site is static, so it cannot safely hold an AI API key. The repository includes a server-side `/api/ask-ai` route for hosts that support backend/serverless functions and a Convex `/estateflow/ask-ai` HTTP action for the GitHub Pages setup.

Both server routes include dashboard-only scope checks, tenant/management role boundaries, prompt-injection blocking, duplicate/rate limiting, and usage limits based on actual LLM processing time. The MVP backend only allows `gpt-5.4-nano`.

To connect a real provider later:

1. Deploy Convex or another server-capable backend.
2. Copy `.env.example` values to private hosting environment variables.
3. Add the real `AI_API_KEY` only in the backend secret manager.
4. Keep `AI_MODEL=gpt-5.4-nano`, or omit it to use the locked default.
5. Set `ASK_AI_USAGE_LIMIT_MS` and rate-limit values for the demo window.
6. Switch the frontend to API mode with a public flag after the backend is live.

Never put a real key in `app.js`, `index.html`, `styles.css`, local storage, or any browser-exposed environment variable.

## Security Checks

Before publishing public updates, run:

```bash
node scripts/security-scan.mjs
node tests/interaction-audit.mjs
```

See `SECURITY.md` and `SECURITY_CHECKLIST.md` for the full public-repo checklist.
