# Deployment

Every push to `main` runs the **Deploy production** workflow:

1. Install dependencies and run the test suite.
2. Deploy the service (simulated in this demo repository).
3. Run a smoke test against `GET /api/message`.

The workflow uses the GitHub environment `production`, so each run is recorded as a GitHub Deployment.
