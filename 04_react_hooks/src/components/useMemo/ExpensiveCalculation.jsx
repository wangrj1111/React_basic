import { useMemo } from "react";

const ExpensiveCalculation = ({ number }) => {
  const result = useMemo(() => {
    return number * 2;
  }, [number]);

  return <div>{result}</div>;
};

export default ExpensiveCalculation;
