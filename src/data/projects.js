import portfolioImage from "../assets/projects/portfolio.png";
import sahayyaImage from "../assets/projects/sahayya.jpg";

const projects = [
  {
    id: 1,
    title: "Developer Portfolio",

    description:
      "A modern and responsive developer portfolio built with React, Vite and Framer Motion. It showcases my skills, projects, certifications and contact information with smooth animations and a clean user experience.",

    image: portfolioImage,

    type: "laptop",

    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS3",
      "Framer Motion",
    ],

    github: "https://github.com/KirtiDesale/portfolio",

    live: "",

    featured: true,
  },

  {
    id: 2,
    title: "SAHAYYA",

    description:
      "An Android application for emergency roadside assistance that helps users connect with nearby volunteers. Developed using Java, Firebase Authentication, Cloud Firestore, Firebase Cloud Messaging and OpenStreetMap.",

    image: sahayyaImage,

    type: "phone",

    technologies: [
      "Java",
      "Android",
      "Firebase",
      "Cloud Firestore",
      "FCM",
      "OpenStreetMap",
    ],

    github: "https://github.com/KirtiDesale/SAHAYYA",

    live: "",

    featured: true,
  },
];

export default projects;