import "./Contact.css";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="contact-subtitle">Get In Touch</p>

        <h2>Let's Connect</h2>

        <p className="contact-intro">
          I'm always open to discussing new opportunities, projects,
          collaborations, and interesting ideas.
        </p>
      </motion.div>


      <div className="contact-container">

        {/* Email */}

        <motion.a
          href="mailto:kirtisdesale.30@gmail.com"
          className="contact-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="contact-icon">
            <FaEnvelope />
          </div>

          <div className="contact-card-content">
            <span>Email</span>
            <h3>kirtisdesale.30@gmail.com</h3>
          </div>

          <FaArrowRight className="contact-arrow" />
        </motion.a>


        {/* LinkedIn */}

        <motion.a
          href="https://www.linkedin.com/in/kirtidesale/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="contact-icon">
            <FaLinkedin />
          </div>

          <div className="contact-card-content">
            <span>LinkedIn</span>
            <h3>Connect with me</h3>
          </div>

          <FaArrowRight className="contact-arrow" />
        </motion.a>


        {/* GitHub */}

        <motion.a
          href="https://github.com/KirtiDesale"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="contact-icon">
            <FaGithub />
          </div>

          <div className="contact-card-content">
            <span>GitHub</span>
            <h3>Explore my projects</h3>
          </div>

          <FaArrowRight className="contact-arrow" />
        </motion.a>

      </div>


      <motion.div
        className="contact-message"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p>
          Looking forward to connecting and building something meaningful.
        </p>
      </motion.div>

    </section>
  );
}

export default Contact;