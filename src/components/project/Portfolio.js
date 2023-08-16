import React from 'react';
import Project from './Project'; // Importing the single Project component
import '../../styles.css'; // Adjust the path to your CSS file as needed

const Portfolio = () => {
  // Define your projects here
  const projects = [
    {
      title: 'E-commerce App',
      image: 'ecommerce.png',
      deployedLink: 'https://ecommerceapp.com',
      githubLink: 'https://github.com/yourusername/ecommerce-app',
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
