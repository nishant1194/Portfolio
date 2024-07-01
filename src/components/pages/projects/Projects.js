import React from "react";
import alpaha from "../../images/imgs/Arnav.jpeg";
import "../projects/Projects.css";
import weatherWaveImg from '../../images/imgs/weatherWavve.png'
import rsfImg from '../../images/imgs/rsfWeb.png'
import blogImg from '../../images/imgs/blogImg.png'

function Projects() {
  return (
    <div>
      <section className="mainC" id="projects">
        <h1 className="tlle">PROJECTS</h1>
        <div className="project">
          <div className="card">
            <img src={weatherWaveImg} alt="..." className="cardImg" />
            <h2 className="projectTitle">WeatherWave</h2>
            <p>
              Designed and developed a cutting-edge weather tracking app,
              delivering real-time forecasts and intuitive user interfaces for
              enhanced weather awareness.
            </p>
            <ul className="techs">
              <li className="techitems">React</li>
              <li className="techitems">Tailwind</li>
              <li className="techitems">JavaScript</li>
              {/*  <li className='techitems'>tech1</li> */}
            </ul>
            <ul className="techss">
              <li className="techitemss">
                <a
                  href="https://weather-wave-project.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </li>
              <li className="techitemss">
                <a
                  href="https://github.com/nishant1194/weatherWave"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
              </li>
            </ul>
          </div>

          <div className="card">
            <img src={rsfImg} alt="..." className="cardImg" />
            <h2 className="projectTitle"> RSF-EE WEBSITE </h2>
            <p>
              Engineered a comprehensive website for the EE-RSF Society at our
              college. I have implemented dynamic features, organiz- -ed content
              on websites.
            </p>
            <ul className="techs">
              <li className="techitems">React</li>
              <li className="techitems">Bootstrap</li>
              <li className="techitems">JS</li>
              {/*  <li className='techitems'>tech1</li> */}
            </ul>
            <ul className="techss">
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
            </ul>
          </div>

          <div className="card">
            <img src={blogImg} alt="..." className="cardImg" />
            <h2 className="projectTitle"> BlogApp</h2>
            <p>
              {" "}
              I've built a React.js frontend for a blog app, offering seamless
              navigation and interaction. Still I am working on the backend of
              this project.
            </p>{" "}
            <ul className="techs">
              <li className="techitems">MERN Stack</li>
              <li className="techitems">Material UI</li>
              <li className="techitems">JS</li>
              {/*  <li className='techitems'>tech1</li> */}
            </ul>
            <ul className="techss">
              <li className="techitemss">
                <a
                  href="https://blog-app-neew.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </li>
              <li className="techitemss">
                <a
                  href="https://github.com/nishant1194/blogApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="project">
          {/* <div className="card">
      <img src={alpaha} alt="..." className='cardImg'/>
      <h2>Project A</h2>
      <p>Lorem inctio nisi praesentium, aliquam dolores, eligendi  harum fuga.</p>
      <ul className='techs'>
          <li className='techitems'>tech1</li>
          <li className='techitems'>tech1</li>
          <li className='techitems'>tech1</li>
          <li className='techitems'>tech1</li>


      </ul>
  </div> */}

          {/* <div className="card">
      <img src={alpaha} alt="..." className='cardImg'/>
      <h2>Project A</h2>
      <p>Lorem inctio nisi praesentium, aliquam dolores, eligendi  harum fuga.</p>
      <ul className='techs'>
          <li className='techitems'>tech1</li>
          <li className='techitems'>tech1</li>
          <li className='techitems'>tech1</li>
          <li className='techitems'>tech1</li>


      </ul>
  </div> */}
          {/* <div className="card">
      <img src={alpaha} alt="..." className='cardImg'/>
      <h2>Project A</h2>
      <p>Lorem inctio nisi praesentium, aliquam dolores, eligendi  harum fuga.</p>
      <ul className='techs'>
          <li className='techitems'>tech1</li>
          <li className='techitems'>tech1</li>
          <li className='techitems'>tech1</li>
          <li className='techitems'>tech1</li>


      </ul>
  </div> */}
        </div>
      </section>
    </div>
  );
}

export default Projects;
