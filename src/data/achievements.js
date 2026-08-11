import hackathonImage from "../assets/hackthon2.jpg";
import hackathonCertificate from "../assets/hackthon.jpg";
import wiproImage from "../assets/wipro.jpg";

const achievements = [
  {
    icon: "trophy",
    type: "Achievement",
    title: "First Runner-Up in Hackathon",
    organization: "Institution's Innovation Council",
    date: "April 2026",
    description:
      "Secured First Runner-Up position in a hackathon, gaining practical experience in problem solving, teamwork, and Artificial Intelligence.",
    skills: ["Hackathon", "Artificial Intelligence"],

    images: [
      hackathonImage,
      hackathonCertificate,
    ],

    buttonText: "View Achievement",
    theme: "gold",
  },

  {
    icon: "paper",
    type: "Publication",
    title: "Foot Towing System",
    organization:
      "International Research Journal of Modernization in Engineering Technology and Science",
    date: "November 2024",
    description:
      "Published a research paper on the Foot Towing System as part of my academic and technical research work.",
    skills: ["Paper Publication", "Research Skills"],

    link:
      "https://www.irjmets.com/uploadedfiles/paper/issue_11_november_2024/63397/final/fin_irjmets1730903689.pdf",

    buttonText: "Read Publication",
    theme: "blue",
  },

  {
    icon: "briefcase",
    type: "Career Milestone",
    title: "Selected for Wipro SIM Program",
    organization:
      "Wipro School of IT Infrastructure Management",
    date: "February 2025",
    description:
      "Successfully cleared the selection process for Wipro's School of IT Infrastructure Management program, including the aptitude test, voice assessment, and technical + HR interview.",
    skills: [
      "Aptitude",
      "Communication",
      "Technical Interview",
    ],

    image: wiproImage,

    buttonText: "View Letter of Intent",
    theme: "purple",
  },
];

export default achievements;