# Convex Backend Setup

EstateFlow can stay on GitHub Pages while Convex stores shared portal data and runs server-side Ask AI.

## Architecture

```text
GitHub Pages frontend
  -> Convex HTTP actions
  -> Convex tables
  -> Optional LLM provider from Convex server code
```

GitHub Pages cannot protect private keys. Convex stores the data and calls the LLM API from server-side functions.

## Current MVP Scope

- No real auth yet.
- One shared internal app snapshot is stored by `appId`.
- Tenant and management portals read/write the same snapshot.
- Ask AI remains demo by default.
- Ask AI can call Convex `/estateflow/ask-ai` when `askAiMode` is set to `api`.
- Ask AI requests are classified server-side before any LLM call.
- Tenant and management prompts receive different minimal dashboard context.
- Usage is tracked by actual LLM processing time, not by how long the chat panel stays open.

## Local Setup

Install dependencies:

```bash
npm install
```

Initialize or connect Convex:

```bash
npm run convex:dev
```

Install Convex AI guidance files before deeper backend work:

```bash
npm run convex:ai-files
```

Deploy Convex:

```bash
npm run convex:deploy
```

Set Convex environment variables:

```bash
CONVEX_ALLOWED_ORIGINS=http://localhost:8000,http://127.0.0.1:8000,https://claudeuse8599.github.io
OPENAI_API_KEY=your_server_side_key
AI_MODEL=gpt-5.4-nano
AI_API_BASE_URL=https://api.openai.com/v1/chat/completions
ASK_AI_USAGE_LIMIT_MS=300000
ASK_AI_MAX_MESSAGES_PER_MINUTE=10
ASK_AI_DUPLICATE_MESSAGE_WINDOW_MS=60000
ASK_AI_MAX_BLOCKED_ATTEMPTS_PER_MINUTE=8
```

Do not put these private values in frontend files.

## Connect GitHub Pages

After Convex is deployed, update `config.js`:

```js
window.ESTATEFLOW_CONFIG = {
  appId: "estateflow-mvp",
  backendMode: "convex",
  convexHttpUrl: "https://your-deployment.convex.site",
  askAiMode: "demo"
};
```

To enable real Ask AI responses after Convex has private LLM env vars:

```js
askAiMode: "api"
```

The `convexHttpUrl` value is public. It is not an API key.

## Ask AI Role Guardrails

The current MVP has no real auth, so both the Node route and Convex route use a centralized `getTrustedUserContext(...)` helper that maps the selected demo portal to either the tenant or management role. Keep all future role changes in that helper until real auth is added.

The Ask AI route blocks these before calling the LLM:

- Out-of-dashboard topics.
- Tenant requests for management finance, portfolio, tenant records, or other tenants.
- Prompt-injection attempts.
- Requests for API keys, env vars, logs, hidden prompts, or secrets.
- Duplicate rapid sends and high-frequency messages.

When a request is allowed, Convex builds a small authorized context from the current snapshot instead of sending the full app database.

For cost control, both the local API route and Convex route only allow `gpt-5.4-nano`. If `AI_MODEL` is changed to another model, Ask AI refuses the request server-side.

## GitHub Actions Later

For automatic backend deploys, add a GitHub Actions workflow that runs:

```bash
npm install
npm run convex:deploy
```

Store `CONVEX_DEPLOY_KEY` in GitHub Actions secrets. Do not commit it.

## Auth Later

Before real external users, add backend-enforced role rules so:

- Tenants can only read/write their own records.
- Company users can only manage their assigned properties.
- AI actions can only operate on data the current role can access.
