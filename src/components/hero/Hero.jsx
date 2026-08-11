import "./Hero.css";
import heroImage from "../../assets/images/kirti.png";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Left Side */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="greeting">👋 Hello, I'm</p>

        <h1>
          <span>Kirti Desale</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Computer Engineering Student",
            2000,
            "Frontend Developer",
            2000,
            "React Learner",
            2000,
            "Java Programmer",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="typing"
        />

        <p className="description">
          I'm a Computer Engineering student from Pune who enjoys building
          modern web applications with React and Java. I'm currently learning
          full-stack development and looking for opportunities to grow as a
          software developer.
        </p>

        <div className="hero-buttons">
          <a href="/Kirti_desale.pdf" download>
            <button className="btn primary">
              📄 Download Resume
            </button>
          </a>

          <a href="#contact">
            <button className="btn secondary">
              📬 Contact Me
            </button>
          </a>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/KirtiDesale"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/kirtidesale/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="scroll-down">
          <a href="#about">
            <FaArrowDown />
          </a>
        </div>
      </motion.div>

      {/* Right Side */}
     <motion.div
  className="hero-image"
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <img
    src={heroImage}
    alt="Kirti Desale"
  />
</motion.div>
    </section>
  );
}

export default Hero;