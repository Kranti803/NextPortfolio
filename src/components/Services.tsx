'use client';
import React from "react";
import { services } from "@/constants";

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
            What I Can Do
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Services I can provide as a fresh graduate ready to contribute to
            your team
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colorClasses = {
              emerald:
                "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30",
              blue: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30",
            };

            return (
              <div key={index}>
                <div className="bg-white dark:bg-gray-900 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-4 rounded-lg ${
                        colorClasses[service.color as keyof typeof colorClasses]
                      }`}
                    >
                      <IconComponent size={32} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
