const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
}, 3000);

server.listen(3000);