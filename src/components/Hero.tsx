"use client"

import Typewriter from "@/ui/Typewriter";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-5 md:mt-10 gap-5">
        <div className="h-28 w-28 md:h-40 md:w-40 relative">
          <Image
            src="/dp.png"
            alt="Manik’s Profile"
            draggable="false"
            fill
            className="rounded-full object-cover border-4 border-gray-700 shadow-[0_0_12px_rgba(255,255,255,0.1)] ring-2 ring-indigo-500 ring-offset-2 ring-offset-gray-900 transition-transform duration-500 hover:scale-105 animate-floatX sm:animate-floatY"
          />
        </div>
        <section className="flex flex-col items-center justify-center px-4 text-white md:text-center gap-3">
          <Typewriter text="Hy! I’m Manik.." />
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl font-playfair text-start">
            I’m a <span className="text-indigo-400 font-semibold">Software Developer</span> passionate about crafting accessible, high-performance, and visually engaging web applications, from intuitive user interfaces to robust backend systems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mt-6">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="font-lato font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-4xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 text-white shadow-md hover:brightness-110 transition-all duration-300 text-sm sm:text-base cursor-pointer"
            >
              Connect with me
            </button>
            <a
              href="/manik-resume.pdf"
              download
              className="font-lato font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-4xl border-2 border-white text-white hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-sm sm:text-base"
            >
              My Resume
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}