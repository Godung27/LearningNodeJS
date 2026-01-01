const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("middleware");
  next(); // allow the request to continue to next middleware in line
})

app.use((req, res, next) => {
  console.log("Next middleware");
})

const server = http.createServer(app);

server.listen(3000);
