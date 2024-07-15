"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { IoCalendarOutline } from "react-icons/io5";

export default function DateInput() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("");
  const dateInputRef = useRef(null);

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    router.push(`/?date=${date}`);
  };
  
  const openDatePicker = () => {
    dateInputRef.current.showPicker();
  };

  const minDate = "1995-06-16";
  const maxDate = new Date().toISOString().split("T")[0];

  return (
    <div className="date-picker-container">
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        min={minDate}
        max={maxDate}
        ref={dateInputRef}
        className="date-picker"
      />
      <label htmlFor="date-input">
        <IoCalendarOutline className="calendar-icon" onClick={openDatePicker} />
      </label>
    </div>
  );
}
