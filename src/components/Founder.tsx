"use client";

import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function Founder() {
  const sectionRef = useRef(null);

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
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt- py-10 bg-gradient-to-b from-black via-slate-900 to-black bg-[50%] text-white"
    >
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            Founder
          </h2>
          <span className="w-1 h-1 rounded-full bg-gray-500"></span>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            <Link
              href="https://renewhq.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              RenewHQ
            </Link>
          </p>
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl hover:scale-105 transition-transform duration-500">

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Image */}
            <div className="w-36 h-36 relative">
              <Image
                src="/renewhq.png"
                alt="Founder"
                fill
                className="rounded-full object-cover border-2 border-purple-500"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">

              <h3 className="text-xl md:text-2xl font-semibold">
                Md. Manik Ullah
              </h3>

              <p className="text-sm text-gray-400 mb-4">
                Founder of{" "}
                <Link
                  href="https://renewhq.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  RenewHQ
                </Link>
              </p>

              <p className="text-gray-300 text-sm leading-relaxed">
                I built RenewHQ after noticing a real-world problem. Gyms,
                academies, and subscription-based businesses struggle to track
                memberships and renewals efficiently. Most still rely on manual
                notebooks or scattered systems.
                <br /><br />
                RenewHQ simplifies everything. From tracking members to
                automating renewals - helping businesses stay organized,
                reduce churn, and grow with confidence.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}