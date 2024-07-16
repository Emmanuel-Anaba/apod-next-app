"use client";
import { useEffect, useState } from "react";
import { FastAverageColor } from "fast-average-color";

export function useDynamicColor(imageUrl) {
  const [dark, setDark] = useState(null);

  useEffect(() => {
    const image = new Image();
    const fac = new FastAverageColor();

    const updateColor = () => {
      const { isDark } = fac.getColor(image);
      setDark(isDark);
    };

    const proxyUrl = "https://corsproxy.io/?";
    image.crossOrigin = "Anonymous";
    image.src = proxyUrl + encodeURIComponent(imageUrl);

    if (image.complete) {
      updateColor();
    } else {
      image.addEventListener("load", updateColor);
    }

    return () => {
      image.removeEventListener("load", updateColor);
    };
  }, [imageUrl]);

  return [dark, setDark];
}
