import React from "react";
import { Link, Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/login">LOGIN</Link>
          <br />
          <Link to="/registration">REGISTRATION</Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default MainLayout;
