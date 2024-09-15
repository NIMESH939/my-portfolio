import React from "react";

function AboutMe() {
  return (
    <div className="AboutMePageContainer">
      <section id="AboutMe" className="AboutSection">
        <div className="AboutSectionImg">
          <img src="./img/gongala.jpg" alt="About Me" />
        </div>
        <div className="HeroSectionContentBox AboutSectionBox">
          <div className="HeroSectionContent">
            <p className="SubTitle">About</p>
            <h1 className="SkillsSectionHeading">About Me</h1>
            <p className="HeroSectionDescription">
              I’m Nimesh Karunaratne, an IT student at the University of
              Moratuwa, working toward my B.Sc. (Hons) degree in Information
              Technology, which I plan to complete by 2026. My time at the
              university has deepened my interest in technology and how it can
              be used to solve real-world problems. I’m eager to learn and grow,
              constantly working on improving my skills to prepare for the
              challenges of the tech industry.
            </p>
            <p className="HeroSectionDescription">
              Before university, I studied at St. Aloysius National College,
              Ratnapura, where I did well in my G.C.E. Advanced Level exams,
              scoring an A in Mathematics, ICT, and Business Statistics.
              Earlier, at R/Nil Minipura Vidyalaya, I earned 9 A passes in my
              G.C.E. Ordinary Level exams. Alongside my studies, I enjoy being a
              part of clubs like the Rotaract Club, Hiking Club, and Dancing
              Society, where I’ve developed teamwork and leadership skills. I’m
              always looking for ways to grow, both academically and personally,
              while contributing to the community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
