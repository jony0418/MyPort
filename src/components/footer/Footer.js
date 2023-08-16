import React from 'react';
import '../../styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://stackoverflow.com/users/youruserid" target="_blank" rel="noreferrer">
          <i className="fab fa-stack-overflow"></i>
        </a>

      </div>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Jonathan Becerra. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
