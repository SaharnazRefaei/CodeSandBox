import React from "react";

export default function ChildCount({ action }) {
  console.log("ChildComponent rendered");
  return <button onClick={action}>Click Me</button>;
}
