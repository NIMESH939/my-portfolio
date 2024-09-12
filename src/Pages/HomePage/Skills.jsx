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
          {/* {data?.skills?.map((item, index) => (
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
          ))} */}
          <div className="skill-box">
            <img src="./img/JavaScript-logo.png" alt="" />
            <p className="skill-name">Java Script</p>
          </div>
          <div className="skill-box">
            <img src="./img/react.png" alt="" />
            <p className="skill-name">React Js</p>
          </div>
          <div className="skill-box">
            <img src="./img/node-js.png" alt="" />
            <p className="skill-name">Node Js</p>
          </div>
          <div className="skill-box">
            <img src="./img/express.png" alt="" />
            <p className="skill-name">Express Js</p>
          </div>
          <div className="skill-box">
            <img src="./img/html.png" alt="" />
            <p className="skill-name">HTML</p>
          </div>
          <div className="skill-box">
            <img src="./img/nextjs-icon.png" alt="" />
            <p className="skill-name">Next Js</p>
          </div>
          <div className="skill-box">
            <img src="./img/css.png" alt="" />
            <p className="skill-name">CSS</p>
          </div>
          <div className="skill-box">
            <img src="./img/mui-logo.png" alt="" />
            <p className="skill-name">MUI</p>
          </div>
          <div className="skill-box">
            <img src="./img/tailwind-css.png" alt="" />
            <p className="skill-name">Tailwind CSS</p>
          </div>
          <div className="skill-box">
            <img src="./img/java.png" alt="" />
            <p className="skill-name">Java</p>
          </div>
          <div className="skill-box">
            <img src="./img/c-logo.png" alt="" />
            <p className="skill-name">C</p>
          </div>

          <div className="skill-box">
            <img src="./img/MYSQL.jpg" alt="" />
            <p className="skill-name">My SQL</p>
          </div>
          <div className="skill-box">
            <img src="./img/MsSQL.jpg" alt="" />
            <p className="skill-name">MS SQL</p>
          </div>
          <div className="skill-box">
            <img src="./img/mongodb.png" alt="" />
            <p className="skill-name">MongoDB</p>
          </div>
          <div className="skill-box">
            <img src="./img/figma.png" alt="" />
            <p className="skill-name">Figma</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
