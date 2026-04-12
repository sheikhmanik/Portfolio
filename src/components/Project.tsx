"use client"

import project from "@/assets/project.png";
import invoice from "@/assets/invoice.png";
import grc from "@/assets/grc.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTachographDigital } from "@fortawesome/free-solid-svg-icons";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function Project() {

  const sectionRef = useRef(null);

  const items: {
    title: string;
    img: StaticImageData | string;
    text: string;
    github: string;
    live: string;
  }[] = [
    {
      title: "Website Builder",
      img: "/website-builder.jpg",
      text: "This is my biggest project. A fully responsive full-stack website builder built with Next.js and TypeScript. It allows anyone to create their own restaurant business website without any coding knowledge. Simply drag and drop elements, customize layouts, add your own metadata, designs, buttons, text, themes, navbar, footer, and much more.",
      github: "https://github.com/sheikhmanik/website-builder",
      live: "https://fuvii.com/website-builder/demo/",
    },
    {
      title: "RenewHQ",
      img: "/renewhq.png",
      text: "This product helps gyms, coaches, and subscription businesses track members, manage expiries, and recover lost revenue - all in one simple dashboard.",
      github: "https://github.com/sheikhmanik/RenewHQ",
      live: "https://renewhq.vercel.app",
    },
    {
      title: "Invoicing Software",
      img: invoice,
      text: "A clean, robust invoice creation application built with Tailwind, NextJS, ExpressJS, Fastify, NodeJS, Prisma, PostgresSQL, Supabase, TypeScript. It allows users to create, manage, and export professional invoices with dynamic data handling and a user-friendly interface.",
      github: "https://github.com/sheikhmanik/invoicing-software",
      live: "https://invoicing-lac.vercel.app",
    },
    {
      title: "GRC Compliance Platform",
      img: grc,
      text: "An enterprise-style GRC platform for managing assets, risks, compliance frameworks, and role-based permissions with audit logging.",
      github: "https://github.com/sheikhmanik/VizGRC",
      live: "https://vizgrc.vercel.app",
    },
  ];

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
          start: "top 80%", // when top of element hits 80% of viewport
          toggleActions: "play none none none", // control animation behavior
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="pt-10 scroll-mt-10 sm:scroll-mt-15" id="project">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-5">
        <Image alt="" src={project} className="sm:w-1/2 rounded-xl" />
        <div className="sm:w-1/2 gap-3 lg:gap-5 text-center sm:text-start flex flex-col sm:items-start justify-center">
          <p className="font-playfair font-extrabold text-3xl md:text-5xl leading-tight origin-left transition-all duration-1000 bg-[length:300%_300%] animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r to-red-500 via-slate-500 from-slate-400">Some Things I’ve Built</p>
          <p className="font-lato font-medium text-base md:text-lg origin-left transition-all duration-1000 bg-[length:300%_300%] animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r to-red-500 via-slate-500 from-slate-400 px-5 sm:px-0">A collection of real-world projects that reflect my expertise in React.js, Next.js, TypeScript, and Tailwind CSS—each thoughtfully built to demonstrate practical skills, clean code, and user-focused design.</p>
        </div>
      </div>

      <section className="p-4 pt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={500}
                className="rounded-xl h-40 w-full object-cover mb-4"
              />
              <h2 className="font-playfair font-bold text-2xl text-center text-transparent bg-clip-text bg-[length:300%_300%] animate-gradient-x bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400">
                {item.title}
              </h2>
              <p className="font-lato text-gray-300 text-base leading-relaxed text-center p-2">
                {item.text}
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-lato text-white border border-gray-600 px-4 py-2 rounded-xl hover:bg-gray-700 transition"
                >
                  <FontAwesomeIcon icon={faGithub}/> GitHub
                </a>
                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-lato text-white border border-blue-600 px-4 py-2 rounded-xl hover:bg-blue-800 transition"
                >
                  <FontAwesomeIcon icon={faTachographDigital}/> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}