import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPaperPlane, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaRocket 
} from 'react-icons/fa';
import './../styles/App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '0429444d-dfaa-4423-9086-654c539388a0',
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "woleakin4@gmail.com",
      link: "mailto:woleakin4@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+234 (810) 999-1875",
      link: "tel:+2348109991875"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Delta State, Warri, NG",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">Let's build something amazing together</p>
        </motion.div>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="contact-info-title">Connect With Me</h3>
            <p className="contact-info-description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="contact-info-items">
              {contactInfo.map((info, index) => (
                <motion.a 
                  key={index}
                  href={info.link}
                  className="contact-info-item"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="contact-info-icon">{info.icon}</div>
                  <div className="contact-info-content">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
            
            <div className="contact-social">
              <p>Follow my journey</p>
              <div className="social-links">
                <motion.a 
                  href="https://github.com/Josey2020" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="social-link"
                >
                  <FaGithub />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/akindele-kolawole-1a756226a" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="social-link"
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <motion.button 
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </motion.button>
              
              {isSubmitted && submitStatus === 'success' && (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  className="error-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errorMessage || 'Failed to send message. Please try again.'}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <FaRocket /> AKIN<span>GURU</span>
          </div>
          <p className="footer-text">
            Exploring the digital universe, one line of code at a time.
          </p>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Cosmic Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;