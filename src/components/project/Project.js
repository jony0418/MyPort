import React from 'react';
import '../../styles.css';
const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <img src={`./assets/${image}`} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <a href={deployedLink} target="_blank" rel="noreferrer" className="project-link">
        Deployed Application
      </a>
      <a href={githubLink} target="_blank" rel="noreferrer" className="project-link">
        GitHub Repository
      </a>
    </div>
  );
};

export default Project;
