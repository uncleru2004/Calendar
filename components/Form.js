import { useState } from "react";
import Dialog from "./Dialog";

export default function Form() {
  const [value, setValue] = useState("");
  
  return (
    <>
      <input
        type="date"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      
    </>
  );
}
