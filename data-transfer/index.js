const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

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
  const options = {
    root: path.join(__dirname),
  };

  const fileName = "form.html";
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.error("Error sending file:", err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});
app.use(express.json());
app.post("/api/users/create", (req, res) => {
  console.dir(req.body);
  // const { username, email } = req.body;
  // res.send(`Username: ${username}, Email: ${email}`);
  res.send("User has been created.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// app.listen(PORT, function (err) {
//   if (err) console.error(err);
//   console.log("Server listening on PORT", PORT);
// });
