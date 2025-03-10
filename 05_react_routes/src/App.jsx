import React from "react";

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import "./App.css"; // 引入CSS文件
const App = () => {
  return (
    <BrowserRouter>
     
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
