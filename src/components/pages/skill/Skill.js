import React from 'react'
import '../skill/Skill.css'
import abc from '../../images/imgs/Arnav.jpeg'
import Nodejs from '../../images/logos/nodeJs.png'
import JavaScript from '../../images/logos/javascript.png'
import HtmlCssJs from '../../images/logos/htmlCssJs.png'
import MongoDB from '../../images/logos/mongodb.png'
import ExpreesJs from '../../images/logos/ExpressJS.webp'
import Cpp from '../../images/logos/C++.svg'
import ReactLogo from '../../images/logos/reacttt.png'
import ReactNative from '../../images/logos/reactNative.png'
import AndroidStudio from '../../images/logos/AndroidStudio.png'
import java from '../../images/logos/java.svg'
function Skill() {
  return (
    <div>
       <section className='containere' id='skills'>
        <div className='contente'>
             <div className="skills">
             <h1 className='tittllee'>Skills</h1>
             <ul className='skillS'>

             <li className='skillItem' >
              <img src={java} alt="..."  className='skillImg'/>
              <p className='skillText'>Java</p>
              </li>

              <li className='skillItem' >
              <img src={Cpp} alt="..."  className='skillImg'/>
              <p className='skillText'>C/C++</p>
              </li>
              <li className='skillItem' >
              <img src={JavaScript} alt="..."  className='skillImg'/>
              <p className='skillText'>JavaScript</p>
              </li>
              <li className='skillItem' >
              <img src={HtmlCssJs} alt="..."  className='skillImg'/>
              <p className='skillText'>HTML CSS JS</p>
              </li>
              <li className='skillItem' >
              <img src={AndroidStudio} alt="..."  className='skillImg'/>
              <p className='skillText'>AndroidStudio</p>
              </li>
              <li className='skillItem' >
              <img src={ReactNative} alt="..."  className='skillImg'/>
              <p className='skillText'>React-Native</p>
              </li>
              <li className='skillItem' >
              <img src={MongoDB} alt="..."  className='skillImg'/>
              <p className='skillText'>MongoDB</p>
              </li>
              <li className='skillItem' >
              <img src={ExpreesJs} alt="..."  className='skillImg'/>
              <p className='skillText'>ExpressJS</p>
              </li>
              <li className='skillItem' >
              <img src={ReactLogo} alt="..."  className='skillImg'/>
              <p className='skillText'>React</p>
              </li>
              <li className='skillItem' >
              <img src={Nodejs} alt="..."  className='skillImg'/>
              <p className='skillText'>Node.js</p>
              </li>
            
             </ul>
             </div>
             <div className='porr'>
            <ul className='aboutItemse'>
            <h1 className='tittlleee'>Position of Responsibilities</h1>

                <li className='aboutIteme'>
                    <div className='aboutItemTexte'>
                        <h3 className='ttilee'>Coordinator | Aeromodelling Club, IITRopar</h3>
                        <p className='disccpe'>Core member of Aeromodelling club of IIT Ropar. Made quadcopter and RC plane as a team project in group and conducted sessions for  juniors.  </p>
                    </div>
                </li>
              
                <li className='aboutIteme'>
                <div className='aboutItemTexte'>
                        <h3 className='ttilee'>UFMC Member</h3>
                        <p className='disccpe'>Student representative in the Utility Feedback Management Committee, presenting the crucial feedback of students to the college administration. Collaboratively working to improve and enhance utility services for a better student experience.</p>
                    </div>
                </li>
                <li className='aboutIteme'>
                <div className='aboutItemTexte'>
                        <h3 className='ttilee'>Co-head in Skymaster</h3>
                        <p className='disccpe'>Successfullu conducted Skymaster which is a Drone racing event in Advitiya, Teachnical fest of IIT, Ropar.</p>
                    </div>
                </li>
            </ul>
            </div>
        </div>

      </section>
    </div>
  )
}

export default Skill
