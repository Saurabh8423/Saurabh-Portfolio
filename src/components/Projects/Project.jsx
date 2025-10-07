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
        <Card title="LEARNING MANAGEMENT SYSTEM" image={lms} />
        <Card title="GALAXY TRAVELS" image={glx} />
        <Card title="SMARTPHONE ADDICTION CARE" image={nomophobia} />
        <Card title="WORKOUTS" image={workouts} />
        <Card title="NOTES APP" image={notes} />
        <Card title="ROCK PAPER SCISSORS GAME" image={game} />
      </div>
    </div>
  );
};

export default Project;
