const jwt = require("jsonwebtoken");
require("dotenv").config();
// Payload data
const user = {
  id: 1,
  username: "john_snow",
  email: "john.snow@goit.com",
};

// Secret key
const secretKey = process.env.API_SECRET_KEY;
// const secretKey = "AHiudj+ jdijwio";

// Sign the JWT
const token = jwt.sign(user, secretKey, { expiresIn: "1h" });
console.log(token);
const tokenGeneratedFromTasks = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJqb2huX3Nub3ciLCJlbWFpbCI6ImpvaG4uc25vd0Bnb2l0LmNvbSIsImlhdCI6MTcxMDE2MTI3OCwiZXhwIjoxNzEwMTY0ODc4fQ.avoP7lqvOQVKhrdoMs0pGNLUL8Oi3Kaa23o58xf3-2o`;

// Verify the token
try {
  const decoded = jwt.verify(tokenGeneratedFromTasks, secretKey);
  console.log(decoded);
} catch (error) {
  console.error("Invalid or expired token:", error.message);
}

// const tokenGeneratedFromTasks = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWU2MTY5YmMwMTAxNTVlNjdlODYyZGIiLCJpYXQiOjE3MDk1NzgwMTYsImV4cCI6MTcwOTU4MTYxNn0.xpNIGApH2tt4s_Xu9AxvHUiOpRTMKxMEj-q0CdxwNdw`;
// const tokenGeneratedFromTasks1 = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJ0ZXN0Lm1hcmVzQGdvaXQuY29tIiwiaWF0IjoxNzEwMTYwOTQ4LCJleHAiOjE3MTAxNjQ1NDh9.noSBMMj2MurAsLNnbN-CKpJeermiwCtEwhUWzLAf0O0`;
