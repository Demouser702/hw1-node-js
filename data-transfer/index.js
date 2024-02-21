const express = require("express");
const app = express();
const path = require("path");

app.get("/api/users", (req, res) => {
  const userId = req.query.id;
  res.send(`User ID: ${userID}`);
});

app.get("/api/users/:id", (req, res) => {
  const userID = req.params.id;
  res.send(`User ID: ${userID}`);
});

app.post("/api/users", (req, res) => {
  const { username, email } = req.body;
  res.send(`Username: ${username}, Email: ${email}`);
});

app.listen(8080, () => {
  console.log("Server is running on port 3000");
});
