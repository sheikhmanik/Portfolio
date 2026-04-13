"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor") as HTMLDivElement;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="custom-cursor pointer-events-none fixed top-0 left-0 w-6 h-6 rounded-full bg-cyan-400 mix-blend-difference z-[9999]"
      style={{ transform: "translate(-50%, -50%)" }}
    ></div>
  )
}