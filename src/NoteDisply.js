import React, { useContext } from "react";
import MyContext from "./MyContext";
import "./note.css";

export default function NoteDisply() {
  // Step 4: Use useContext to consume the context value in a child component
  const { note } = useContext(MyContext);

  return (
    <div>
      <p className="h1-style">{note}</p>
    </div>
  );
}
