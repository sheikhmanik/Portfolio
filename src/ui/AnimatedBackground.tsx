"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function AnimatedBackground() {
  useEffect(() => {
    const floatBlob = (selector: string, config: gsap.TweenVars) => {
      gsap.to(selector, {
        ...config,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(selector, {
        opacity: 0.3,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    };

    floatBlob(".blob-1", { x: 50, y: -30, duration: 10, rotate: 20 });
    floatBlob(".blob-2", { x: -40, y: 40, duration: 12, rotate: -15 });
    floatBlob(".blob-3", { x: 30, y: -50, duration: 14, rotate: 10 });
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="blob-1 absolute top-[10%] left-[15%] w-[300px] h-[300px] bg-fuchsia-500 opacity-20 blur-3xl rounded-full mix-blend-screen" />
      <div className="blob-2 absolute top-[50%] left-[60%] w-[400px] h-[400px] bg-sky-400 opacity-20 blur-3xl rounded-full mix-blend-screen" />
      <div className="blob-3 absolute top-[30%] left-[70%] w-[250px] h-[250px] bg-purple-600 opacity-20 blur-2xl rounded-full mix-blend-screen" />
    </div>
  )
}