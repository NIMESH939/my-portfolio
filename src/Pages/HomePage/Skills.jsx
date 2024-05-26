import React from "react";
import data from "../../DataFile/index.json";

function Skills() {
  return (
    <div className="SkillsPageContainer">
      <section className="SkillsSection" id="Skills">
        <div className="PortfolioContainer">
          <p className="SubTitle">Skills</p>
          <h2 className="SkillsSectionHeading">My Skills</h2>
        </div>
        <div className="SkillsSectionContainer">
          {data?.skills?.map((item, index) => (
            <div key={index} className="SkillsSectionCard">
              <div className="SkillsSectionImg">
                <img src={item.src} alt="ProductChain" />
              </div>
              <div className="SkillsSectionCardContent">
                <h3 className="SkillsSectionTitle">{item.title}</h3>
                <p className="SkillsSectionDescription">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
