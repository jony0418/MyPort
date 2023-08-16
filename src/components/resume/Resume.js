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
        href="../assets/cvjonathanbecerra.pdf"
        download="cvjonathanbecerra.pdf"
        className="resume-download-link"
      >
        Download My Resume
      </a>
      <h3 className="proficiencies-title">My Proficiencies:</h3>
      <div className="proficiencies-list">
        {proficiencies.map((proficiency, index) => (
          <div key={index} className="proficiency">
            {proficiency}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resume;
