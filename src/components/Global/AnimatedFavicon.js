"use client";
import { useEffect } from "react";

export default function AnimatedFavicon() {
  useEffect(() => {
    const favicons = ["/favicon1.png", "/favicon2.png"];
    let index = 0;

    const getLink = () => {
      let link = document.querySelector("link[rel='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        link.type = "image/png";
        document.head.appendChild(link);
      }
      return link;
    };

    // Set favicon1 immediately on mount
    getLink().href = favicons[0];

    const interval = setInterval(() => {
      index = index === 0 ? 1 : 0;
      getLink().href = favicons[index];
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return null;
}
