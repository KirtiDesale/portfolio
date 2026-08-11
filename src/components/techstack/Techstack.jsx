import "./TechStack.css";
import { motion } from "framer-motion";
import techStack from "../../data/techStack";

function TechStack() {
  return (
    <section className="tech-stack" id="skills">
      <motion.div
        className="tech-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="tech-subtitle">What I Work With</p>

        <h2 className="tech-title">Tech Stack</h2>

        <div className="title-line"></div>
      </motion.div>

      {techStack.map((category, index) => (
        <motion.div
          className="category"
          key={category.category}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          viewport={{ once: true }}
        >
          <h3>{category.category}</h3>

          <div className="tech-grid">
            {category.technologies.map((tech) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  className="tech-card"
                  key={tech.name}
                  whileHover={{
                    y: -12,
                    scale: 1.05,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                  }}
                >
                  <div className="icon-wrapper">
                    <Icon
                      className="tech-icon"
                      style={{ color: tech.color }}
                    />
                  </div>

                  <h4>{tech.name}</h4>

                  <span>{tech.subtitle}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </section>
  );
}

export default TechStack;