import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
  }, [currentTime]);

  return (
    <div>
      <h1>当前时间: {currentTime}</h1>
    </div>
  );
};

export default Clock;
