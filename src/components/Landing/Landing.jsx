import React from "react";
import "./Landing.css";
import flash from "./../../assests/flashimg.png";
import Typewriter from "typewriter-effect";
const Landing = () => {
  return (
    <div className="landing-container">
      <div data-aos="fade-right" className="landing-left">
        <h1 className="landing-header">Can you Type like Flash?</h1>
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: ["Fast?", "Correct?", "Quick?"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div data-aos="fade-left" className="landing-right">
        <img className="flash-image" src={flash} alt="flash" />
      </div>
    </div>
  );
};

export default Landing;
