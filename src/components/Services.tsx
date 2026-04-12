"use client"

import services from "@/assets/services.png";
import frontend from "@/assets/frontend.png";
import backend from "@/assets/backend.jpg";
import fastSecure from "@/assets/fast-secure.png";
import crossPlatform from "@/assets/cross-platform.jpg";
import Image, { StaticImageData } from "next/image";

export default function Services() {

  const items: {title: string, img: StaticImageData, text: string}[] = [
    {
      title: "Front-End",
      img: frontend,
      text: "First impressions matter. I craft modern, responsive UIs that deliver a strong first impression using React and Tailwind CSS.",
    },
    {
      title: "Back-End",
      img: backend,
      text: "Behind every great app is a solid backend. I build reliable, secure systems that ensure performance, scalability, and seamless integration.",
    },
    {
      title: "Fast & Secure",
      img: fastSecure,
      text: "Performance and security are top priorities. I ensure that your apps are optimized, fast, and secure from the ground up.",
    },
    {
      title: "Cross-Platform",
      img: crossPlatform,
      text: "From desktops to mobile screens, your application will adapt smoothly to every platform using flexible, responsive layouts.",
    },
  ];

  return (
    <div className="sm:pt-10 scroll-mt-13 sm:scroll-mt-12" id="services">
      <div className="container mx-auto flex flex-col sm:flex-row items-center gap-5 py-5 h-auto">
        <Image alt="" src={services} className="sm:w-1/2 h-full sm:animate-floatX rounded-xl" />
        <div className="sm:w-1/2 gap-3 lg:gap-5 text-center sm:text-start flex flex-col sm:items-start justify-center">
          <p className="font-playfair font-extrabold text-3xl md:text-5xl leading-tight origin-left transition-all duration-1000 bg-[length:300%_300%] animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r to-red-500 via-slate-500 from-slate-400">My Awesome Services</p>
          <p className="font-lato font-medium text-base md:text-lg origin-left transition-all duration-1000 bg-[length:300%_300%] animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r to-red-500 via-slate-500 from-slate-400 px-5 sm:px-0">I always strive to deliver the best user experience by crafting clean, responsive, and accessible interfaces that make users feel confident, comfortable, and delighted while navigating the product.</p>
        </div>
      </div>
      <section className="sm:py-5 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <Image
                src={item.img}
                alt={item.title}
                className="rounded-xl h-40 w-full object-cover mb-4"
              />
              <h2 className="font-playfair font-bold text-2xl transition-all duration-1000 flex items-center justify-center text-transparent bg-clip-text bg-[length:300%_300%] animate-gradient-x bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400">{item.title}</h2>
              <p className="font-lato text-gray-300 text-base leading-relaxed text-center p-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}