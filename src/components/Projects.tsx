import React from "react";
import { projects } from "@/constants";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Learning Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Projects I've built while learning and exploring different
            technologies
          </p>
        </AnimatedSection>

        {/* Projects List */}
        {projects.map((item, index) => (
          <AnimatedSection
            key={index}
            delay={index * 100}
            className=" bg-gray-50 hover:shadow-lg dark:bg-transparent transition-all duration-300 dark:border dark:border-gray-500 p-4 rounded-md flex flex-col md:flex-row even:md:flex-row-reverse items-center gap-8 mb-12 dark:text-white"
          >
            {/* Image */}
            <div className="w-full md:w-1/2 relative overflow-hidden">
              <Image
                src={item.image}
                alt="project preview"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-md grayscale-0 hover:grayscale transition-all duration-300"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 flex flex-col gap-4 ">
              <h2 className="text-gray-600 dark:text-gray-400text-xl md:text-2xl font-semibold">
                {item.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 ">{item.description}</p>
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                TechStack:
                {item.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-secondary-color"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-6 mt-2">
                <Link href={item.github} target="_blank">
                  <Github size={25} color="#CC9544" />
                </Link>
                <Link href={item.demo} target="_blank">
                  <ExternalLink size={25} color="#CC9544" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Projects;
