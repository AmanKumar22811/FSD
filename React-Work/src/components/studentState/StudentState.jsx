import React, { useState } from "react";

const StudentState = () => {
  const [count, setCount] = useState(100);
  return <div>{count}</div>;
};

export default StudentState;
