import React from 'react';
import "./Home.css"
import man from "../../assets/man.png";
import TypingEffect from "react-typing-effect";

const Home = () => {
  return (
    <div id="home">
      <div className="left-home">
        <div className="home-details">
          <div className="line1">I'M</div>
          <div className="line2">SAURABH KUMAR</div>
          <div className="line3">
            {/* <TypingEffect
              text={["MERN DEVELOPER", "SOFTWARE DEVELOPER","ML & AI"]}
              speed={500}
              eraseSpeed={500}
              eraseDelay={500}
              cursor='|'
             /> */}
          </div>
          <button>HIRE ME</button>
        </div>

      </div>

      <div className="right-home">
        <img src={man}alt="" />

      </div>
      
    </div>
  )
}

export default Home;
