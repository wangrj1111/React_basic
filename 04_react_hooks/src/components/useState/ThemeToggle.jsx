import React from "react";
import { useState } from "react";

const ThemeToggle = () => {
  //使用useState这个hook 来存储当前主题状态
  //是否是暗黑模式
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      style={{
        height: "100vh",
        background: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#333",
      }}
    >
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem libero
        voluptate sapiente, in sint voluptas ad dolorem totam repudiandae est
        soluta consectetur magnam! Asperiores consectetur repudiandae, ducimus
        distinctio sit nemo!
      </h1>
      <button onClick={toggleTheme}>
        切换到{isDarkMode ? "白天" : "黑夜"}模式
      </button>
    </div>
  );
};

export default ThemeToggle;
