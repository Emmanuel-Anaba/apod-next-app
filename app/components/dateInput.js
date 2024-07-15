"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DateInput() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    router.push(`/?date=${date}`);
  };
  
  const minDate = "1995-06-16";
  const maxDate = new Date().toISOString().split("T")[0];

  return (
    <input
      className="absolute z-50 bg-transparent"
      type="date"
      value={selectedDate}
      onChange={handleDateChange}
      min={minDate}
      max={maxDate}
    />
  );
}
