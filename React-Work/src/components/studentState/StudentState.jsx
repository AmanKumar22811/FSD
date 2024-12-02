import React, { useState } from "react";

const StudentState = () => {
  const [count, setCount] = useState(100);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 4)}>Do increament</button>
      <button onClick={() => setCount(count - 10)}>Do decreament</button>
    </div>
    
  );
};

export default StudentState;
