"use client"

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import toolboxImg from "@/assets/toolbox.jpg";
import Frontend from "./toolbox/Frontend";
import Backend from "./toolbox/Backend";
import Others from "./toolbox/Others";

export default function Toolbox() {

  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const [tool, setTool] = useState<string>("frontend");
  const tabs = ['frontend', 'backend', 'others'];

  useEffect(() => {
    if (!contentRef.current) return;
    
    gsap.fromTo(
      contentRef.current,
      {
        opacity: 0,
        scaleY: 0.9,
        transformOrigin: 'center center',
        filter: 'brightness(0.7)',
      },
      {
        opacity: 1,
        scaleY: 1,
        duration: 1,
        ease: 'power2.out',
        filter: 'brightness(1)',
      }
    );
  }, [tool]);

  useEffect(() => {
    // Register plugin (very important)
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%", // when top of element hits 80% of viewport
          toggleActions: "play none none none", // control animation behavior
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="pt-7 scroll-mt-11 sm:scroll-mt-20" id="toolbox">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-5">
        <Image alt="" src={toolboxImg} className="sm:w-1/2 rounded-xl" />
        <div className="sm:w-1/2 gap-3 lg:gap-5 text-center sm:text-start flex flex-col sm:items-start justify-center">
          <p className="font-playfair font-extrabold text-3xl md:text-5xl leading-tight origin-left transition-all duration-1000 bg-[length:300%_300%] animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r to-red-500 via-slate-500 from-slate-400">What’s in my toolbox?</p>
          <p className="font-lato font-medium text-base md:text-lg origin-left transition-all duration-1000 bg-[length:300%_300%] animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r to-red-500 via-slate-500 from-slate-400 px-5 sm:px-0">Here are some of the incredible technologies I genuinely enjoy working with—tools and frameworks that not only empower my creativity but also help me build efficient, beautiful, and scalable user interfaces.</p>
        </div>
      </div>
      <div className="mt-10 bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-xl p-4 sm:p-6 max-w-md mx-auto shadow-lg">
        <div className="flex justify-center items-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setTool(tab)}
              className={`${tool === tab ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-transparent shadow-md' : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 hover:text-white'} px-5 py-2 rounded-full text-sm md:text-base font-semibold capitalize transition-all duration-300 border cursor-pointer`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div ref={contentRef}>
        { tool === 'frontend' && <Frontend />}
        { tool === 'backend' && <Backend />}
        { tool === 'others' && <Others />}
      </div>
    </div>
  )
}