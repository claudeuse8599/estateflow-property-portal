# Security

EstateFlow is a public frontend demo. Treat every committed file as public.

## API Keys

- Do not commit real API keys, tokens, certificates, or private `.env` files.
- Keep real AI provider keys only in server-side hosting environment variables.
- Do not use browser-exposed env prefixes such as `VITE_*`, `NEXT_PUBLIC_*`, or `REACT_APP_*` for private keys.
- `.env.example` is a placeholder reference only. It must never contain real values.

## Ask AI Integration

The GitHub Pages deployment is static and should stay in demo mode. Static hosting cannot protect a private AI key.

For a real AI integration, deploy the included `/api/ask-ai` route on a server-capable host or use the Convex `/estateflow/ask-ai` HTTP action. Store the real key in that backend's secret manager. The frontend can then be switched to API mode with a public configuration flag, while the key remains server-only.

The `/api/ask-ai` route includes:

- POST-only handling.
- JSON body size limits.
- Message and conversation history limits.
- Role-scoped request classification before any LLM call.
- Prompt-injection, secret, role-crossing, and out-of-dashboard blocking.
- Basic request pacing, duplicate-message blocking, and in-flight request protection.
- Server-side usage budgeting based on actual LLM processing time.
- Server-side model allowlisting; the MVP only allows `gpt-5.4-nano`.
- Origin checks through `AI_ALLOWED_ORIGINS`.
- Safe error responses that do not expose provider details.

## Convex Backend

The public `convexHttpUrl` in `config.js` is safe to expose. It is only the URL the browser calls.

The following values are secrets and must stay in Convex environment variables or GitHub Actions secrets:

- `AI_API_KEY`
- `OPENAI_API_KEY`
- `CONVEX_DEPLOY_KEY`
- Any future auth provider secret

The current Convex HTTP routes are unauthenticated for the internal MVP. Before external users or real tenant data, add backend-enforced tenant/company role checks.

Ask AI role selection is currently centralized in `getTrustedUserContext(...)` on the server/Convex route. It uses the demo role only because this MVP has no real auth yet. Replace that helper with signed auth/session data before storing real tenant records.

## Local Checks

Run the focused scanner before publishing:

```bash
node scripts/security-scan.mjs
```

For a history audit, run high-confidence provider-key searches before pushing public changes. If a real key is ever committed, rotate it immediately with the provider. Rewriting git history does not make a leaked key safe again.
