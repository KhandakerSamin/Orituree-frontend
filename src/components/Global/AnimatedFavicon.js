"use client";
import { useEffect } from "react";

export default function AnimatedFavicon() {
  useEffect(() => {
    const favicons = ["/favicon1.png", "/favicon2.png"];
    let index = 1;

    const interval = setInterval(() => {
      index = index === 0 ? 1 : 0;
      const link =
        document.querySelector("link[rel='icon']") ||
        document.createElement("link");
      link.rel = "icon";
      link.type = "image/png";
      link.href = favicons[index];
      if (!document.querySelector("link[rel='icon']")) {
        document.head.appendChild(link);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return null;
}
