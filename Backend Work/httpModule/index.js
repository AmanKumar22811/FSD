const http = require("http");

const PORT = 8080;
const server = http.createServer((_, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<h1 style='color:blue;background-color:yellow'>Hello</h1>");
  res.end();
});

server.listen(PORT, () => console.log(`Server listen at ${PORT}`));
