const http = require("http");
const fs = require("fs").promises;

const PORT = 3001;
const server = http.createServer((req, res) => {
  // res.end("Welcome to node server")
  const { url, method } = req;
  if (url === "/register" && method === "POST") {
    let body = "";
    let arr = [];
    req.on("data", (chunck) => {
      body += chunck;
    });
    req.on("end", async () => {
      const { name, email, password } = JSON.parse(body);
      console.log(name);
      await fs.writeFile(
        "student.json",
        JSON.stringify({ name, email, password })
      );
      // console.log(body);
    });
    res.end(
      JSON.stringify({
        message: "/register api hit successfully",
      })
    );
  }
});

server.listen(PORT, () => {
  console.log("Server listen on " + PORT);
});
