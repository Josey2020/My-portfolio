import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaJs, FaCss3Alt, FaHtml5, 
  FaGitAlt, FaFigma, FaCloud, FaDatabase 
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript } from 'react-icons/si';
import './../styles/App.css';

const Skills = () => {
  const skills = [
    { icon: <FaReact />, name: 'React', level: 95, color: '#61DAFB' },
    { icon: <FaNodeJs />, name: 'Node.js', level: 90, color: '#339933' },
    { icon: <FaJs />, name: 'JavaScript', level: 95, color: '#F7DF1E' },
    { icon: <FaHtml5 />, name: 'HTML5', level: 98, color: '#E34F26' },
    { icon: <FaCss3Alt />, name: 'CSS3', level: 95, color: '#1572B6' },
    { icon: <SiMongodb />, name: 'MongoDB', level: 85, color: '#47A248' },
    { icon: <FaDatabase />, name: 'MySQL', level: 65, color: '#4479A1' },
    { icon: <FaGitAlt />, name: 'Git', level: 75, color: '#F05032' },
    { icon: <FaCloud />, name: 'Cloud', level: 75, color: '#4285F4' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
          <p className="section-subtitle">Technologies I master across the digital universe</p>
        </motion.div>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-level">
                <div className="skill-level-bar">
                  <motion.div 
                    className="skill-level-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    style={{ backgroundColor: skill.color }}
                  ></motion.div>
                </div>
                <span className="skill-level-percent">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="skills-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p>
            Continuously expanding my skill set to explore new frontiers and backend in web development. 
            Currently learning: <span className="highlight">Python</span>, <span className="highlight">Three.js</span>, and <span className="highlight">Tailwind</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;