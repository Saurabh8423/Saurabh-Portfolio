import React from "react";
import Card from "../Card/Card";
import "./Project.css";
import lms from "../../assets/lms.webp";
import glx from "../../assets/glx.png";
import nomophobia from "../../assets/Nomophobia.webp";
import workouts from "../../assets/workouts.png";
import notes from "../../assets/notes.png";
import game from "../../assets/game.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  useGSAP(() => {
    gsap.from("#project-heading", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "#project-heading",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      },
    });

    gsap.from(".slider", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".slider",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      },
    });
  });

  return (
    <div id="projects">
      <h1 id="project-heading">2+ YEARS EXPERIENCED IN PROJECTS</h1>
      <div className="slider">
        <Card 
        title="LEARNING MANAGEMENT SYSTEM" 
        image={lms} 
        deployLink="https://lms-frontend-ashen.vercel.app/"
        />
        
        <Card
          title="GALAXY TRAVELS"
          image={glx}
          deployLink="https://galaxy-travels.vercel.app/"
        />

        <Card 
        title="SMARTPHONE ADDICTION CARE" 
        image={nomophobia} 
        deployLink="https://smartphone-addiction-care.vercel.app/"
        />

        <Card 
        title="WORKOUTS" 
        image={workouts} 
        deployLink="https://workouts-website-frontends.vercel.app/login"
        />

        <Card 
        title="NOTES APP" 
        image={notes} 
        deployLink="https://notes-app-woad-eight.vercel.app/"
        />

        <Card 
        title="ROCK PAPER SCISSORS GAME" 
        image={game} 
        deployLink="https://rock-paper-scissors-game-tawny-pi.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Project;
