import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUserAstronaut, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './../styles/App.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaRocket /> },
    { id: 'about', label: 'About', icon: <FaUserAstronaut /> },
    { id: 'skills', label: 'Skills', icon: <FaCode /> },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
    >
      <div className="header-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaRocket className="logo-icon" />
          <span className="logo-text">AKIN<span className="logo-highlight">GURU</span></span>
        </motion.div>
        
        <nav className="nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <motion.button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </motion.button>
              </li>
            ))}
          </ul>
        </nav>
        
        <motion.button 
          className="contact-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
        >
          <FaEnvelope /> Get In Touch
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;