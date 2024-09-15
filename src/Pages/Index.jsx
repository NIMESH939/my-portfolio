import React from "react";
import HeroSection from "./HomePage/HeroSection";
import Skills from "./HomePage/Skills";
import AboutMe from "./HomePage/AboutMe";
import Projects from "./HomePage/Projects";
import ContactMe from "./HomePage/ContactMe";
import Footer from "../Components/FooterSection/Footer";
import GithubStatus from "../Components/GitHub/GithubStatus";

function Index() {
  return (
    <div>
      <HeroSection />
      <Projects />
      <Skills />
      <GithubStatus />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default Index;
