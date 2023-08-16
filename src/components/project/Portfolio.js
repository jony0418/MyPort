import React from 'react';
import Project from './Project';
import '../../styles.css';

const Portfolio = () => {
  // Define your projects here
  const projects = [
    {
      title: 'Human Resources Management System',
      image: '../../assets/opticrew.jpg',
      deployedLink: 'https://opticrew-fe0f9781ad3c.herokuapp.com/',
      githubLink: 'https://github.com/jony0418/OptiCrew',
    },
    // Add more projects
  ];

  return (
    <section className="portfolio">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
