const fs = require("fs");

const write = () => {
  try {
    fs.writeFile("data.txt", "Welcome to FSD session ", () => {
      console.log("write file done");
    });
  } catch (error) {
    console.log(error);
  }
};
const read = () => {
  try {
    fs.readFile("data.txt", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const append = () => {
  try {
    fs.appendFile("data.txt", " appended data", () => {
      console.log("Data appended successfully.");
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteFile = () => {
  try {
    fs.unlink("data.txt", () => {
      console.log("file delete successfully");
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { read, write, append, deleteFile };
