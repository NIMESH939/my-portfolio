import React, { useState, useEffect } from "react";

const GithubStatus = () => {
  const [timestamp, setTimestamp] = useState(Date.now());

  // Function to refresh the image
  const refreshImage = () => {
    setTimestamp(Date.now()); // Update the timestamp to trigger a new image URL
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      refreshImage();
    }, 60000); // Refresh every 60 seconds (60000 ms)

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []);

  return (
    <div className="streak-stats-container">
      <h3>My GitHub Streak Stats</h3>
      <a
        href="https://github.com/NIMESH939"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`https://streak-stats.demolab.com/?user=NIMESH939&theme=dark&t=${timestamp}`}
          alt="GitHub Streak Stats"
          className="streak-stats-img"
        />
      </a>
    </div>
  );
};

export default GithubStatus;
