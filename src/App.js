
import { useState,useEffect } from 'react';
import './App.css';
import Navbar from './components/icl/Navbar';
import Footer from './components/icl/footer/Footer';
import Home from './components/pages/Home';
import About from './components/pages/about/About';
import Projects from './components/pages/projects/Projects';
import Skill from './components/pages/skill/Skill';
import Intro from './components/loader/index';
import { useNavigate, useParams } from "react-router-dom";

 
function App() {
 const [newUrl,setNewurl] = useState("https://portfolio-fe-blond.vercel.app/");

  useEffect(() => {
    const redirectToNewResume = async () => {
      try {
       
      
          window.location.href = newUrl;
       
      } catch (error) {
 
        console.error("Invalid U RL:", error);
      }
    };

    redirectToNewResume();
  }, [newUrl]); //Add dependency to prevent infinite loop


    return (
      <div className="App">
        // <Navbar />
        // <Home />
        // <About />
        // <Skill />
        // <Projects />
        // <Footer />
        
  Redirecting to https://portfolio-fe-blond.vercel.app/
      </div>
    );
   }


export default App;

// git fetch origin 
// git add .           
// git commit -m "Resolved merge conflicts"
// git push origin main
