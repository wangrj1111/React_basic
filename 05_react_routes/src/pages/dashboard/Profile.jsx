import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../../app.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <nav className="vertical-nav">
        <NavLink to="Fans" className={({ isActive }) => isActive ? 'active' : ''}>
          Fans
        </NavLink>
        <NavLink to="Follow" className={({ isActive }) => isActive ? 'active' : ''}>
          Follow
        </NavLink>
      </nav>
      <div className="content-area">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;