import React from "react";
import Child1 from "./components/Child1";
const AppProp = () => {
  const data = {
    name: "Aman Kumar",
    branch: "CSE",
    sec: "A",
  };

  return (
    <div>
      <Child1 data={data} />
    </div>
  );
};

export default AppProp;
