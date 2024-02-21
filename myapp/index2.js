import express from "express"; // import librarie in fisier
// const express = require("express"); se adauga "type": "module" in package.json
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("Hello test!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
