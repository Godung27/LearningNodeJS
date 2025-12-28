const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<form action='/create-user' method='POST'><input type='text' name='username'><button type='submit'>Send</button></form>");
    res.write("</html");
    return res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<ul><li>User1</li></ul>");
    res.write("</html");
    return res.end();
  }

  if (url === "/create-user") {
    const body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split("=")[1]);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
});

server.listen(3000);