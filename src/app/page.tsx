import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

import { ToastContainer } from "react-toastify";
import Qualifications from "@/components/Qualification";

export default function Home() {
  return (
    <main className=" rounded-md bg-white dark:bg-transparent">
      <ToastContainer />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Qualifications />
      <Contact />
    </main>
  );
}
