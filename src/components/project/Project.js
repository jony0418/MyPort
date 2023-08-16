// src/components/project/Project.js
import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => (
  <div>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <a href={deployedLink}>Deployed Application</a>
    <a href={repoLink}>GitHub Repository</a>
  </div>
);

export default Project;
