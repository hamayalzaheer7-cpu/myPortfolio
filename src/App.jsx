import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExperienceEducation from "./components/ExperienceEducation";
import Footer from "./components/Footer";
import CvModal from "./components/CvModal";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (scrollPos >= top && scrollPos < top + height && id) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-cream text-charcoal min-vh-100">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero onOpenCv={() => setCvOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
      </main>
      <Footer />
      <CvModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />
    </div>
  );
}