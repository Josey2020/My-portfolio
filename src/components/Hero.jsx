import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCodeBranch, FaArrowDown } from 'react-icons/fa';
import './../styles/App.css';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaCodeBranch /> Interstellar Developer
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Building Digital
            <span className="gradient-text"> Universes</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            I craft extraordinary web experiences that transcend boundaries. 
            Welcome to my portfolio, where code meets the stars.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Work
            </motion.button>
            <motion.button 
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="hero-social"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <a href="https://github.com/Josey2020" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ y: -5 }} className="social-icon">
                <FaGithub />
              </motion.div>
            </a>
            <a href="https://www.linkedin.com/in/akindele-kolawole-1a756226a/" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ y: -5 }} className="social-icon">
                <FaLinkedin />
              </motion.div>
            </a>
          </motion.div>
        </div>
        
        <div className="hero-visual">
          <div className="planet-container">
            <div className="planet">
              <div className="planet-ring"></div>
              <div className="planet-crater"></div>
              <div className="planet-crater small"></div>
              <div className="planet-crater large"></div>
            </div>
            <div className="orbiting-satellite">
              <div className="satellite-body"></div>
              <div className="satellite-panel"></div>
            </div>
          </div>
        </div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;