"use client";
import img from "./assets/error-img.png";
import Image from "next/image";

export default function Error() {
  return (
    <div className="appstate">
      <div>
        <Image
          priority
          loading="eager"
          src={img}
          alt="error-img"
          width={200}
          height={200}
        />
        <p>An unexpected error has occurred!</p>
      </div>
    </div>
  );
}
