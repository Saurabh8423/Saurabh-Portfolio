import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Footer = () => {
  useGSAP(() => {
    gsap.from(".footer-container", {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  });

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h2 className="footer-logo">Saurabh Kumar</h2>
        <div className="footer-socials">
          <a href="https://github.com/Saurabh8423" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/saurabh-kumar-091741209/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://x.com/Saurabh26393134" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
         <p className="footer-text">
          © {new Date().getFullYear()} All Rights Reserved | Designed & Built by <span>Saurabh</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
