import "./Achievements.css";

import {
  FaTrophy,
  FaFileAlt,
  FaBriefcase,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";
import achievements from "../../data/achievements";

function Achievements() {
  const getIcon = (icon) => {
    if (icon === "trophy") return <FaTrophy />;
    if (icon === "paper") return <FaFileAlt />;
    if (icon === "briefcase") return <FaBriefcase />;

    return <FaTrophy />;
  };

  return (
    <section className="achievements-section" id="achievements">

      {/* ================= HEADER ================= */}

      <motion.div
        className="achievements-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="achievements-subtitle">
          Beyond Academics
        </p>

        <h2>Achievements & Milestones</h2>

        <p className="achievements-intro">
          A few milestones that reflect my learning, curiosity,
          and continuous growth.
        </p>
      </motion.div>


      {/* ================= ACHIEVEMENT CARDS ================= */}

      <div className="achievements-container">

        {achievements.map((achievement, index) => (

          <motion.div
            className={`achievement-card ${achievement.theme}`}
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >

            {/* ICON */}

            <div className="achievement-icon">
              {getIcon(achievement.icon)}
            </div>


            {/* CONTENT */}

            <div className="achievement-content">

              <span className="achievement-type">
                {achievement.type}
              </span>


              <h3>
                {achievement.title}
              </h3>


              <h4>
                {achievement.organization}
              </h4>


              <span className="achievement-date">
                {achievement.date}
              </span>


              <p>
                {achievement.description}
              </p>


              {/* ================= SKILLS ================= */}

              <div className="achievement-skills">

                {achievement.skills.map((skill, skillIndex) => (

                  <span key={skillIndex}>
                    {skill}
                  </span>

                ))}

              </div>


              {/* ================= MULTIPLE IMAGES ================= */}
              {/* Used for Hackathon */}

              {achievement.images && achievement.images.length > 0 && (

                <div className="achievement-images">

                  {achievement.images.map((image, imageIndex) => (

                    <a
                      href={image}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={imageIndex}
                      className="achievement-image"
                    >

                      <img
                        src={image}
                        alt={`${achievement.title} ${imageIndex + 1}`}
                      />

                    </a>

                  ))}

                </div>

              )}


              {/* ================= SINGLE IMAGE ================= */}
              {/* Used for Wipro */}

              {achievement.image && (

                <a
                  href={achievement.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-single-image"
                >

                  <img
                    src={achievement.image}
                    alt={achievement.title}
                  />

                </a>

              )}


              {/* ================= EXTERNAL LINK ================= */}
              {/* Used for Research Paper */}

              {achievement.link && (

                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-button"
                >

                  {achievement.buttonText}

                  <FaExternalLinkAlt />

                </a>

              )}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Achievements;