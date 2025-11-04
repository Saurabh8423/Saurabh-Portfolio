import React from "react";
import Card from "../Card/Card";
import "./Project.css";
import lms from "../../assets/lms.webp";
import rms from "../../assets/rms.png";
import glx from "../../assets/glx.png";
import nomophobia from "../../assets/Nomophobia.webp";
import workouts from "../../assets/workouts.png";
import notes from "../../assets/notes.png";
import game from "../../assets/game.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiCss3,
  SiTailwindcss,
  SiPython,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaHtml5 } from "react-icons/fa";

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
          title="RESTAURANT MANAGEMENT SYSTEM"
          image={rms}
          deployLink="https://restaurant-management-system-puce.vercel.app/"
          techIcons={[
            SiMongodb,
            SiExpress,
            SiReact,
            SiNodedotjs,
            SiJavascript,
            SiCss3,
          ]}
        />

        <Card
          title="GALAXY TRAVELS"
          image={glx}
          deployLink="https://galaxy-travels.vercel.app/"
          techIcons={[SiReact, SiJavascript, SiCss3]}
        />

        <Card
          title="SMARTPHONE ADDICTION CARE"
          image={nomophobia}
          deployLink="https://smartphone-addiction-care.vercel.app/"
          techIcons={[
            GiArtificialIntelligence,
            SiReact,
            SiJavascript,
            SiPython,
            SiCss3,
          ]}
        />

        <Card
          title="LEARNING MANAGEMENT SYSTEM"
          image={lms}
          deployLink="https://learning-management-system-frontend-u5vz.onrender.com"
          techIcons={[
            SiMongodb,
            SiExpress,
            SiReact,
            SiNodedotjs,
            SiJavascript,
            SiTailwindcss,
          ]}
        />

        <Card
          title="WORKOUTS"
          image={workouts}
          deployLink="https://workouts-website-frontends.vercel.app/login"
          techIcons={[
            SiMongodb,
            SiExpress,
            SiReact,
            SiNodedotjs,
            SiJavascript,
            SiCss3,
          ]}
        />

        <Card
          title="NOTES APP"
          image={notes}
          deployLink="https://notes-app-woad-eight.vercel.app/"
          techIcons={[SiReact, SiJavascript, SiCss3]}
        />

        <Card
          title="ROCK PAPER SCISSORS GAME"
          image={game}
          deployLink="https://rock-paper-scissors-game-tawny-pi.vercel.app/"
          techIcons={[SiJavascript, SiCss3, FaHtml5]}
        />
      </div>
    </div>
  );
};

export default Project;
