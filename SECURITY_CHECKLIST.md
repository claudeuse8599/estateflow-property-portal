# Public Repository Security Checklist

Use this checklist before each public publish.

## Secrets

- [ ] No real `.env` files are tracked.
- [ ] `.env.example` contains placeholders only.
- [ ] No API key, token, certificate, or private key is committed.
- [ ] Private provider keys are stored only in server-side hosting settings.
- [ ] Frontend code does not reference private key env names or provider authorization headers.

## Ask AI

- [ ] GitHub Pages remains in demo mode.
- [ ] API mode calls only the internal `/api/ask-ai` route.
- [ ] `/api/ask-ai` validates body size, message length, history length, role, and page context.
- [ ] `/api/ask-ai` returns safe errors and never returns provider headers or raw provider failures.
- [ ] `AI_ALLOWED_ORIGINS` includes only approved dashboard origins.

## Release

- [ ] Run `node scripts/security-scan.mjs`.
- [ ] Run `node tests/interaction-audit.mjs`.
- [ ] Check `git status --short` for accidental files before committing.
- [ ] If any real secret was exposed, rotate it before doing anything else.
