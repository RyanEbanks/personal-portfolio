import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
