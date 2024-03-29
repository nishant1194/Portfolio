import React from 'react'
import '../footer/Footer.css'
import icon from '../../images/icons/menuIcon.svg'

function Footer() {
  return (
    <div>
      <div className="mianC">
        <div className="left">
            <div className="titlde">Contact</div>
            <div className="reach">Feel free to reach out</div>
        </div>
        <div className="rightt">
            <ul className='mailll'>
            <li className='mail'>
                <img src={icon} alt="..." className=''/>          
                      <img src={icon} alt="..." className='' style={{visibility:"hidden"}}/>

                <p>alphaalpha@gmail.com</p>
            </li>
            <li className='mail'>
                <img src={icon} alt="..." className=''/>          
                      <img src={icon} alt="..." className='' style={{visibility:"hidden"}}/>

                <p>alphaalpha@gmail.com</p>
            </li>
            <li className='mail'>
                <img src={icon} alt="..." className=''/>          
                      <img src={icon} alt="..." className='' style={{visibility:"hidden"}}/>

                <p>alphaalpha@gmail.com</p>
            </li>
           
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
