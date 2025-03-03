import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        height: "100vh",
        background: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        切换到 {theme === "light" ? "暗黑夜" : "明亮模式"}
      </button>
    </div>
  );
};

export default ThemeButton;
