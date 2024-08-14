import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";

export default function Calendar_component() {
  const [startDate, setStartDate] = useState(new Date());

  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 10);

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        minDate={new Date()}
        maxDate={maxDate}
        dateFormat={"dd/MM/yyyy"}
      />
    </div>
  );
}
