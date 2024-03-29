import React from 'react'

import '../pages/Home.css'
import NishantImg from '../images/imgs/Nishant.JPG'

function Home() {
  return (
    <div className='booox'>
      <div className='mainBox'>
        <div className='divv1'>
      <h1 className='titlee'>Hii, I am Nishant</h1>
      <p className='desc'>I am a full stack developer.<br /> I develope webApps using MERN stack.<br />I also made mobile Apps with React-Native.</p> 
      <p className='contactBtn'>Contact me</p>
    </div>
    <div className='divv2'>
      <img src={NishantImg} alt="" className='imgP'/>
    </div>
    </div>


    </div>
  )
}

export default Home
