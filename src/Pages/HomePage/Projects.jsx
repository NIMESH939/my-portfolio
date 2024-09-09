import React from "react";
import data from "../../DataFile/index.json";
import GitHubButn from "../../Components/Buttons/GitHubButn";

function Projects() {
  return (
    <div className="ProjectsPageContainer">
      <section className="ProjectsSection" id="MyProjects">
        <div className="ProjectsContainerBox">
          <div className="ProjectsContainer">
            <h2 className="SectionHeading">Projects</h2>
            <p className="SubTitle">Recent Projects</p>
          </div>
          <div>
            {" "}
            <GitHubButn />
          </div>
        </div>
        <div className="ProjectsSectionContainer">
          {data?.projects?.map((item, index) => (
            <div key={index} className="ProjectsSectionCard">
              <div className="ProjectsSectionImg">
                <img src={item.src} alt="Placeholder" />
              </div>
              <div className="ProjectsSectionCardContent">
                <div className="ProjectContent">
                  <h3 className="ProjectsSectionTitle">{item.title}</h3>
                  <p className="text-md">{item.description1}</p>
                  <p className="text-md">
                    <b>{item.description2}</b>
                  </p>
                </div>
                <p className="text-sm ProjectsLink">
                  {item.link}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <path
                      d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                      stroke="currentColor"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
