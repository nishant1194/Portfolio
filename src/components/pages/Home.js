import React from 'react'

import '../pages/Home.css'
import NishantImg from '../images/imgs/Nishant.JPG'
import NishantImgg from '../images/imgs/NishantBackgroung.png'

function Home() {
  return (
    <div className='booox'>
      <div className='mainBox'>
        <div className='divv1'>
      <h1 className='titlee'>Hii, I am Nishant</h1>
      <p className='desc'>I am a full stack developer.<br /> I develope webApps using MERN stack.<br />I also made mobile Apps with React-Native.</p> 
     <div >

      <span className='contactBtn'> <a href="#contact">Contact Me</a></span>
       <span className='contactBtn'style={{margin:"0px 50px "}} > <a href="https://drive.google.com/file/d/1vLluE4SAkoSCQkU36ZVK7XX3JKWz_w3t/view?usp=sharing" target='blank'>Resume</a> </span>
     </div>
    </div>
    <div className='divv2'>
      <img src={NishantImg} alt="" className='imgP'/>
    </div>
    </div>

    </div>
  )
}

export default Home
