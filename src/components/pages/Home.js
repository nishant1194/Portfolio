import React from "react";

import "../pages/Home.css";
import NishantImg from "../images/imgs/Nishant.JPG";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="booox">
      <div className="mainBox">
        <div className="divv1">
          <h1 className="titlee">
            Hi, I'm{" "}
          <span style={{color:"red"}}>  <Typewriter
              onInit={(typewriter) => {
                const loopAnimation = () => {
                  typewriter
                    .typeString('<span style="color:#02c3fc;">Nishant</span>')
                    .pauseFor(2000)
                    .start();
                 };
                 loopAnimation();
               
               }}
            />
            </span>
          </h1>
          <p className="desc" >
            I am a full-stack web developer.
             <br />
            I develop web apps using the MERN stack.
            <br />I build mobile apps with React Native.
          </p>
          <div className="buttons">
            <a href="#contact" className="button contact-button">
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1BooSpofpNEeSKnGiwXKwMbPl_ydu5JwF/view?usp=sharing"
              className="button resume-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="divv2">
          <img src={NishantImg} alt="" className="imgP" />
        </div>
      </div>
    </div>
  );
}

export default Home;
