import { createApp } from "./app.js";

const port = Number(process.env.PORT ?? 3001);

createApp().listen(port, () => {
  console.log(`itil-demo-api listening on http://localhost:${port}`);
});
