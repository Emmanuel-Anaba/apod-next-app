"use client";
import Image from "next/image";
import { RiInformation2Line } from "react-icons/ri";
import { useData } from "../context";

export default function Mainpage() {
  const data = useData();
  return (
    <main>
      <Image
        priority
        className="bg-zinc-700 object-cover"
        src={data?.hdurl}
        alt="See explanation"
        fill
      />
      <div>
        <h1>{data?.title}</h1>
        <p>&copy; {data?.copyright}</p>
      </div>
      <RiInformation2Line role="button" />;
    </main>
  );
}
