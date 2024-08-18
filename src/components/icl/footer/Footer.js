import React from 'react'
import '../footer/Footer.css'
import icon from '../../images/icons/menuIcon.svg'
import gmailIcon from '../../images/icons/emailIcon.png'
import linkedInIcon from '../../images/icons/linkedinIcon.png'
import githubIcon from '../../images/icons/githubIcon.png'
function Footer() {
  return (
    <div>
      <div className="mianC" id='contact'>
        <div className="left">
            <div className="titlde">Contact</div>
            <div className="reach">Feel free to reach out</div>
        </div>
        <div className="rightt">
            <ul className='mailll'>
            <li className='mail'>
                <img src={gmailIcon} alt="..." className='iconfotr'/>          

                <a href='mailto:nishantrpr1194@gmail.com'>Gmail   </a>
            </li>
            <li className='mail'>
                <img src={linkedInIcon} alt="..." className='iconfotr'/>          

                <a href='https://www.linkedin.com/in/nishant-428476256/'>LinkedIn</a>
            </li>
            <li className='mail'>
                <img src={githubIcon} alt="..." className='iconfotr'/>          
                     

                <a href='https://github.com/nishant1194'>Github</a>
            </li>
           
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
