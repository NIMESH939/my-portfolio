import React from "react";
import data from "../../DataFile/index.json";

function Skills() {
  return (
    <div className="SkillsPageContainer">
      <section className="SkillsSection" id="Skills">
        <div className="PortfolioContainer">
          <h2 className="SkillsSectionHeading">My Skills</h2>
          <p className="SubTitle">Skills</p>
        </div>
        <div className="SkillsSectionContainer">
          {data?.skills?.map((item, index) => (
            <div key={index} className="SkillsSectionCard">
              <div className="SkillsSectionImg">
                <img src={item.src} alt="ProductChain" />
              </div>
              <div className="SkillsSectionCardContent">
                <h3 className="SkillsSectionTitle">{item.title}</h3>
                <div className="item-content">
                  <p className="SkillsSectionDescription">{item.item1}</p>
                  <img className="item-img" src={item.img1} alt="" />
                </div>
                <div className="item-content">
                  <p className="SkillsSectionDescription">{item.item2}</p>
                  <img className="item-img" src={item.img2} alt="" />
                </div>
                <div className="item-content">
                  <p className="SkillsSectionDescription">{item.item3}</p>
                  <img className="item-img" src={item.img3} alt="" />
                </div>
                <div className="item-content">
                  <p className="SkillsSectionDescription">{item.item4}</p>
                  <img className="item-img" src={item.img4} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
