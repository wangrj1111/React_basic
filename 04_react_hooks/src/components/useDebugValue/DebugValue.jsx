import { useState, useDebugValue } from "react";

function useCustomHook(value) {
  useDebugValue(value ? "Active" : "Inactive");
  return value;
}

const DebugValue = () => {
  const [isActive, setIsActive] = useState(false);
  useCustomHook(isActive);

  return (
    <>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </>
  );
};

export default DebugValue;
