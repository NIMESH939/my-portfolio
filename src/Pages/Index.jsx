import React from "react";
import HeroSection from "./HomePage/HeroSection";
import Skills from "./HomePage/Skills";
import AboutMe from "./HomePage/AboutMe";
import Projects from "./HomePage/Projects";

function Index() {
  return (
    <div>
      <HeroSection />
      <Skills/>
      <AboutMe/>
      <Projects/>
    </div>
  );
}

export default Index;
