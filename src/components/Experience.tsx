"use client"

import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image, { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTachographDigital } from "@fortawesome/free-solid-svg-icons";

type Project = {
  title: string;
  img: StaticImageData | string;
  text: string;
  github: string;
  live: string;
};

type Experience = {
  company: string;
  companyUrl?: string;
  role: string;
  type: string;
  period: string;
  location: string;
  description: string;
  techStack?: string;
  others?: string;
  projects?: Project[];
};

const experiences: Experience[] = [
  {
    company: "Possier",
    companyUrl: "https://possier.com",
    role: "Full Stack Software Developer",
    type: "Full-time",
    period: "Aug 2025 - Dec 2025",
    location: "Remote",
    description:
      "Worked in a 2-person engineering team building full-stack products for a restaurant management SaaS. Solely owned and shipped two production features — a no-code website builder used by 50–100 restaurant owners, and a complete invoicing system built end-to-end: API design, DB schema, Prisma ORM, Fastify backend, and Next.js frontend.",
    techStack:
      "JavaScript, TypeScript, NextJS, ReactJS, NodeJS, ExpressJS, Fastify, PostgreSQL, Prisma, TailwindCSS, HTML5, CSS3, Git, Github.",
    projects: [
      {
        title: "Website Builder",
        img: "/website-builder.jpg",
        text: "Built end-to-end — enabling 50–100 restaurant owners to launch custom websites with zero coding knowledge. Engineered the drag-and-drop layout engine, theme system, metadata management, and live preview.",
        github: "https://github.com/sheikhmanik/website-builder",
        live: "https://fuvii.com/website-builder/demo/",
      },
      {
        title: "Invoicing Software",
        img: "/invoice.png",
        text: "Sole engineer — owned the full stack from DB schema and REST API design to the Next.js frontend. Supports dynamic line items, invoice export, and real-time data handling. Actively used by Possier's client base.",
        github: "https://github.com/sheikhmanik/invoicing-software",
        live: "https://invoicing-lac.vercel.app",
      },
    ],
  },
  {
    company: "Koala Customer Care",
    role: "Front-End Web Developer",
    type: "Full-time",
    period: "May 2023 - Oct 2023",
    location: "Remote",
    description:
      "Started as a freelancer on Upwork and was brought on full-time after consistently delivering quality work. Built and maintained responsive UI components, and translated Photoshop mockups into pixel-perfect, production-ready interfaces.",
    techStack: "HTML5, CSS3, JavaScript.",
    others: "Photoshop Mocking & other designing tools for the UI.",
  },
];

export default function WorkExperience() {
  const sectionRef = useRef(null);
  const entriesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
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
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    entriesRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
          delay: i * 0.15,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="pt-10 scroll-mt-10 sm:scroll-mt-15" id="experience">
      {/* Section Header */}
      <div className="container mx-auto flex flex-col items-center justify-center gap-3 mb-10 text-center px-4">
        <p className="font-playfair font-extrabold text-3xl md:text-5xl leading-tight bg-[length:300%_300%] animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r to-red-500 via-slate-500 from-slate-400">
          Where I've Worked
        </p>
        <p className="font-lato font-medium text-base md:text-lg bg-[length:300%_300%] animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r to-red-500 via-slate-500 from-slate-400 max-w-xl">
          A timeline of roles where I've shipped real products, grown fast, and written code that matters.
        </p>
      </div>

      {/* Timeline */}
      <section className="p-4 pt-2">
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-slate-500 to-red-500" />

          <div className="flex flex-col gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => { entriesRef.current[index] = el; }}
                className="relative pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-[9px] top-[18px] w-5 h-5 rounded-full border-2 border-red-500 bg-gray-950 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />

                {/* Card */}
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-5 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300">

                  {/* Top row: company + date */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-lato font-bold text-slate-400 underline underline-offset-2 hover:text-slate-200 transition-colors"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      <span className="font-lato font-bold text-slate-400">{exp.company}</span>
                    )}
                    <div className="sm:text-right">
                      <p className="font-lato font-bold text-sm text-transparent bg-clip-text bg-[length:300%_300%] animate-gradient-x bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400">
                        {exp.period}
                      </p>
                      <p className="font-lato text-xs text-slate-500">({exp.location})</p>
                    </div>
                  </div>

                  {/* Role */}
                  <p className="font-lato font-bold text-lg text-transparent bg-clip-text bg-[length:300%_300%] animate-gradient-x bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 mb-3">
                    {exp.role}{" "}
                    <span className="text-slate-500 font-normal text-sm">({exp.type})</span>
                  </p>

                  {/* Description */}
                  <p className="font-lato text-gray-300 text-base leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-3" />

                  {/* Tech stack */}
                  {exp.techStack && (
                    <p className="font-lato text-sm text-slate-400 leading-relaxed">
                      <span className="font-bold text-slate-200 underline underline-offset-2">Tech Stack:</span>{" "}
                      <span className="underline underline-offset-2">{exp.techStack}</span>
                    </p>
                  )}
                  {exp.others && (
                    <p className="font-lato text-sm text-slate-400 leading-relaxed mt-1">
                      <span className="font-bold text-slate-200 underline underline-offset-2">Others:</span>{" "}
                      <span className="underline underline-offset-2">{exp.others}</span>
                    </p>
                  )}

                  {/* ── Nested Projects ── */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="mt-5">
                      <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-4" />
                      <p className="font-lato font-bold text-xs text-slate-500 uppercase tracking-widest mb-3">
                        Projects built here
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {exp.projects.map((proj, pi) => (
                          <div
                            key={pi}
                            className="bg-gray-900/70 rounded-xl p-3 border border-gray-700/50 hover:border-gray-500/60 hover:scale-[1.02] transition-all duration-300"
                          >
                            <Image
                              src={proj.img}
                              alt={proj.title}
                              width={500}
                              height={300}
                              className="rounded-lg h-32 w-full object-cover mb-3"
                            />
                            <h3 className="font-playfair font-bold text-lg text-center text-transparent bg-clip-text bg-[length:300%_300%] animate-gradient-x bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400">
                              {proj.title}
                            </h3>
                            <p className="font-lato text-gray-400 text-sm leading-relaxed text-center mt-1 px-1">
                              {proj.text}
                            </p>
                            <div className="flex justify-center gap-3 mt-3">
                              <a
                                href={proj.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 font-lato text-sm text-white border border-gray-600 px-3 py-1.5 rounded-lg hover:bg-gray-700 transition"
                              >
                                <FontAwesomeIcon icon={faGithub} /> GitHub
                              </a>
                              <a
                                href={proj.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 font-lato text-sm text-white border border-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-800 transition"
                              >
                                <FontAwesomeIcon icon={faTachographDigital} /> Live
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
