// Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaLaptopCode } from "react-icons/fa"; // Import icons
import "../assets/styles.css"; // Ensure this file exists for custom styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="gradient-line"></div>
      <div className="social-links">
        Created by roharzan&nbsp;
        <a
          href="https://rohanmaharjan02.com.np/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaLaptopCode /> {/* Portfolio icon */}
        </a>
        <a
          href="mailto:roharzan@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaEnvelope /> {/* Email icon */}
        </a>
        <a
          href="https://www.linkedin.com/in/rohan-maharjan-866360186/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaLinkedin /> {/* LinkedIn icon */}
        </a>
        <a
          href="https://github.com/rohanmzn"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaGithub /> {/* GitHub icon */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
