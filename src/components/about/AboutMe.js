import React from 'react';
import '../styles.css';
import profileImage from '../assets/profileImage.png'; // Import your profile image

const AboutMe = ({ navigateToContact }) => {
  const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML']; // Add your skills here

  return (
    <section id="about-me-container">
      <img id="about-me-image" src={profileImage} alt="Profile" />
      <div id="about-me-bio">
        <p>
          Hi, I'm [Your Name], a passionate full-stack developer experienced in building engaging and
          efficient web applications. I love turning ideas into reality using the latest technologies
          and tools. My journey in the tech world started back in [year], and since then, I've been
          learning and growing every day.
        </p>
      </div>
      <div id="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            {skill}
          </div>
        ))}
      </div>
      <button className="contact-button" onClick={navigateToContact}>
        Contact Me
      </button>
    </section>
  );
};

export default AboutMe;
