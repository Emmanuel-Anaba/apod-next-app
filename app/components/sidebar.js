"use client";
import { RiArrowRightCircleLine } from "react-icons/ri";
import { useData } from "../context";

export default function Sidebar() {
  const data = useData();
  return (
    <>
      <div className="overlay" />
      <aside className="right-0">
        <h2>{data?.title}</h2>
        <span>{data?.date}</span>
        <p>{data?.explanation}</p>
        <RiArrowRightCircleLine role="button" />
      </aside>
    </>
  );
}
