import Contact from "@/components/Contact";
import Founder from "@/components/Founder";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Toolbox from "@/components/Toolbox";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="container mx-auto pt-[88px] md:pt-28 px-3 md:px-5 space-y-10">
        <Hero/>
        <Founder/>
        <Services/>
        <Toolbox/>
        <Project/>
        <Contact/>
      </div>
    </div>
  )
}