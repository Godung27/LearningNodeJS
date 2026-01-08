const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("always work");
  next();
})

app.use("/about", (req, res, next) => {
  res.send("<h1>This is About page!</h1>")
})

app.use("/", (req, res, next) => {
  console.log("Next middleware");
  res.send("<h1>Hello from Express!</h1>")
})

app.listen(3000);
