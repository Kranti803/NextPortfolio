import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 font-inter">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      {/* <Certificates /> */}
      <Education />
      <Contact />
    </div>
  );
}
