import React from "react";
import { Outlet, NavLink,useLocation } from "react-router-dom";
import "../../app.css";
const Dashboard = () => {
  const location = useLocation();
  const { username } = location.state||{};
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {username}!</p>
      <nav>
        <NavLink to="profile" activeClassName="active">
          Profile
        </NavLink>
        <NavLink to="setting" activeClassName="active">
          Setting
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
