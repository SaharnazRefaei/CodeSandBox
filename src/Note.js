import React, { useState } from "react";
import MyContext from "./MyContext";
import NoteDisply from "./NoteDisply";

// Step 1: Create a context

export default function Note() {
  // Step 2: Declare a state variable to be passed down via context
  const [note, setNote] = useState("");
  const [showDisply, setShowDisply] = useState(false);

  const handleFilter = () => {
    setShowDisply(true);
  };

  return (
    // Step 3: Use the Provider component to pass down the value
    <MyContext.Provider value={{ note }}>
      {showDisply && <NoteDisply />}
      <div className="input-group">
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter Note"
        />
        <button onClick={handleFilter}>Save</button>
      </div>
    </MyContext.Provider>
  );
}
