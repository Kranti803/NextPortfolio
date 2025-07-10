import React from "react";
import { skills } from "@/constants";
import { Code, Server, Globe, Lightbulb } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

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
    </section>
  );
};

export default Skills;
