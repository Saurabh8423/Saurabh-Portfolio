import React from "react";
import "./Card.css";

const Card = ({ title, image, deployLink }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <div className="hover-card">
        <img src={image} alt="title" />
        {(deployLink) && (
          <div className="card-buttons">
            {deployLink && (
              <a href={deployLink} target="_blank" rel="noopener noreferrer">
                <button className="deploy-btn">{"➤"}</button>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
