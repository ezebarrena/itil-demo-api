import express from "express";

const ALLOWED_ORIGIN = process.env.CORS_ORIGIN ?? "http://localhost:5173";

export function createApp() {
  const app = express();

  // Minimal CORS so the landing page (another origin) can call the API.
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
    res.setHeader("Access-Control-Allow-Methods", "GET");
    next();
  });

  // The only route of the service.
  app.get("/api/message", (req, res) => {
    res.json({
      message: "Hello from the ITIL demo API",
      service: "itil-demo-api",
      version: process.env.npm_package_version ?? "1.0.0",
      timestamp: new Date().toISOString(),
    });
  });

  return app;
}
