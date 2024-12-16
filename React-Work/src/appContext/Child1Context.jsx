import React, { useContext } from "react";
import { context } from "./ContextApp";

const Child1Context = () => {
  const { name, branch, sec } = useContext(context);
  return (
    <div>
      <p>Name : {name}</p>
      <p>Branch : {branch}</p>
      <p>Section : {sec}</p>
    </div>
  );
};

export default Child1Context;
