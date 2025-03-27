import "./App.css";
import Registration from "../component/Registration";
import { createBrowserRouter } from "react-router";

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Registration/>
    }
  ]);

  return <Registration />;
}

export default App;
