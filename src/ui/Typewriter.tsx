import { useEffect, useState } from "react";

export default function Typewriter({ text }: { text: string }) {
    
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const typingSpeed: number = 150;
  const resetDelay: number = 1500;

  useEffect(() => {
    let timeout;
    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, resetDelay);
    }
    return () => clearTimeout(timeout);
  }, [index, text]);

  return (
    <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-[length:300%_300%] animate-gradient-x bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400">
      {displayedText}
      <span className="animate-pulse">|</span>
    </h1>
  );
};