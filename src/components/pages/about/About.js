import React from 'react'
import Navbar from '../../icl/Navbar'
import '../about/About.css'
import abc from '../../images/imgs/img.png'
import NishantImgg from '../../images/imgs/Nishant.JPG'
import Footer from '../../icl/footer/Footer'


function About() {
  return (
    <div>        
      <section className='container' id='about'>
        <h2 className='tittlle'>ABOUT ME</h2>
        <div className='content'>
            <img src={abc} alt="..."  className='aboutImg'/>
            <ul className='aboutItems'>
                <li className='aboutItem'>
                    <div className='aboutItemText'>
                        <h3 className='ttile'>Web Developer</h3>
                        <p className='disccp'>As a MERN developer, I build morden and responsive web applications using MongoDB, Express.js, React, and Node.js.</p>
                    </div>
                </li>
                <li className='aboutItem'>
                <div className='aboutItemText'>
                        <h3 className='ttile'>Mobile Developer</h3>
                        <p className='disccp'>I'm a React Native developer who loves crafting mobile apps with React and JavaScript. I focus on making user-friendly designs.</p>
                    </div>
                </li>
                <li className='aboutItem'>
                <div className='aboutItemText'>
                        <h3 className='ttile'>Acadamics</h3>
                        <p className='disccp'>Currently pursuing my B.Tech in one of the prestigious college of India, Indian Institute of Technology, Ropar. </p>
                    </div>
                </li>
            </ul>
        </div>

      </section>
    </div>
  )
}

export default About
