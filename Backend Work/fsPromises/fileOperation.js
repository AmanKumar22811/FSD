const promise = require("fs").promises;

promise
  .writeFile("data.txt", "Hello using fs promises to write ")
  .then(() => console.log("write successfully"))
  .catch((err) => console.log(err));
