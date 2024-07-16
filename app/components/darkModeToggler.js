"use client";
import { useDynamicColor } from "../utils/useDynamicColor";
import { useData } from "../context";
import { useEffect } from "react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

export default function DarkModeToggler() {
  const { data } = useData();
  const [dark, setDark] = useDynamicColor(data?.hdurl);

  useEffect(() => {
    const html = document.documentElement.classList;
    dark ? html.add("dark") : html.remove("dark");
  });

  return (
    <div
      className="darkModeToggler"
      role="button"
      onClick={() => setDark(!dark)}>
      {dark ? <RiMoonLine /> : <RiSunLine />}
    </div>
  );
}
