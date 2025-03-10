import React from "react";
import { useLocation } from "react-router-dom";


const About = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const age = queryParams.get('age');
  
  return (
    <div>
      <h2>姓名：{name}</h2>
      <h2>年龄：{age}</h2>
    </div>
  );
};

export default About;
