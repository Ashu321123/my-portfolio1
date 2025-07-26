import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Ashutosh Bajpai</h3>
            <p>Full Stack Developer</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/Ashu321123" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ashutoshbajpai197/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ashutosh Bajpai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
