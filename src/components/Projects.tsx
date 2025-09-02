"use client";
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
      className="px-6 py-12 md:min-h-[80vh] flex flex-col gap-10"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#383838] dark:text-slate-100 mb-4 lg:text-right">
            . Projects
          </h2>
          <p className="text-sm sm:text-lg md:text-base leading-relaxed text-[#666666] dark:text-slate-100 lg:text-right">
            Projects I've built while learning and exploring different
            technologies
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((item, index) => (
            <AnimatedSection
              key={index}
              delay={index * 100}
              className="hover:shadow-md dark:shadow-none dark:bg-stone-600/30 p-2 md:p-4 border dark:border-stone-700 rounded-md overflow-hidden flex flex-col hover:scale-90 transition-transform duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-md"
              />

              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-lg md:text-xl font-semibold text-[#373737] dark:text-slate-100">
                  {item.title}
                </h2>
                <p className="text-sm text-[#666666] dark:text-slate-200">{item.description}</p>

                <div className="flex flex-wrap gap-1 text-xs text-gray-300 mt-2">
                  {item.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded dark:bg-stone-700/60 text-[#666666] dark:text-slate-100 border dark:border-stone-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-2">
                  <Link href={item.github} target="_blank">
                    <Github size={20}/>
                  </Link>
                  <Link href={item.demo} target="_blank">
                    <ExternalLink size={20}/>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
