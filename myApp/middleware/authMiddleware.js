const jwt = require("jsonwebtoken");

const protectRoute = (req, res, next) => {
  /*Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWVmNWQ2YmRmMTIzNTUyMWQwOWZhNWMiLCJpYXQiOjE3MTAyMjg1NDYsImV4cCI6MTcxMDIzMjE0Nn0.Gn7manjgHEYrJIwJjxlp7npnXNqLfFiC8ix3q6Tqd6Y
["Bearer", eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWVmNWQ2YmRmMTIzNTUyMWQwOWZhNWMiLCJpYXQiOjE3MTAyMjg1NDYsImV4cCI6MTcxMDIzMjE0Nn0.Gn7manjgHEYrJIwJjxlp7npnXNqLfFiC8ix3q6Tqd6Y]
   
Array[1]*/
  const token = req.cookies.jwt || req.headers.authorization?.split(" ")[1]; // Extracting the token

  if (!token) {
    return res.status(401).send("🚫 Access Denied: No token provided!");
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send("🚫 Invalid token.");
  }
};

module.exports = protectRoute;
