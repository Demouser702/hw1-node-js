const express = require("express");
const multer = require("multer");
const cors = require("cors");
const upload = multer({ dest: "uploads/" });

const app = express();

app.use(cors());
app.get("/", (res) => {
  res.render("index", { title: "Express" });
});

app.post("/profile", upload.single("avatar"), function (req, res, next) {
  console.log("Am primit date");
  console.dir(req.file);
  console.dir(req.body);
  //   // req.file is the `avatar` file
  //   // req.body will hold the text fields, if there were any
});

console.log("Listening on port 3000. ..");
app.listen(3000);
