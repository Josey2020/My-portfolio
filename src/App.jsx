import React from 'react';
import { motion } from 'framer-motion';
import StarsBackground from './components/StarsBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <StarsBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;