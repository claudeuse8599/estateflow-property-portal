# Security

EstateFlow is a public frontend demo. Treat every committed file as public.

## API Keys

- Do not commit real API keys, tokens, certificates, or private `.env` files.
- Keep real AI provider keys only in server-side hosting environment variables.
- Do not use browser-exposed env prefixes such as `VITE_*`, `NEXT_PUBLIC_*`, or `REACT_APP_*` for private keys.
- `.env.example` is a placeholder reference only. It must never contain real values.

## Ask AI Integration

The GitHub Pages deployment is static and should stay in demo mode. Static hosting cannot protect a private AI key.

For a real AI integration, deploy the included `/api/ask-ai` route on a server-capable host and store the real key in that host's secret manager. The frontend can then be switched to API mode with a public configuration flag, while the key remains server-only.

The `/api/ask-ai` route includes:

- POST-only handling.
- JSON body size limits.
- Message and conversation history limits.
- Basic IP rate limiting.
- Origin checks through `AI_ALLOWED_ORIGINS`.
- Safe error responses that do not expose provider details.

## Local Checks

Run the focused scanner before publishing:

```bash
node scripts/security-scan.mjs
```

For a history audit, run high-confidence provider-key searches before pushing public changes. If a real key is ever committed, rotate it immediately with the provider. Rewriting git history does not make a leaked key safe again.
