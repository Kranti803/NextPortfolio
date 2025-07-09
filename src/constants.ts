import { Smartphone, Globe, School } from "lucide-react";
import CertificateImg from "@/assets/certificate.png";
import Ecommerce from "@/assets/ecommerce.png";
import Blog from "@/assets/blog.png";
import MovieSeries from "@/assets/movie.png";

export const navLinks = [
  "home",
  "about",
  "skills",
  "projects",
  "education",
  // "certificates",
  "services",
  "contact",
];

export const skills = {
  frontend: [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "HTML/CSS",
  ],
  backend: ["Node.js", "Express", "REST APIs", "MongoDB", "Redis"],
  tools: ["Git", "VS Code", "Figma", "Vercel", "Postman", "AI Tools"],
  learning: [
    "React Native",
    "Python",
    "GEN AI",
    "DevOps",
    "System Design",
    "Testing",
  ],
};

export const services = [
  {
    title: "Full Stack Web Development",
    description:
      "Building complete web applications from frontend to backend using React, Node.js, databases, and modern deployment practices.",
    icon: Globe,
    color: "emerald",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating cross-platform mobile applications using React Native, delivering native performance with shared codebase.",
    icon: Smartphone,
    color: "blue",
  },
];

export const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A full-stack MERN e-commerce platform featuring user authentication, product browsing, cart management, and secure checkout. Admin dashboard included for product and order control.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    image: Ecommerce,
    github: "https://github.com/Kranti803/frontend-Ecommerce",
    demo: "https://frontend-ecommerce-five.vercel.app",
  },
  {
    title: "FullStack Blog Website",
    description:
      "A full-featured blog platform with authentication, blog creation/editing, and comment system. Built with a clean UI, Firebase backend, and responsive design.",
    tech: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    image: Blog,
    github: "https://github.com/Kranti803/myblog--Frontend",
    demo: "https://myblog-frontend-rouge.vercel.app/",
  },
  {
    title: "MovieVerse",
    description:
      "A React-based movies and shows discovery app using TMDb API. Allows users to browse trending movies, view detailed info, and search content.User can watch movies and shows in real time, styled with SCSS for UI with infinite scrolling feature.",
    tech: ["React", "Sass", "API-Integration", "Axios"],
    image: MovieSeries,
    github: "https://github.com/Kranti803/movieWebApp",
    demo: "https://movie-web-app-gamma.vercel.app/",
  },
];

export const certificates = [
  {
    title: "React Developer Certificate",
    issuer: "Meta",
    date: "2024",
    image: CertificateImg,
    credentialId: "META-REACT-2024-001",
  },
  {
    title: "JavaScript Algorithms",
    issuer: "freeCodeCamp",
    date: "2024",
    image: CertificateImg,
    credentialId: "FCC-JS-2024-002",
  },
  {
    title: "Frontend Web Development",
    issuer: "Coursera",
    date: "2023",
    image: CertificateImg,
    credentialId: "COURSERA-FE-2023-003",
  },
  {
    title: "Git & GitHub Essentials",
    issuer: "GitHub",
    date: "2023",
    image: CertificateImg,
    credentialId: "GITHUB-GIT-2023-004",
  },
];

export const education = [
  {
    degree:
      "Bachelor of Science in Computer Science and Information Technology",
    school: "Amrit Campus",
    period: "2022 - Present",
    location: "Kathmandu, Nepal",
    description:
      "Built strong technical skills in algorithms, data structures, and database management system, computer networks, security systems and many more through hands-on projects and collaboration.",
    cgpa: "soon...",
    color: "emerald",
  },
  {
    degree: "Intermediate - PCBM",
    school: "Kamana Int'l College",
    period: "2020 - 2022",
    location: "Kathmandu,Nepal",
    description:
      "Focused on academic growth, discipline, and developing a strong foundation for future higher education.",
    cgpa: "3.32/4.0",
    color: "blue",
  },
];
