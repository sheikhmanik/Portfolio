import type { Metadata } from "next";
import { Urbanist } from 'next/font/google';
import "./globals.css";
import AnimatedBackground from "@/ui/AnimatedBackground";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manik | Software Developer",
  keywords: [
    "Manik",
    "Portfolio",
    "Full Stack Developer",
    "Web Developer",
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Prisma",
    "Docker",
    "Web Design",
    "UI/UX",
    "JavaScript",
    "HTML",
    "CSS",
    "API Development",
    "Software Projects",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Manik" }],
  creator: "Manik",
  openGraph: {
    title: "Manik | Software Developer",
    description:
      "Explore Manik’s professional portfolio — a collection of modern, high-performance web applications built with Next.js, React, TypeScript, and Tailwind CSS. As a full-stack developer passionate about clean design and efficient systems, Manik creates seamless user experiences with powerful backends using Node.js, Express, and PostgreSQL. Discover projects, learn about his journey, and see how technology and creativity blend in his work.",
  },
  description:
    "Manik is a full-stack software developer specializing in Next.js, React, and TypeScript. His portfolio showcases dynamic, responsive, and production-ready web applications, demonstrating expertise in modern frontend and backend technologies. From UI/UX to scalable API design, explore his work and technical skills in creating seamless digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={urbanist.className}>
      <body>
        <AnimatedBackground/>
        {children}
      </body>
    </html>
  )
}