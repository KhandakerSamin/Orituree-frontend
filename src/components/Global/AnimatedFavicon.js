"use client";
import { useEffect } from "react";

export default function AnimatedFavicon() {
  useEffect(() => {
    let link = document.querySelector("link[rel='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/gif";
    link.href = "/fav.gif";
  }, []);

  return null;
}
