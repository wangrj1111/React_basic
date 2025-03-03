// src/components/LogoutButton.jsx
import React, { useContext } from "react";
import { LoginContext } from "./LoginContext";

const LogoutButton = () => {
  const { user, logout } = useContext(LoginContext);

  if (!user) return null;

  return <button onClick={logout}>登出</button>;
};

export default LogoutButton;
