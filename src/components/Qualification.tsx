"use client";
import React from "react";
import { GraduationCap, School, Award } from "lucide-react";
import { education, certificates } from "@/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const Qualifications = () => {
  const { ref } = useScrollAnimation({});

  return (
    <section
      ref={ref}
      id="education-certificates"
      className="px-6 py-12 md:min-h-[80vh] flex flex-col gap-20 "
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Education Section  */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#383838] dark:text-slate-100 mb-4 lg:text-left">
            . Qualification
          </h2>
          <p className="text-sm sm:text-lg md:text-base leading-relaxed text-[#666666] dark:text-slate-100 lg:text-left">
            My academic journey and continuous learning path
          </p>
        </AnimatedSection>

        <div className="space-y-8">
          {education.map((edu, index) => {
            return (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="relative">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 dark:bg-stone-600/30 rounded-full flex items-center justify-center shadow-md`}
                    >
                      {edu.degree.includes("Intermediate") ? (
                        <School
                          size={20}
                          className="dark:text-slate-100 text-[#383838]"
                        />
                      ) : (
                        <GraduationCap
                          size={20}
                          className="dark:text-slate-100 text-[#383838]"
                        />
                      )}
                    </div>

                    {/* Card */}
                    <div className="flex-1 dark:bg-stone-600/30 border dark:border-stone-700 hover:shadow-md p-6 rounded-md">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-[#373737] dark:text-slate-100 mb-1">
                            {edu.degree}
                          </h3>
                          <p className="font-medium text-[#666666] dark:text-slate-100">
                            {edu.school}
                          </p>
                        </div>
                        <div className="text-right mt-2 md:mt-0">
                          <span className="text-sm text-[#666666] dark:text-slate-200">
                            {edu.period}
                          </span>
                          <p className="text-sm text-[#666666] dark:text-slate-200">
                            {edu.location}
                          </p>
                        </div>
                      </div>

                      <p className="text-[#666666] dark:text-slate-200 mb-4">{edu.description}</p>

                      {edu.cgpa && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border dark:bg-stone-600/30 dark:border-stone-700 bg-[#141414] ">
                          <span className="text-slate-100">CGPA:</span>
                          <span className="text-slate-100 font-bold">
                            {edu.cgpa}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/*  Certificates Section  */}
        <div className="mt-20">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#383838] dark:text-slate-100 lg:text-right mb-4">
              . Certifications
            </h2>
            <p className="text-sm sm:text-lg md:text-base leading-relaxed text-[#666666] dark:text-slate-100 lg:text-right">
              Online courses and certifications that have enhanced my skills.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="dark:bg-stone-600/30 border dark:border-stone-700 rounded-xl hover:grayscale hover:shadow-md transition-all duration-300 h-80 w-80 overflow-hidden group flex flex-col justify-between">
                  <div className="aspect-[4/3] dark:bg-stone-700/50 overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover scale-105 group-hover:scale-90 bg-white transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="dark:bg-stone-600/30 border dark:border-stone-700 p-2 rounded-md">
                        <Award size={16} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-[#373737] dark:text-slate-100 mb-1">
                          {cert.title}
                        </h3>
                        <p className=" text-[#666666] dark:text-slate-200 font-medium text-xs">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    <div className="text-xs text-[#666666] dark:text-slate-300">
                      <span>Issued: {cert.date}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
