import React, { useState } from "react";
import menuIcon from "../images/icons/menuIcon.svg";

import "./Navbar.css";

function Navbar() {
  const [menuuu, setMenuu] = useState(false);
  const presses = () => {
    setMenuu(!menuuu);
    console.log(menuuu);
  };

  if (menuuu === true) {
    return (
      <>
        <div className="navvu">
          <nav className="navbar">
            <div className="title">Portfollio</div>
            <div className="menu">
              <img
                src={menuIcon}
                alt="..."
                className="menuIcon"
                onClick={presses}
              ></img>
              <ul className="menuItems">
                <li>Home</li>
                <li>About Me</li>
                <li>Projects</li>
                <li>Contact Me</li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="compact">
          <ul className="menuItemds">
        
            <li className="ItemM">
              {" "}
              <a href="#about">About</a>
            </li>
            <li className="ItemM">
              {" "}
              <a href="#projects">Projects</a>
            </li>
            <li className="ItemM">
              {" "}
              <a href="#skills">Skills</a>
            </li>

            <li className="ItemM">
              {" "}
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="navvu">
          <nav className="navbar">
            <div className="title">Portfollio</div>
            <div className="menu">
              <img
                src={menuIcon}
                alt="..."
                className="menuIcon"
                onClick={presses}
              ></img>
              <ul className="menuItems">
               
                <li>
                  <a href="#about">About</a>
                </li>
               
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default Navbar;
