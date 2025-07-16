import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  ArrowRight,
  Download,
} from "lucide-react";
import Link from "next/link";
const Hero = () => {
  return (
    <section
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
                A Full Stack Developer
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                A passionate computer science student eager to create innovative
                web solutions. I love building user-friendly applications and
                learning new technologies every day.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"#projects"}>
                <button className="inline-flex items-center justify-center px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                  View Projects
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </Link>

              <Link href={"/resume.pdf"} download={true}>
                <button className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
                  <Download size={18} className="mr-2" />
                  Download CV
                </button>
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="https://github.com/Kranti803"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/kranti-kumar-671762223/"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="mailto:krantikumar803@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
              >
                <Mail size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center pb-8">
          <button className="animate-bounce text-gray-400 dark:text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
