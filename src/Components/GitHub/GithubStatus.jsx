import React from "react";

const GithubStatus = () => {
  return (
    <div className="streak-stats-container">
      <h3>My GitHub Streak Stats</h3>
      <a
        href="https://github.com/NIMESH939"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://streak-stats.demolab.com/?user=NIMESH939&theme=dark"
          alt="GitHub Streak Stats"
          className="streak-stats-img"
        />
      </a>
    </div>
  );
};

export default GithubStatus;
