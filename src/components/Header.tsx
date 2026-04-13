"use client"

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [dropDown, setDropDown] = useState(false);
  const [scrolled, setScrolled] = useState(false); // 👈 Track scroll state
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  function handleLogoClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeNav(section: string) {
    setDropDown(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropDown(false);
      }
    }

    function handleScroll() {
      setScrolled(window.scrollY > 10); // 👈 Set true if scrolled
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll); // 👈 Listen for scroll

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-gray-800/40 backdrop-blur-md text-white fixed w-full z-50 border-b border-white/10 shadow-md transition-all duration-300">
      <div
        className={`container mx-auto flex items-center justify-between px-6 ${
          scrolled ? "h-[60px] md:h-[70px] py-2" : "h-[70px] md:h-[94px] py-3 md:py-5"
        } transition-all duration-300`}
      >
        <p
          onClick={handleLogoClick}
          className="font-fairplay font-bold text-4xl hover:scale-125 origin-left transition-all duration-1000 flex items-center justify-center text-transparent bg-clip-text bg-[length:300%_300%] animate-gradient-x bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 cursor-pointer"
        >
          MANIK
        </p>

        <div className="hidden md:flex items-center justify-center gap-7 font-lato font-bold text-[1.2rem]">
          <button onClick={() => closeNav("services")} className="hover:scale-105 px-1 hover:border-b-2 transition-all duration-300 cursor-pointer">Services</button>
          <button onClick={() => closeNav("toolbox")} className="hover:scale-105 px-1 hover:border-b-2 transition-all duration-300 cursor-pointer">Toolbox</button>
          <button onClick={() => closeNav("project")} className="hover:scale-105 px-1 hover:border-b-2 transition-all duration-300 cursor-pointer">Project</button>
          <button onClick={() => closeNav("contact")} className="hover:scale-105 px-1 hover:border-b-2 transition-all duration-300 cursor-pointer">Contact</button>
        </div>

        <div className="flex md:hidden flex-col items-end relative" ref={dropdownRef}>
          <button className="hover:text-gray-300 transition-all flex items-center justify-center text-2xl cursor-pointer" onClick={() => setDropDown(!dropDown)}>
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className={`${dropDown ? 'scale-100' : 'scale-0'} absolute flex flex-col transition-all origin-top-right duration-500 bg-gray-700/80 text-white top-7 font-lato font-bold text-[1rem] w-[110px] h-auto rounded-lg rounded-tr-none`}>
            <button onClick={() => closeNav("services")} className="uppercase p-4 transition-all duration-300 hover:bg-gray-300/20 rounded-lg cursor-pointer">Services</button>
            <button onClick={() => closeNav("toolbox")} className="uppercase p-4 transition-all duration-300 hover:bg-gray-300/20 rounded-lg cursor-pointer">Toolbox</button>
            <button onClick={() => closeNav("project")} className="uppercase p-4 transition-all duration-300 hover:bg-gray-300/20 rounded-lg cursor-pointer">Project</button>
            <button onClick={() => closeNav("contact")} className="uppercase p-4 transition-all duration-300 hover:bg-gray-300/20 rounded-lg cursor-pointer">Contact</button>
          </div>
        </div>
      </div>
    </header>
  )
}