const fs = require("fs").promises;
const http = require("http");

const PORT = 2527;

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    try {
      res.setHeader("Content-Type", "text/html");
      res.write("Welcome to http and fs module");

      const data = await fs.readFile("studentData.json", { encoding: "utf-8" });

      res.end(data);
    } catch (error) {
      console.log(error);
    }
  } else if (req.url === "/home") {
    res.setHeader("Content-Type", "text/html");
    const htmlTemplate = await fs.readFile("home.html");
    res.end(htmlTemplate);
  } else if (req.url === "/textdata") {
    res.setHeader("Content-Type", "text");
    const data = await fs.readFile("student.txt");
    res.end(data);
  } else {
    res.setHeader("Content-Type", "text/html");
    const htmlTemplate = await fs.readFile("error.html");
    res.end(htmlTemplate);
  }
});

server.listen(PORT, () => console.log(`Server listening at ${PORT}`));
