import React from "react";

const Child3 = ({ data }) => {
  return (
    <div>
      <p>Name : {data.name}</p>
      <p>Branch : {data.branch}</p>
      <p>Sec : {data.sec}</p>
    </div>
  );
};

export default Child3;
