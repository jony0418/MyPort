import React from 'react';
import avatar from '../../assets/avatar.sgv'; // Adjust the path to your avatar image
import './AboutMe.css'; // Import the CSS file

const AboutMe = () => (
  <section id="about-me">
    <h2>About Me</h2>
    <img src={avatar} alt="Your Avatar" />
    <p>
      Hi, I'm [Your Name], a passionate web developer specialized in React and full-stack development. With a background in [Your Field], I love creating efficient and user-friendly web applications. I am constantly exploring new technologies and tools to enhance my skills. Feel free to explore my portfolio to learn more about my work.
    </p>
  </section>
);

export default AboutMe;
