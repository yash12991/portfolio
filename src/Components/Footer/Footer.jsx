import React from 'react';
import './Footer.css';

// Importing the images for the social media icons
import insta from 'D:/Project/savitahospital/savita/src/Components/Assets/insta-logo.png';
import linkedin from 'D:/Project/savitahospital/savita/src/Components/Assets/linkedin-logo.png';
import facebook from 'D:/Project/savitahospital/savita/src/Components/Assets/facebook-logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <h2>Connect with Me</h2>
        <div className="footer-media">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="footer-icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" className="footer-icon" />
          </a>
        </div>
        <p>© 2024 Yash Sonawane. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
