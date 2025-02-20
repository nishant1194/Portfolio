
import { useState } from 'react';
import './App.css';
import Navbar from './components/icl/Navbar';
import Footer from './components/icl/footer/Footer';
import Home from './components/pages/Home';
import About from './components/pages/about/About';
import Projects from './components/pages/projects/Projects';
import Skill from './components/pages/skill/Skill';
import Intro from './components/loader/index';
 
function App() {
  
    return (
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Projects />
        <Footer />
        
  
      </div>
    );
   }


export default App;

// git fetch origin 
// git add .           
// git commit -m "Resolved merge conflicts"
// git push origin main
