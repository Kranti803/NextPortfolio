"use client";
import React, { useState, useEffect, useRef } from "react";
// import SplashScreen from "./components/SplashScreen";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Server,
  Database,
  Globe,
  User,
  Briefcase,
  GraduationCap,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  MapPin,
  Calendar,
  Sun,
  Moon,
  Smartphone,
  Monitor,
  Zap,
  Shield,
  Award,
  BookOpen,
  Download,
  Coffee,
  Target,
  Lightbulb,
} from "lucide-react";

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isIntersecting] as const;
};

// Animation wrapper component
const AnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = "", delay = 0 }) => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{
        transitionDelay: isIntersecting ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "services",
        "projects",
        "certificates",
        "education",
        "contact",
      ];
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollY >= offsetTop - 100 &&
            scrollY < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = {
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

  const services = [
    {
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces using modern frameworks like React, Vue.js, and cutting-edge CSS technologies.",
      icon: Monitor,
      color: "emerald",
    },
    {
      title: "Backend Development",
      description:
        "Building robust server-side applications and APIs using Node.js, Python, and database management systems.",
      icon: Server,
      color: "blue",
    },
  ];

  const projects = [
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

  const certificates = [
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

  const education = [
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

  const handleSplashComplete = () => {
    setIsLoading(false);
  };

//   // Show splash screen while loading
//   if (isLoading) {
//     return <SplashScreen onComplete={handleSplashComplete} duration={3000} />;
//   }

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              {/* Minimal Logo */}
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">K</span>
                </div>
              </div>
              {/* Name */}
              <div className="font-bold text-xl text-gray-900 dark:text-white transition-colors duration-300">
                Kranti Kumar
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                "home",
                "about",
                "skills",
                "services",
                "projects",
                "certificates",
                "education",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium transition-colors duration-300 ${
                    activeSection === section
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                  }`}
                >
                  {section}
                </button>
              ))}

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors duration-300">
              {[
                "home",
                "about",
                "skills",
                "services",
                "projects",
                "certificates",
                "education",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800 capitalize transition-all duration-300"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - New Layout */}
      {/* <section
        id="home"
        className="pt-16 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center min-h-screen py-12">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    Kranti Kumar
                  </span>
                </h1>

                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                  Full Stack Developer
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                  A passionate computer science graduate eager to create
                  innovative web solutions. I love building user-friendly
                  applications and learning new technologies every day.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="inline-flex items-center justify-center px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  View My Projects
                  <ArrowRight size={18} className="ml-2" />
                </button>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  <Download size={18} className="mr-2" />
                  Download CV
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center pb-8">
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-gray-400 dark:text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section> */}

      {/* About Section */}
      {/* <section
        id="about"
        className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-6">
                About Me
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a recent computer science graduate with a passion for
                creating digital solutions that make a difference. My journey in
                programming started during college, and I've been fascinated by
                the endless possibilities of technology ever since.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I believe in writing clean, efficient code and creating user
                experiences that are both functional and delightful. I'm always
                eager to learn new technologies and take on challenging projects
                that push my boundaries.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <MapPin
                    size={16}
                    className="text-emerald-600 dark:text-emerald-400"
                  />
                  <span>Delhi, India</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Calendar
                    size={16}
                    className="text-emerald-600 dark:text-emerald-400"
                  />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200} className="lg:text-right">
              <div className="inline-block bg-gradient-to-br from-emerald-500 to-blue-500 p-8 rounded-2xl">
                <User size={120} className="text-white" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section> */}

      {/* Skills Section */}
      {/* <section
        id="skills"
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technologies I work with and continuously learning to build
              amazing applications
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection delay={100}>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Code
                    className="text-emerald-600 dark:text-emerald-400"
                    size={24}
                  />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Frontend
                  </h3>
                </div>
                <div className="space-y-2">
                  {skills.frontend.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Server
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Backend
                  </h3>
                </div>
                <div className="space-y-2">
                  {skills.backend.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Globe
                    className="text-purple-600 dark:text-purple-400"
                    size={24}
                  />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Tools
                  </h3>
                </div>
                <div className="space-y-2">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb
                    className="text-orange-600 dark:text-orange-400"
                    size={24}
                  />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Learning
                  </h3>
                </div>
                <div className="space-y-2">
                  {skills.learning.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      {/* <section
        id="services"
        className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
              What I Can Do
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Services I can provide as a fresh graduate ready to contribute to
              your team
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const colorClasses = {
                emerald:
                  "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30",
                blue: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30",
              };

              return (
                <AnimatedSection key={index} delay={index * 150}>
                  <div className="bg-white dark:bg-gray-900 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`p-4 rounded-lg ${
                          colorClasses[
                            service.color as keyof typeof colorClasses
                          ]
                        }`}
                      >
                        <IconComponent size={32} />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Projects Section */}
      {/* <section
        id="projects"
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Learning Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Projects I've built while learning and exploring different
              technologies
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 group">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-600 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Certificates Section */}
      {/* <section
        id="certificates"
        className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Certifications
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Online courses and certifications that have enhanced my skills
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white dark:bg-gray-900 rounded-xl hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 group">
                  <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-600 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg">
                        <Award
                          className="text-emerald-600 dark:text-emerald-400"
                          size={16}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          {cert.title}
                        </h3>
                        <p className="text-emerald-600 dark:text-emerald-400 font-medium text-xs">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      <span>Issued: {cert.date}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Education Section */}
      <section
        id="education"
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Education & Learning
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My academic journey and continuous learning path
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {education.map((edu, index) => {
              const colorClasses = {
                emerald: "bg-emerald-600 dark:bg-emerald-500",
                blue: "bg-blue-600 dark:bg-blue-500",
              };

              return (
                <AnimatedSection key={index} delay={index * 150}>
                  <div className="relative">
                    <div className="flex items-start gap-6">
                      <div
                        className={`flex-shrink-0 w-12 h-12 ${
                          colorClasses[edu.color as keyof typeof colorClasses]
                        } rounded-full flex items-center justify-center shadow-md`}
                      >
                        {edu.degree.includes("Online") ? (
                          <Award size={20} className="text-white" />
                        ) : (
                          <GraduationCap size={20} className="text-white" />
                        )}
                      </div>

                      <div className="flex-1 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                              {edu.degree}
                            </h3>
                            <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                              {edu.school}
                            </p>
                          </div>
                          <div className="text-right mt-2 md:mt-0">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {edu.period}
                            </span>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {edu.location}
                            </p>
                          </div>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          {edu.description}
                        </p>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2"
                              >
                                <span className="text-emerald-600 dark:text-emerald-400 mt-1">
                                  •
                                </span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section
        id="contact"
        className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Let's Connect
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm actively looking for entry-level opportunities and exciting
              projects to work on
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Ready to contribute
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                As a fresh graduate, I'm eager to bring my passion for coding
                and fresh perspective to your team. Let's discuss how I can
                contribute to your next project.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg">
                    <Mail
                      className="text-emerald-600 dark:text-emerald-400"
                      size={20}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Email
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      kranti.kumar@email.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg">
                    <Linkedin
                      className="text-emerald-600 dark:text-emerald-400"
                      size={20}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      LinkedIn
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      linkedin.com/in/krantikumar
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg">
                    <Github
                      className="text-emerald-600 dark:text-emerald-400"
                      size={20}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      GitHub
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      github.com/krantikumar
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="Tell me about the opportunity..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-white dark:bg-gray-900 py-12 transition-colors duration-300 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2024 Kranti Kumar. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </footer> */}
    </>
  );
}

export default App;
