// src/components/LoginForm.jsx
import React, { useState, useContext } from "react";
import { LoginContext } from "./LoginContext";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(LoginContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 简单的验证逻辑
    if (username === "admin" && password === "password") {
      login(username);
      alert("登录成功！");
    } else {
      alert("用户名或密码错误！");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <div>
        <button type="submit">登录</button>
      </div>
    </form>
  );
};

export default LoginForm;
