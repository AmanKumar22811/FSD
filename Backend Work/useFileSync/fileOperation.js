const fs = require("fs");

const dataWrite = () => {
  try {
    fs.writeFileSync("data.txt", "hello NodeJS using fs module");
    console.log("data written successfully.");
  } catch (error) {
    console.log(error);
  }
};

const dataRead = () => {
  try {
    const rf = fs.readFileSync("data.txt", { encoding: "utf-8" });
    console.log(rf);
  } catch (error) {
    console.log(error);
  }
};

const dataAppend = (s) => {
  try {
    fs.appendFileSync("data.txt", s);
  } catch (error) {
    console.log(error);
  }
};

const dataDelete = () => {
  try {
    fs.unlinkSync("data.txt");
  } catch (error) {
    console.log(error);
  }
};
module.exports = { dataRead, dataWrite, dataAppend, dataDelete };
