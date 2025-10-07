import React from "react";
import "./About.css";
import Card from "../Card/Card";
import mern from "../../assets/mern.png";
import ml from "../../assets/ml.png";
import dsa from "../../assets/dsa.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.from(".circle", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scroll: "body",
        scrub: 2,
        start: "top 50%",
        end: "top 30%",
      },
    });
    gsap.from(".line", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".line",
        scroll: "body",
        scrub: 2,
        start: "top 50%",
        end: "top 30%",
      },
    });

    gsap.from(".about-details h1", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".bout-details h1",
        scroll: "body",
        scrub: 2,
        start: "top 50%",
        end: "top 30%",
      },
    });

    gsap.from(".about-details ul", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".about-details ul",
        scroll: "body",
        scrub: 2,
        start: "top 50%",
        end: "top 30%",
      },
    });

    gsap.from(".right-about", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".right-about",
        scroll: "body",
        scrub: 2,
        start: "top 50%",
        end: "top 30%",
      },
    });
  });
  return (
    <div id="about">
      <div className="left-about">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="about-details">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>NAME</span>: SAURABH KUMAR
              </li>
              <li>
                <span>AGE</span>: 21 YEARS
              </li>
              <li>
                <span>GENDER</span>: MALE
              </li>
              <li>
                <span>LANGUAGE KNOWN</span>: HINDI,ENGLISH
              </li>
            </ul>
          </div>

          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>DEGREE</span>: B-TECH
              </li>
              <li>
                <span>BRANCH</span>: COMPUTER SCIENCE & INFORMATION TECHNOLOGY
              </li>
              <li>
                <span>CGPA</span>: 7.5
              </li>
            </ul>
          </div>

          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>MERN STACK WEB DEVELOPER</li>
              <li>MACHINE LEARNING</li>
              <li>DSA</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="right-about">
        <Card title="MERN STACK WEB DEVELOPER" image={mern} />
        <Card title="MACHINE LEARNING" image={ml} />
        <Card title="DSA" image={dsa} />
      </div>
    </div>
  );
};

export default About;
