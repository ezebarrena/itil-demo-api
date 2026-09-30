# itil-demo-api

Minimal Node.js (Express) API used as a **test subject for ITIL Scanner**. It exposes a single route that the
landing page ([itil-demo-web](../itil-demo-web)) calls.

## Run

```bash
npm install
npm run dev      # http://localhost:3001
npm test
```

| Route | Description |
|---|---|
| `GET /api/message` | Returns a message, service name, version and timestamp |

Environment variables: `PORT` (default `3001`), `CORS_ORIGIN` (default `http://localhost:5173`).

## Delivery process

- Changes go through pull requests (see `.github/pull_request_template.md`).
- CI runs tests on every PR; `main` deploys to the `production` environment with a smoke test
  (see [docs/deployment.md](docs/deployment.md)).
