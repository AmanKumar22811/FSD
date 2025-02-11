const {
  dataRead,
  dataWrite,
  dataAppend,
  dataDelete,
} = require("./fileOperation");

dataRead();
dataWrite();
dataAppend("hello");
dataDelete();
