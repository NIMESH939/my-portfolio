import React from "react";
import GetInTouchButn from "../../Components/Buttons/GetInTouchButn";

function HeroSection() {
  return (
    <div className="HerosectionContainer">
      <section className="HeroSection" id="Hero--Section">
        <div className="HeroSectionContentBox">
          <div className="HeroSectionContent">
            <p className="SectionTitle">
              Hey, I'm Nimesh <br />
              Karunaratne
            </p>
            <h1 className="HeroSectionTitle">
              <span className="HeroSectionTitleColor">Full Stack</span> <br />
              Developer
            </h1>
            <p className="HeroSectionDescription">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate quia accusantium quisquam. <br />
              Aliquam perspiciatis, aliquid corrupet nesciunt quo in quas
              recusandae!
            </p>
          </div>
          <GetInTouchButn />
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
