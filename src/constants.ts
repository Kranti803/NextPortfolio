import { Smartphone, Globe } from "lucide-react";

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
    "Vue.js",
    "Tailwind CSS",
    "JavaScript",
    "HTML/CSS",
  ],
  backend: [
    "Node.js",
    "Python",
    "Express",
    "Django",
    "REST APIs",
    "GraphQL",
    "MongoDB",
  ],
  tools: ["Git", "VS Code", "Figma", "Docker", "AWS", "Vercel", "Postman"],
  learning: [
    "React Native",
    "TypeScript",
    "Cloud Computing",
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
      "A full-stack e-commerce platform with user authentication, product catalog, and shopping cart functionality.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    tech: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    image:
      "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application with location-based forecasts and interactive data visualization.",
    tech: ["Vue.js", "API Integration", "Chart.js", "CSS3"],
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "#",
    demo: "#",
  },
];

export const certificates = [
  {
    title: "React Developer Certificate",
    issuer: "Meta",
    date: "2024",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400",
    credentialId: "META-REACT-2024-001",
  },
  {
    title: "JavaScript Algorithms",
    issuer: "freeCodeCamp",
    date: "2024",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400",
    credentialId: "FCC-JS-2024-002",
  },
  {
    title: "Frontend Web Development",
    issuer: "Coursera",
    date: "2023",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400",
    credentialId: "COURSERA-FE-2023-003",
  },
  {
    title: "Git & GitHub Essentials",
    issuer: "GitHub",
    date: "2023",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400",
    credentialId: "GITHUB-GIT-2023-004",
  },
];

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Indian Institute of Technology",
    period: "2020 - 2024",
    location: "Delhi, India",
    description:
      "Comprehensive foundation in computer science fundamentals, algorithms, and software development practices.",
    achievements: [
      "CGPA: 8.5/10.0",
      "Member of Coding Club",
      "Participated in Multiple Hackathons",
    ],
    color: "emerald",
  },
  {
    degree: "Online Courses & Certifications",
    school: "Various Platforms",
    period: "2023 - Present",
    location: "Online",
    description:
      "Continuous learning through industry-relevant courses and hands-on projects.",
    achievements: [
      "React Developer Certificate - Meta",
      "JavaScript Algorithms - freeCodeCamp",
      "Frontend Web Development - Coursera",
    ],
    color: "blue",
  },
];
