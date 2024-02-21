const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.get("./", (req, res) => {
  res.send("Am trimis date de la server spre clien");
});
app.get("./test", (req, res) => {
  res.send("Am trimis test");
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
