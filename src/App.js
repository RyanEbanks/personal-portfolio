import React, { useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='App'>
      {/* Add in a box shadow later to separate the div */}
      <Navbar
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      <div className='app-two'>
        <div ref={homeRef}>
          <Home scrollToProjects={() => scrollToSection(projectsRef)} />
          </div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={projectsRef}>
          <Projects scrollToContact={() => scrollToSection(contactRef)} />
          </div>
        <div ref={aboutRef}><About /></div>
        <div ref={contactRef}><Contact /></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
