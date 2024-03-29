import React from 'react'
import alpaha from '../../images/imgs/Arnav.jpeg'
import '../projects/Projects.css'
import Footer from '../../icl/footer/Footer'

function Projects() {
  return (
    <div>
        <section className='mainC'>
      <h1 className='tlle'>PROJECTS</h1>
      <div className="project">

      <div className="card">
            <img src={alpaha} alt="..." className='cardImg'/>
            <h2>WeatherWave</h2>
            <p>Designed and developed a cutting-edge weather tracking app, delivering real-time forecasts and intuitive user interfaces for enhanced weather awareness.</p>
            <ul className='techs'>
                <li className='techitems'>React</li>
                <li className='techitems'>Tailwind</li>
                <li className='techitems'>JavaScript</li>
               {/*  <li className='techitems'>tech1</li> */}


            </ul>
            <ul className='techss'>
                <li className='techitemss'>Demo</li>
                <li className='techitemss'>Source</li>
               


            </ul>
        </div>
        
        <div className="card">
            <img src={alpaha} alt="..." className='cardImg'/>
            <h2>  RSF-EE WEBSITE </h2>
            <p>Engineered a comprehensive website for the EE-RSF Society at our college. I have implemented dynamic features, organiz-   -ed content on websites.</p>
            <ul className='techs'>
                <li className='techitems'>React</li>
                <li className='techitems'>Bootstrap</li>
                <li className='techitems'>JS</li>
               {/*  <li className='techitems'>tech1</li> */}


            </ul>
            <ul className='techss'>
                <li className='techitemss'>Demo</li>
                <li className='techitemss'>Source</li>
               


            </ul>
        </div>
        
      
        <div className="card">
            <img src={alpaha} alt="..." className='cardImg'/>
            <h2> E-commerce Website</h2>
            <p>Developed a dynamic full-stack e-commerce website with user-friendly features, streamlined navigation, and elevating the online shopping experience.</p>
            <ul className='techs'>
                <li className='techitems'>MERN Stack</li>
                <li className='techitems'>Material UI</li>
                <li className='techitems'>JS</li>
               {/*  <li className='techitems'>tech1</li> */}


            </ul>
            <ul className='techss'>
                <li className='techitemss'>Demo</li>
                <li className='techitemss'>Source</li>
               


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
  )
}

export default Projects
