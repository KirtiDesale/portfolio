import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiFirebase,
  SiSpringboot,
  SiVite,
} from "react-icons/si";

const techStack = [
  {
    category: "Frontend",
    technologies: [
      {
        name: "HTML5",
        subtitle: "Structure",
        icon: FaHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        subtitle: "Styling",
        icon: FaCss3Alt,
        color: "#1572B6",
      },
      {
        name: "JavaScript",
        subtitle: "Programming",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "React",
        subtitle: "Frontend Library",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        name: "Vite",
        subtitle: "Build Tool",
        icon: SiVite,
        color: "#646CFF",
      },
    ],
  },

  {
    category: "Backend",
    technologies: [
      {
        name: "Java",
        subtitle: "Programming Language",
        icon: FaJava,
        color: "#f89820",
      },
      {
        name: "Spring Boot",
        subtitle: "Backend Framework",
        icon: SiSpringboot,
        color: "#6DB33F",
      },
      {
        name: "Firebase",
        subtitle: "Backend Service",
        icon: SiFirebase,
        color: "#FFCA28",
      },
    ],
  },

  {
    category: "Database",
    technologies: [
      {
        name: "MySQL",
        subtitle: "Relational Database",
        icon: SiMysql,
        color: "#4479A1",
      },
    ],
  },

  {
    category: "Tools",
    technologies: [
      {
        name: "Git",
        subtitle: "Version Control",
        icon: FaGitAlt,
        color: "#F05032",
      },
      {
        name: "GitHub",
        subtitle: "Code Hosting",
        icon: FaGithub,
        color: "#ffffff",
      },
    ],
  },
];

export default techStack;