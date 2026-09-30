import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import { createApp } from "../src/app.js";

let server;
let baseUrl;

before(async () => {
  server = createApp().listen(0);
  await new Promise((resolve) => server.once("listening", resolve));
  baseUrl = `http://localhost:${server.address().port}`;
});

after(() => server.close());

test("GET /api/message returns the service message", async () => {
  const res = await fetch(`${baseUrl}/api/message`);
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.equal(body.service, "itil-demo-api");
  assert.match(body.message, /Hello/);
});

test("GET /api/message allows the landing page origin", async () => {
  const res = await fetch(`${baseUrl}/api/message`);
  assert.ok(res.headers.get("access-control-allow-origin"));
});

test("unknown routes return 404", async () => {
  const res = await fetch(`${baseUrl}/api/unknown`);
  assert.equal(res.status, 404);
});
