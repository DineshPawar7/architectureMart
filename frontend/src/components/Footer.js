import React from 'react';
import {Link} from 'react-router-dom';
import "../style/Footer.css";


const Footer = () => {
  return (
    <div className="footer">
  <h1 className="footer-text-center">
    All Right Reserved &copy; 
    <a href="https://www.linkedin.com/in/dineshpawar07/" target="_blank" rel="noopener noreferrer">
      Dinesh Pawar
    </a>
  </h1>
  <p className="text-center mt-3">
    <Link to="/about">About</Link>
    |
    <Link to="/contact">Contact</Link>
    |
    <Link to="/policy">Policy</Link>
  </p>
</div>

  )
}

export default Footer;