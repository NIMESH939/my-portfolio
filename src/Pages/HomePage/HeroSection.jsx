import React from "react";
import GetInTouchButn from "../../Components/Buttons/GetInTouchButn";

function HeroSection() {
  return (
    <div className="HerosectionContainer">
      <section className="HeroSection" id="Hero--Section">
        <div className="HeroSectionContentBox">
          <div className="HeroSectionContent">
            <p className="SectionTitle">I'm Nimesh Karunaratne</p>
            <h1 className="HeroSectionTitle">
              <span className="HeroSectionTitleColor">Full Stack</span> <br />
              Developer
            </h1>
            <p className="HeroSectionDescription">
              I'm a Third-year IT undergraduate with a passion for creating
              innovative solutions that drive progress and inspire positive
              change through technology.
            </p>
          </div>

          <div className="GetInToutchButton">
            <GetInTouchButn />
          </div>
        </div>
        <div className="HeroSectionImg">
          <img src="./img/hero_img.png" alt="NimeshImage" />
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
