import React from "react";
import { GraduationCap, Award } from "lucide-react";
import { education } from "@/constants";
const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Education & Learning
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => {
            const colorClasses = {
              emerald: "bg-emerald-600 dark:bg-emerald-500",
              blue: "bg-blue-600 dark:bg-blue-500",
            };

            return (
              <div key={index}>
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
