import React, { useState } from "react";
import "../projects/Projects.css";
import weatherWaveImg from "../../images/imgs/weatherWavve.png";
import rsfImg from "../../images/imgs/rsfWeb.png";
import blogImg from "../../images/imgs/blogImg.png";
import urlImg from "../../images/imgs/urlImg.png";
import chatappImg from "../../images/imgs/chatappImg.png";
import neetcodeImg from "../../images/imgs/neetcodeImg.png";

function Projects() {
  const [projects, setProjects] = useState([
    
    {
      tittle: "Short.ly (Url utility)",
      
      description:
        "Engineered a cross-platform URL shortener with QR generator/scanner (web, mobile app, Chrome extension) using MERN stack, React-Native and Manifest V3",
        skills:["MERN","ReactNative","Manifest"],
        github:"https://github.com/nishant1194/urlNqr",
        liveLink:"https://url-nqr.vercel.app/",
        image:urlImg
    },
    {
      tittle: "Chat App (Web+Mobile)",
      description:
        "Developed a full-stack real-time chat application using MERN stack and React Native for cross-platform mobile support, with SocketIO.",
        skills:["MERN","ReactNative","Socket.IO"],
        github:"https://github.com/nishant1194/chat-app",
        liveLink:"https://github.com/nishant1194/chat-app",
        image:chatappImg
    },
    
    {
      tittle: "RSF-EE WEBSITE",
      description:
      "Engineered a comprehensive website for the EE-RSF Society at our college. I have implemented dynamic features, organized content on websites.",
      skills:["React","Bootstrap","JS"],
      github:"https://github.com/nishant1194/IIT_",
      liveLink:"https://iit-rsf.vercel.app",
      image:rsfImg
      
    },
    {
      tittle: "BlogApp",
      description:` Created a full-stack blog application using the MERN stack with JWT-based authentication enables admins to manage blogs, commentsand engagement.`,
      skills:["MERN","Material UI","JS"],
      github:"https://github.com/nishant1194/blogApp",
      liveLink:"https://blog-app-neew.vercel.app/",
      image:blogImg
    },
    {
      tittle: "LeetCode Clone with AI",
      description:`Developed a full-stack coding platform with user authentication, problem-solving interface, and real-time code execution using MERN stack with integrated chatbot.`,
      skills:["MERN","GeminiAPI","TailwindCSS"],
      github:"https://github.com/nishant1194/sihs",
      liveLink:"https://neetcode-teal.vercel.app/",
      image:neetcodeImg
    },
    {
      tittle: "WeatherWave",
      description:
        "Designed and developed a cutting-edge weather tracking app, delivering real-time forecasts and intuitive user interfaces for enhanced weather awareness.",
        skills:["React","Tailwind","JavaScript"],
        github:"https://github.com/nishant1194/weather-wave",
        liveLink:"https://weather-wave-project.vercel.app",
        image:weatherWaveImg
    },
  ]);
  return (
    <div>
      <section className="mainC" id="projects">
        <h1 className="tlle">PROJECTS</h1>
        <div className="project">
          {projects&&projects?.map((project,key)=>{
            return(
          <div className="card">
            <img src={project.image} alt="..." className="cardImg" />
            <h2 className="projectTitle">{project.tittle}</h2>
            <p className="discPro">
              {project.description}
            </p>
            <ul className="techs">
              {project?.skills.map((skills)=>{
                return(
                  <li className="techitems">{skills}</li>
                )
              })}
              {/* <li className="techitems">Tailwind</li>
              <li className="techitems">JavaScript</li> */}
              {/*  <li className='techitems'>tech1</li> */}
            </ul>
            <ul className="techss">
              <li className="techitemss">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </li>
              <li className="techitemss">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
              </li>
            </ul>
          </div>

            )
          })}

          {/* <div className="card">
            <img src={rsfImg} alt="..." className="cardImg" />
            <h2 className="projectTitle"> RSF-EE WEBSITE </h2>
            <p className="discPro">
              Engineered a comprehensive website for the EE-RSF Society at our
              college. I have implemented dynamic features, organiz- -ed content
              on websites.
            </p>
            <ul className="techs">
              <li className="techitems">React</li>
              <li className="techitems">Bootstrap</li>
              <li className="techitems">JS</li>
              {/*  <li className='techitems'>tech1</li> */}
            {/* </ul> */}
            {/* <ul className="techss">
              <li className="techitemss">
                <a
                  href="https://iit-rsf.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </li>
              <li className="techitemss">
                <a
                  href="https://github.com/nishant1194/IIT_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
              </li>
            </ul> */}
          {/* </div>  */}

          {/* <div className="card">
            <img src={blogImg} alt="..." className="cardImg" />
            <h2 className="projectTitle"> BlogApp</h2>
            <p className="discPro">
              {" "}
              I've built a React.js frontend for a blog app, offering seamless
              navigation and interaction. Still I am working on the backend of
              this project.
            </p>{" "}
            <ul className="techs">
              <li className="techitems">MERN</li>
              <li className="techitems">Material UI</li>
              <li className="techitems">JS</li>
              {/*  <li className='techitems'>tech1</li> */}
            {/* </ul>
            <ul className="techss">
              <li className="techitemss">
                <a
                  href="https://blog-app-neew.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a> */}
              {/* </li>
              <li className="techitemss">
                <a
                  href="https://github.com/nishant1194/blogApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
              </li>
            </ul> */}
          {/* </div> */}
        </div>
      </section>
    </div>
  );
}

export default Projects;
