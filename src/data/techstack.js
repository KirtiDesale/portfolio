import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaWindows,
  FaMobileAlt,
  FaBrain,
  FaCode,
  FaNetworkWired,
  FaMicrochip,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiFirebase,
  SiVite,
  SiCplusplus,
  SiCursor,
} from "react-icons/si";

const techStack = [
  {
    category: "Programming",
    technologies: [
      {
        name: "Java",
        subtitle: "Programming Language",
        icon: FaJava,
        color: "#f89820",
      },
      {
        name: "Python",
        subtitle: "Programming Language",
        icon: FaPython,
        color: "#3776AB",
      },
      {
        name: "C++",
        subtitle: "Programming Language",
        icon: SiCplusplus,
        color: "#00599C",
      },
      {
        name: "JavaScript",
        subtitle: "Programming Language",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
    ],
  },

  {
    category: "Web Development",
    technologies: [
      {
        name: "HTML5",
        subtitle: "Web Structure",
        icon: FaHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        subtitle: "Web Styling",
        icon: FaCss3Alt,
        color: "#1572B6",
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
    category: "Backend & Database",
    technologies: [
      {
        name: "Firebase",
        subtitle: "Backend Service",
        icon: SiFirebase,
        color: "#FFCA28",
      },
      {
        name: "MySQL",
        subtitle: "Relational Database",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        name: "DBMS",
        subtitle: "Database Management",
        icon: SiMysql,
        color: "#4479A1",
      },
    ],
  },

  {
    category: "Computer Science Fundamentals",
    technologies: [
      {
        name: "OOP",
        subtitle: "Object-Oriented Programming",
        icon: FaCode,
        color: "#6C63FF",
      },
      {
        name: "DSA",
        subtitle: "Data Structures & Algorithms",
        icon: FaBrain,
        color: "#FF6B35",
      },
      {
        name: "Operating Systems",
        subtitle: "OS Fundamentals",
        icon: FaWindows,
        color: "#0078D4",
      },
      {
        name: "Computer Networks",
        subtitle: "Networking Fundamentals",
        icon: FaNetworkWired,
        color: "#00A8E8",
      },
      {
        name: "Computer Organization",
        subtitle: "Computer Architecture",
        icon: FaMicrochip,
        color: "#8E44AD",
      },
      {
        name: "Problem Solving",
        subtitle: "Logical Thinking",
        icon: FaBrain,
        color: "#E67E22",
      },
    ],
  },

  {
    category: "Development",
    technologies: [
      {
        name: "Web Development",
        subtitle: "Modern Web Applications",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        name: "Mobile Development",
        subtitle: "Android Development",
        icon: FaMobileAlt,
        color: "#3DDC84",
      },
    ],
  },

  {
    category: "Tools & AI",
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
      {
        name: "Cursor",
        subtitle: "AI Code Editor",
        icon: SiCursor,
        color: "#ffffff",
      },
      {
        name: "ChatGPT",
        subtitle: "AI Assistant",
        icon: FaBrain,
        color: "#10A37F",
      },
    ],
  },
];

export default techStack;