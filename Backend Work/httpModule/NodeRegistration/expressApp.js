const express = require("express");
const fs = require("fs").promises;
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const fData = await fs.readFile("student.json", "utf-8");
    let arr = JSON.parse(fData);

    if (arr.some((ele) => ele.email === email)) {
      return res.json({ message: "This is already registered with us" });
    }

    arr.push({ name, email, password });
    await fs.writeFile("student.json", JSON.stringify(arr, null, 2));
    res.json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const fData = await fs.readFile("student.json", "utf-8");
    const arr = JSON.parse(fData);
    const user = arr.find(
      (ele) => ele.email === email && ele.password === password
    );

    if (user) {
      res.json({ message: "Login successful" });
    } else {
      res.json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
