import React from "react";
import { Award } from "lucide-react";
import { certificates } from "@/constants";
import Image from "next/image";

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Online courses and certifications that have enhanced my skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div key={index}>
              <div className="bg-white dark:bg-gray-900 rounded-xl hover:shadow-lg h-80 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 group flex flex-col justify-between">
                <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-600 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg">
                      <Award
                        className="text-emerald-600 dark:text-emerald-400"
                        size={16}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium text-xs">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">
                    <span>Issued: {cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
