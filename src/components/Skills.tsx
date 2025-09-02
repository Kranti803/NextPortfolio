import React from "react";
import { skills1 } from "@/constants";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 py-12 md:min-h-[80vh] flex flex-col gap-10 dark:text-slate-100"
    >
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold lg:text-left dark:text-slate-100 mb-4 text-[#383838]">
            . Technical Skills
          </h2>
          <p className="text-sm sm:text-lg md:text-base leading-relaxed dark:text-slate-100 text-[#666666] lg:text-left">
            Technologies I work with and continuously learning to build amazing
            applications
          </p>
        </AnimatedSection>

        <div className="grid gap-8 grid-cols-2 sm:grid-cols-4 pt-6">
          {skills1.map((item, index) => (
            <AnimatedSection delay={200} key={index}>
              <div
                key={item.id}
                className="rounded-md min-h-[125px] flex flex-col items-center justify-center text-center
                dark:bg-stone-600/30 border dark:border-stone-700 bg-transparent 
                hover:grayscale transition-all duration-300 hover:shadow-md"
              >
                <Image
                  src={item.imageSrc}
                  className="h-[70px] w-[70px]"
                  alt="skills_png"
                />
                <span className="mt-2 text-gray-400">{item.name}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
