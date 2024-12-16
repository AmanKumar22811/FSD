import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppProp from "./AppProp.jsx";
import ContextApp from "./appContext/ContextApp.jsx";
import Child1Context from "./appContext/Child1Context.jsx";
import Child2Context from "./appContext/Child2Context.jsx";
import Child3Context from "./appContext/Child3Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <AppProp /> */}
    <ContextApp>
      <Child1Context />
      <Child2Context />
      <Child3Context />
    </ContextApp>
  </StrictMode>
);
