const fs = require("fs").promises;

const writeData = () => {
  fs.writeFile("data.txt", "Hello using fs promises to write ")
    .then(() => console.log("Write successful"))
    .catch((err) => console.error("Write Error:", err));
};

const readData = () => {
  fs.readFile("data.txt", "utf8")
    .then((data) => console.log("Read file content:", data))
    .catch((err) => console.error("Read Error:", err));
};

module.exports = { writeData, readData };
