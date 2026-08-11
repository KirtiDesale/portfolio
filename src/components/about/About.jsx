import "./About.css";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaBullseye,
  FaMapMarkerAlt,
} from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      text: "B.E. Computer Engineering",
    },
    {
      icon: <FaCode />,
      title: "Current Focus",
      text: "React • Java • Web Development",
    },
    {
      icon: <FaBullseye />,
      title: "Career Goal",
      text: "Software Engineer",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      text: "Pune, Maharashtra",
    },
  ];

  return (
    <section className="about" id="about">
      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="section-subtitle">Get To Know Me</p>

        <h2>About Me</h2>

        <p className="about-description">
          I'm a Computer Engineering student who enjoys turning ideas into clean, responsive web applications. I love learning new technologies, building real-world projects, and continuously improving my skills to become a Software Engineer.
        </p>

        <p className="about-description">
          My goal is to become a Software Engineer and create applications that
          are fast, beautiful, and easy to use.
        </p>
      </motion.div>

      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {cards.map((card, index) => (
          <div className="info-card" key={index}>
            <div className="card-icon">{card.icon}</div>

            <h3>{card.title}</h3>

            <p>{card.text}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default About;