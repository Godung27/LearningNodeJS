const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("middleware");
  next(); // allow the request to continue to next middleware in line
})

app.use((req, res, next) => {
  console.log("Next middleware");
  res.send("<h1>Hello from Express!</h1>")
})

app.listen(3000);
