// src/components/NavBar.jsx
import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from 'antd';
import "../App.css";

const NavBar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login'); // 导航到登录页面
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#001529', color: '#fff', padding: '10px 20px' }}>
      <div>
        <NavLink to="/" style={{ marginRight: 10, color: '#fff' }} activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" style={{ marginRight: 10, color: '#fff' }} activeClassName="active">
          About
        </NavLink>
        <NavLink to="/dashboard" style={{ marginRight: 10, color: '#fff' }} activeClassName="active">
          Dashboard
        </NavLink>
        <NavLink to="/book/123" style={{ marginRight: 10, color: '#fff' }} activeClassName="active">
          Book
        </NavLink>
      </div>
      <div>
        {user ? (
          <>
            <span>Welcome, {user.username}</span>
            <Button onClick={handleLogout} style={{ marginLeft: 10, color: '#fff', border: '1px solid #fff', backgroundColor: 'transparent', cursor: 'pointer' }}>
              Logout
            </Button>
          </>
        ) : (
          <NavLink to="/login" style={{ color: '#fff' }}>Login</NavLink>
        )}
      </div>
    </nav>
  );
};

export default NavBar;