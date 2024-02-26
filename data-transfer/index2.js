const express = require("express");
const app = express();
const path = require("path");

// app.get("/api/users", (req, res) => {
//   const userId = req.query.id;
//   // res.send(`User ID: ${userID}`);
//   res.send({
//     id: userId,
//     name: "John Smith",
//     email: "john@smith.com",
//   });
// });

const loggerMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware function
};
app.use(loggerMiddleware);

// app.get("/api/users/:id", (req, res) => {
//   const userId = req.params.id;
//   res.send(`User ID: ${userId}`);
// });
app.get("/api/location/:city/users/:id", (req, res) => {
  const city = req.params.city;
  const userId = req.params.id;
  console.log(`Request has city: ${city} and userId:${userId}`);
  res.send(`User ID: ${userId}`);
});

app.get("/api/users/create", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Formular</title>
  </head>
  <body>
    <form method="post" action="http://localhost:3000/api/users/create">
      <label>
        <input type="text" name="username" placeholder="Introdu numele" />
      </label>

      <label>
        <input type="password" name="password" placeholder="Introdu parola" />
      </label>

      <button type="submit">Trimite</button>
    </form>
  </body>
</html>
`);
  res.send(`User ID: ${userId}`);
});
app.post("/api/users/create", (req, res) => {
  const { username, email } = req.body;
  res.send(`Username: ${username}, Email: ${email}`);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
