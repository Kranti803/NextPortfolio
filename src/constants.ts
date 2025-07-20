import { Smartphone, Globe } from "lucide-react";
import ResponsiveDesign from "@/assets/responsive_web_design.png";
import ReactCertificate from "@/assets/reactCertificate.jpg";
import Ecommerce from "@/assets/ecommerce.png";
import Blog from "@/assets/blog.png";
import Movie from "@/assets/movie.png";




import HTML from "./assets/html.png";
import CSS from "./assets/css.png";
import JS from "./assets/js.png";
import REACT from "./assets/react.png";
import NODE from "./assets/node.png";
import MONGODB from "./assets/mongodb.png";
import EXPRESS from "./assets/express.png";
import REDUX from "./assets/redux.png";
import TAILWIND from "./assets/tailwind.png";
import GIT from "./assets/git.png";
import GITHUB from "./assets/github.png";
import SASS from "./assets/sass.png";
import FIREBASE from "./assets/firebase.png";
import CPP from "./assets/c++.png";
import NextJS from "./assets/nextjs.png";
import TYPESCRIPT from "./assets/typescript.png";

export const skills1 = [
    {
        id: 1,
        name: "HTML",
        imageSrc: HTML
    },
    {
        id: 2,
        name: "CSS",
        imageSrc: CSS
    },
    {
        id: 3,
        name: "Javascript",
        imageSrc: JS
    },
    {
        id: 4,
        name: "React JS",
        imageSrc: REACT
    },
    {
        id: 5,
        name: "Node JS",
        imageSrc: NODE
    },
    {
        id: 6,
        name: "MongoDB",
        imageSrc: MONGODB
    },
    {
        id: 7,
        name: "Express JS",
        imageSrc: EXPRESS
    },
    {
        id: 8,
        name: "Redux Toolkit",
        imageSrc: REDUX
    },
    {
        id: 9,
        name: "Tailwind Css",
        imageSrc: TAILWIND
    },
    {
        id: 10,
        name: "Git",
        imageSrc: GIT
    },
    {
        id: 11,
        name: "Github",
        imageSrc: GITHUB
    },
    {
        id: 12,
        name: "Sass",
        imageSrc: SASS
    },
    {
        id: 13,
        name: "Firebase",
        imageSrc: FIREBASE
    },
    {
        id: 14,
        name: "C++",
        imageSrc: CPP
    },
    {
        id: 15,
        name: "Next JS",
        imageSrc: NextJS
    },
    {
        id: 16,
        name: "Typescript",
        imageSrc: TYPESCRIPT
    },


];

export const navLinks = [
  "home",
  "about",
  "skills",
  "projects",
  "education",
  "certificates",
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
    tech: ["React", "Node.js", "Tailwind CSS", "Express.js", "MongoDB"],
    image: Blog,
    github: "https://github.com/Kranti803/myblog--Frontend",
    demo: "https://myblog-frontend-rouge.vercel.app/",
  },
  {
    title: "MovieVerse",
    description:
      "A React-based movies and shows discovery app using TMDb API. Allows users to browse trending movies, view detailed info, and search content.User can watch movies and shows in real time,with infinite scrolling feature.",
    tech: ["React", "Sass", "API-Integration", "Axios"],
    image: Movie,
    github: "https://github.com/Kranti803/movieWebApp",
    demo: "https://movie-web-app-gamma.vercel.app/",
  },
];

export const certificates = [
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2025",
    image: ResponsiveDesign,
    
  },
  {
     title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "2025",
    image: ReactCertificate,
  }
 
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


