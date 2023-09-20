import "./styles.css";
import React from "react";
import Movies from "./Movies";
import Note from "./Note";
import ParentCount from "./ParentCount";

export default function App() {
  return (
    <>
      <Movies />
      <Note />
      <ParentCount />
    </>
  );
}
