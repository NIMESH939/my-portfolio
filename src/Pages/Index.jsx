import React from "react";
import HeroSection from "./HomePage/HeroSection";
import Skills from "./HomePage/Skills";
import AboutMe from "./HomePage/AboutMe";
import Projects from "./HomePage/Projects";
import ContactMe from "./HomePage/ContactMe";

function Index() {
  return (
    <div>
      <HeroSection />
      <Skills/>
      <AboutMe/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}

export default Index;
