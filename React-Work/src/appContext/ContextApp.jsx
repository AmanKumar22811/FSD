import React, { createContext } from "react";

export const context = createContext();

const data = {
  name: "Aman",
  branch: "CSE",
  sec: "A",
};

const ContextApp = ({ children }) => {
  return <context.Provider value={data}>{children}</context.Provider>;
};

export default ContextApp;
