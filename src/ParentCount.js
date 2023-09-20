import React, { useState, useCallback } from "react";
import ChildCount from "./ChildCount";

export default function ParentCount() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  console.log("ParentComponent rendered");

  return (
    <div>
      <p>Count: {count}</p>
      <ChildCount action={incrementCount} />
    </div>
  );
}
