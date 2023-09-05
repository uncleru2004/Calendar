import Dialog from "../components/Dialog";
import { useState } from "react";
import { parseDate } from "../components/parseDate";

export default function Calender() {
  const [value, setValue] = useState("2023-09-01"),
    [date, setDate] = useState([]); 
  
    let newDate = parseDate(value);

  return (
    <>
      <input
        type="date"
        value={value}
        onInput={(event) => {
          setValue(event.target.value);
                    
        }}
      />
      
      <Dialog startShift={newDate[0]} days={newDate[1]} month={newDate[3]} />
    </>
  );
}
