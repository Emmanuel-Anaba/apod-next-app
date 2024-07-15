"use client";
import { RiArrowRightCircleLine } from "react-icons/ri";
import { useData } from "../context";

export default function Sidebar() {
  const { data, open, toggleSidebar } = useData();

  return (
    <>
      {open && <div className="overlay" onClick={toggleSidebar} />}
      <aside className={open ? "right-0" : "-right-full"}>
        <h2>{data?.title}</h2>
        <span>{data?.date}</span>
        <p>{data?.explanation}</p>
        <RiArrowRightCircleLine role="button" onClick={toggleSidebar} />
      </aside>
    </>
  );
}
