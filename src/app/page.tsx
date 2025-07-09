"use client";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import SplashScreen from "@/components/SplashScreen";
import { motion } from "framer-motion";
import { useTheme } from "@/context/themeContext";

export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 font-inter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0 }}
    >
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Services />
      <Contact />
    </motion.div>
  );
}
