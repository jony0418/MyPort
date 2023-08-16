import React from 'react';
import '../../styles.css';

const Resume = () => {
  const proficiencies = [
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'HTML',
    'CSS',
    'Git',
    'GitHub',
    'Heroku',
    'Netlify',
    'VS Code',
  ];

  return (
    <section className="resume">
      <h2 className="resume-title">Resume</h2>
      <a
        href="./assets/cvjonathanbecerra.pdf"
        download="CVJonatha Becerra.pdf"
        className="resume-download-link"
      >
        Download My Resume
      </a>
      <h3 className="proficiencies-title">My Proficiencies:</h3>
      <ul className="proficiencies-list">
        {proficiencies.map((proficiency, index) => (
          <li key={index} className="proficiency">
            {proficiency}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;
