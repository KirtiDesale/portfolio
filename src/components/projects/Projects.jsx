import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../../data/projects";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      {/* Section Heading */}
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="projects-subtitle">My Best Work</span>

        <h2>Featured Projects</h2>
      </motion.div>

      {/* Projects */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`project-card ${
              index % 2 !== 0 ? "reverse" : ""
            }`}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            {/* =========================
                Project Image
            ========================= */}

            <motion.div
              className="project-image"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div
                className={`device-frame ${
                  project.type || "laptop"
                }`}
              >
                {/* Laptop Top Bar */}
                {project.type === "laptop" && (
                  <div className="device-top">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}

                {/* Phone Speaker */}
                {project.type === "phone" && (
                  <div className="phone-speaker"></div>
                )}

                {/* Screen */}
                <div className="device-screen">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                  />
                </div>

                {/* Phone Home Bar */}
                {project.type === "phone" && (
                  <div className="phone-home-bar"></div>
                )}
              </div>
            </motion.div>

            {/* =========================
                Project Content
            ========================= */}

            <motion.div
              className="project-content"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? 80 : -80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <span className="project-number">
                0{index + 1}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              {/* Technologies */}
              <div className="project-tech">
                {(project.technologies || []).map((tech) => (
                  <span
                    key={tech}
                    className="tech-badge"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="project-buttons">
                {/* Live Demo */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-btn"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo →</span>
                  </a>
                )}

                {/* GitHub */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    <FaGithub />
                    <span>View on GitHub →</span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;