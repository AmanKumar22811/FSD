const express = require("express");

const PORT = 3002;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).json({
      message: "Welcome to express server",
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Error: " + e.message,
    });
  }
});

app.post("/data", (req, res) => {
  const { name, email } = req.body;

  res.status(200).json({
    message: "Hit the /data API",
    name,
    email,
  });
});

app.delete("/data", (req, res) => {
  res.status(200).json({
    message: "Hit the delete API",
  });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
