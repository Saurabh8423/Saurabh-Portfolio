import React from "react";
import "./Card.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Card = ({ title, image, deployLink, techIcons = [] }) => {
  useGSAP(() => {
    gsap.to(".tech-icon", {
      y: -6,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
      stagger: 0.2,
    });
  });

  return (
    <div className="card">
      {/* Title on top of card */}
      <h1 className="card-title">{title}</h1>

      {/* Hoverable blurred image background */}
      <div className="hover-card">
        <img src={image} alt={title} className="card-image" />

        {deployLink && (
          <div className="card-buttons">
            <a href={deployLink} target="_blank" rel="noopener noreferrer">
              <button className="deploy-btn">➤</button>
            </a>
          </div>
        )}
      </div>

      {/* Tech text + Icons under title */}
      <div className="tech-icons">
        {techIcons.map((Icon, index) => (
          <Icon key={index} className="tech-icon" />
        ))}
      </div>
    </div>
  );
};

export default Card;
