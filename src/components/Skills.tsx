import React from "react";
import { skills1 } from "@/constants";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies I work with and continuously learning to build amazing
            applications
          </p>
        </AnimatedSection>

        <div className="grid gap-8 grid-cols-2 sm:grid-cols-4 pt-6">
          {skills1.map((item) => (
            <AnimatedSection delay={200}>
              <div
                key={item.id}
                className="dark:text-white min-h-[125px] flex flex-col text-center items-center justify-center
           hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 "
              >
                <Image
                  src={item.imageSrc}
                  className=" h-[70px] w-[70px]"
                  alt="skills_png"
                />
                <span className="text-gray-600">{item.name}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
