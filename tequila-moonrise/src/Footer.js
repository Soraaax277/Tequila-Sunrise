import React from 'react';
import './Footer.css'; // Make sure to create this CSS file as well

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footercontainer">
        <p className="footer-text">© 2023 Tequila Moonrise. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;