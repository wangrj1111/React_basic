import React from "react";
import { useState } from "react";

const TextInput = () => {
  const [inputValue, setInputValue] = useState("abc");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>你的输入值为：{inputValue}</p>
    </div>
  );
};

export default TextInput;
