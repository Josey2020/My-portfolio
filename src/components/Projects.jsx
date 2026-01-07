import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaRocket } from 'react-icons/fa';
import './../styles/App.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "WSOTS Foundation",
      description: "A non-profit organization dedicated to supporting and empowering underprivileged children and their communities. ",
      tags: ["React", "Node.js", "nomba"],
      github: "#",
      live: "https://www.wsotsfoundation.ng/",
      color: "#6c5ce7",
      image: "project-1"
    },
    {
      id: 2,
      title: "Goalpredictorx AI",
      description: "A football prediction platform powered by AI to give accurate prediction.",
      tags: ["React", "Node.js", "OpenAI", "Flutterwave"],
      github: "#",
      live: "https://www.goalpredictorx.com/",
      color: "#00cec9",
      image: "project-2"
    },
    {
      id: 3,
      title: "Gamezeebet",
      description: "A gaming betting platform for gamers, where users have full control on their stake and every outcome depends on how fast they are on decision making.",
      tags: ["React.js", "node.js", "MongoDB"],
      github: "#",
      live: "https://www.gamezeebet.com/",
      color: "#fd79a8",
      image: "project-3"
    },
    {
      id: 4,
      title: "discography web app",
      description: "This platform talks about lewis capald discography. It talks about event, song list, awards and festivals.",
      tags: ["React", "CSS3", "Framer Motion"],
      github: "#",
      live: "https://lewis-capaldi.vercel.app/",
      color: "#fdcb6e",
      image: "project-4"
    }
   
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">Exploring the frontiers of web development</p>
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={projectVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              style={{ '--project-color': project.color }}
            >
              <div className="project-image">
                <div className={`project-img-placeholder ${project.image}`}></div>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <motion.a 
                    href={project.github}
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub /> Code
                  </motion.a>
                  <motion.a 
                    href={project.live}
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p>Want to see more of my work?</p>
          <motion.button 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRocket /> View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;