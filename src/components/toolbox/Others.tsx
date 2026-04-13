import Image, { StaticImageData } from "next/image";

import vscode from "@/assets/vscode.jpg";
import git from "@/assets/git.png";
import github from "@/assets/github.webp";
import npm from "@/assets/npm.png";
import vite from "@/assets/vite.png";
import docker from "@/assets/docker.webp";

export default function Others() {
    
  const tools: { img: StaticImageData; label: string }[] = [
    { img: git, label: "Git" },
    { img: github, label: "GitHub" },
    { img: docker, label: "Docker" },
    { img: vscode, label: "VS Code" },
    { img: npm, label: "npm" },
    { img: vite, label: "Vite" },
  ];

  return (
    <div className="mt-7 sm:mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center transition-transform hover:scale-110 duration-500"
        >
          <Image
            src={tool.img}
            alt={tool.label}
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain bg-cover border-2 border-indigo-500 rounded-xl p-2 shadow-sm"
          />
          <span className="text-sm text-gray-300 mt-2 font-lato tracking-wide">
            {tool.label}
          </span>
        </div>
      ))}
    </div>
  )
}