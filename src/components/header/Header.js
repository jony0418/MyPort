import React from 'react';
import '../styles.css';
import profileImage from '../assets/profileImage.png'; // Import your profile image

const Header = ({ setSelectedSection, toggleTheme }) => {
  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <header>
      <div id="name-container" onClick={() => handleSectionClick('AboutMe')}>
        <img src={profileImage} alt="Profile" />
        <h1>Your Name</h1>
      </div>
      <nav id="navigation">
        <ul>
          <li onClick={() => handleSectionClick('Portfolio')}>Portfolio</li>
          <li onClick={() => handleSectionClick('Contact')}>Contact</li>
          <li onClick={() => handleSectionClick('Resume')}>Resume</li>
          <li onClick={toggleTheme}>🌓</li> {/* Theme toggle icon */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
