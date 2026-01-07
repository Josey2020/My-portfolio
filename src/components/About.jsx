import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUserAstronaut, FaGlobeAmericas, FaLightbulb } from 'react-icons/fa';
import './../styles/App.css';

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const aboutCards = [
    {
      icon: <FaRocket />,
      title: "Mission",
      description: "To push the boundaries of web development and create experiences that leave users in awe.",
      color: "#ff6b6b"
    },
    {
      icon: <FaUserAstronaut />,
      title: "Journey",
      description: "3+ years exploring the digital cosmos, mastering React, Node.js, and cloud technologies.",
      color: "#4ecdc4"
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Vision",
      description: "A future where web applications are as immersive and boundless as the universe itself.",
      color: "#45b7d1"
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Constantly experimenting with new technologies to build the next generation of web apps.",
      color: "#96ceb4"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <p className="section-subtitle">Navigating the digital cosmos</p>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Hello, I'm Akindele Kolawole</h3>
            <p>
              I'm a passionate full-stack developer with a love for creating immersive digital experiences. 
              My journey began in a small observatory where I first fell in love with the stars, and that passion 
              translated into building digital worlds.
            </p>
            <p>
              With expertise in modern web technologies, I specialize in creating performant, accessible, 
              and visually stunning applications. When I'm not coding, you can find me stargazing or reading 
              about the latest advancements in space exploration.
            </p>
            <div className="stats">
              <div className="stat">
                <div className="stat-number">30+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </div>
          </motion.div>
          
          <div className="about-cards">
            {aboutCards.map((card, index) => (
              <motion.div 
                key={index}
                className="about-card"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                style={{ '--card-color': card.color } }
              >
                <div className="card-icon" style={{ color: card.color }}>
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;