// src/components/UserStatus.jsx
import React, { useContext } from "react";
import { LoginContext } from "./LoginContext";

const UserStatus = () => {
  const { user } = useContext(LoginContext);

  return <div>{user ? <p>当前用户: {user}</p> : <p>未登录</p>}</div>;
};

export default UserStatus;
