import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registration from "../component/Registration";
import Login from "../component/Login";
import Home from "../component/Home";
import Dashboard from "../component/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
