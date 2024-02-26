const express = require("express");
const usersRouter = require("./routes/users");
const itemsRouter = require("./routes/items");
const loggerMiddleware = require("./middleware/logger");
const app = express();

app.use(loggerMiddleware);
app.get("/", (req, res) => {
  res.send("Pagina principala");
});
app.use("/users", usersRouter);
app.use("/items", itemsRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
