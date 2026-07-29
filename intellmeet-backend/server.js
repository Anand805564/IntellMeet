const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Render!");
});

app.get("/test", (req, res) => {
  res.json({ success: true });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});