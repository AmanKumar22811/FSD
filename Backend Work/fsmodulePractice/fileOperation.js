const fs = require("fs").promises;

const dataCopy = async () => {
  try {
    const data = await fs.readFile("studentData.json", "utf8");
    console.log("Read file content:", data);
    await fs.writeFile("target.json", data);
    const targetData = await fs.readFile("target.json", "utf-8");
    console.log(targetData);
  } catch (err) {
    console.error("Read Error:", err);
  }
};

module.exports={dataCopy}
