import React from "react";
import "./Home.css";
import man from "../../assets/man.png";
import resume from "../../assets/Saurabh-Kumar.pdf";
import download from "../../assets/download-icon.png";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line1", {
      y: 80,
      duration: 1,
      opacity: 0,
    });
    tl1.from(".line2", {
      y: 80,
      duration: 1,
      opacity: 0,
    });
    tl1.from(".line3", {
      y: 80,
      duration: 1,
      opacity: 0,
    });

    gsap.from(".right-home img", {
      x: 200,
      duration: 1,
      opacity: 0,
    });

    gsap.from(".home-buttons", {
      y: 100,
      duration: 1,
      opacity: 0,
    });
  });

  return (
    <div id="home">
      <div className="left-home">
        <div className="home-details">
          <div className="line1">I'M</div>
          <div className="line2">SAURABH KUMAR</div>
          <div className="line3">
            <Typewriter
              words={[
                "MERN DEVELOPER",
                "SOFTWARE DEVELOPER",
                "MACHINE LEARNING",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <div className="home-buttons">
            <Link to="contact" smooth={true} duration={800}>
              <button>HIRE ME</button>
            </Link>
            <a href={resume} download="Saurabh-Kumar.pdf">
              <button className="resume-btn">
                RESUME
                <img
                  src={download}
                  alt="Download Icon"
                  width={18}
                  height={18}
                />
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="right-home">
        <img src={man} alt="" />
      </div>
    </div>
  );
};

export default Home;
