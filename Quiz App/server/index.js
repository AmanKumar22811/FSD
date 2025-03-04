const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.json");

const getUsers = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const saveUsers = (users) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;
  const method = req.method;
  let users = getUsers();

  if (pathname === "/users" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } else if (pathname.startsWith("/user/") && method === "GET") {
    const id = parseInt(pathname.split("/")[2]);
    const user = users.find((u) => u.id === id);
    if (user) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(user));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "User not found" }));
    }
  } else if (pathname === "/edituser" && method === "PATCH") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const { id, name, password, email } = JSON.parse(body);
      const user = users.find((u) => u.id === id);
      if (user) {
        user.name = name;
        user.password = password;
        user.email = email;
        saveUsers(users);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "User updated" }));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "User not found" }));
      }
    });
  } else if (pathname === "/createuser" && method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const newUser = JSON.parse(body);
      users.push(newUser);
      saveUsers(users);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "User created" }));
    });
  } else if (pathname === "/deleteuser" && method === "DELETE") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const { id } = JSON.parse(body);
      const index = users.findIndex((u) => u.id === id);
      if (index !== -1) {
        users.splice(index, 1);
        saveUsers(users);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "User deleted" }));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "User not found" }));
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
