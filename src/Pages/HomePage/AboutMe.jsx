import React from "react";

function AboutMe() {
  return (
    <div className="AboutMePageContainer">
      <section id="AboutMe" className="AboutSection">
        <div className="AboutSectionImg">
          <img src="./img/about-me.png" alt="About Me" />
        </div>
        <div className="HeroSectionContentBox AboutSectionBox">
          <div className="HeroSectionContent">
            <p className="SectionTitle">About</p>
            <h1 className="SkillsSectionHeading">About Me</h1>
            <p className="HeroSectionDescription">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              fuga rem impedit alias debitis, eaque adipisci, exercitationem,
              facere quo reiciendis magni harum labore minus illum error
              inventore voluptatem accusantium et!
            </p>
            <p className="HeroSectionDescription">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              fuga rem impedit alias debitis, eaque adipisci, exercitationem,
              facere quo reiciendis magn.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
