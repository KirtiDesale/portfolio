import "./Education.css";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    year: "2025 - 2028",
    title: "B.E. Computer Engineering (SPPU)",
    institute: "Alard College of Engineering and Management",
    description: "Currently Pursuing • Current CGPA: 8.86",
  },
  {
    year: "2022 - 2025",
    title: "Diploma in Information Technology",
    institute: "Pimpri Chinchwad Polytechnic",
    description: "Completed with 88.38%",
  },
  {
    year: "2022",
    title: "Secondary School Certificate (SSC)",
    institute: "C.E.S. Prerna High School",
    description: "Completed with 92%",
  },
];

function Education() {
  return (
    <section className="education-section" id="education">
      <motion.div
        className="education-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="education-subtitle">Academic Journey</p>
        <h2>Education</h2>
      </motion.div>

      <div className="timeline">
        {education.map((item, index) => (
          <motion.div
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -80 : 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
          >
            <div className="timeline-content">
              <div className="timeline-icon">
                <FaGraduationCap />
              </div>

              <span className="timeline-year">
                {item.year}
              </span>

              <h3>{item.title}</h3>

              <h4>{item.institute}</h4>

              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;