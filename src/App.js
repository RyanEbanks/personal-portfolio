import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import HomeDA from './components/HomeDA';
import Skills from './components/Skills';
import SkillsDA from './components/SkillsDA';
import Projects from './components/Projects';
import DataAnalyst from './components/DataAnalyst';
import About from './components/About';

function App() {
  const homeRef = useRef(null);
  const homeDARef = useRef(null);
  const skillsRef = useRef(null);
  const skillsDARef = useRef(null);
  const projectsRef = useRef(null);
  const DataAnalystRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='App'>
      <Router>
        <Navbar
          scrollToHome={() => scrollToSection(homeRef)}
          scrollToHomeDA={() => scrollToSection(homeDARef)}
          scrollToSkills={() => scrollToSection(skillsRef)}
          scrollToSkillsDA={() => scrollToSection(skillsDARef)}
          scrollToProjects={() => scrollToSection(projectsRef)}
          scrollToDataAnalyst={() => scrollToSection(DataAnalystRef)}
          scrollToAbout={() => scrollToSection(aboutRef)}
          scrollToContact={() => scrollToSection(contactRef)}
        />
        <Routes>
          <Route path='/' element={
            <>
              <div ref={homeRef}>
                <Home scrollToProjects={() => scrollToSection(projectsRef)} />
              </div>
              <div className='app-two'>
                <div ref={skillsRef}><Skills /></div>
                <div ref={projectsRef}>
                  <Projects scrollToContact={() => scrollToSection(contactRef)} />
                </div>
                <div ref={aboutRef}><About /></div>
                <div ref={contactRef}><Contact /></div>
                <Footer />
              </div>
            </>
          } />
          <Route path='/da' element={
            <>
              <div ref={homeDARef}>
                <HomeDA scrollToProjects={() => scrollToSection(DataAnalystRef)} />
              </div>
              <div className='app-two'>
                <div ref={skillsDARef}><SkillsDA /></div>
                <div ref={DataAnalystRef}>
                  <DataAnalyst scrollToContact={() => scrollToSection(contactRef)} />
                </div>
                <div ref={aboutRef}><About /></div>
                <div ref={contactRef}><Contact /></div>
                <Footer />
              </div>
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
