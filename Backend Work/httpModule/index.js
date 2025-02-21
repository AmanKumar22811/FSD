const http = require("http");

const PORT = 8080;
const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    console.log(req.url + " " + req.method);
    res.write("<h1 style='color:blue;background-color:yellow'>Hello</h1>");
    res.end();
  }
  if (req.url === "/show" && req.method === "GET") {
    res.end(
      JSON.stringify({
        message: "Successfully hit the api",
      })
    );
  }
  if (req.url === "/show" && req.method === "POST") {
    res.end(
      JSON.stringify({
        message: "Successfully hit the post api @ /show",
      })
    );
  }
});

server.listen(PORT, () => console.log(`Server listen at ${PORT}`));
