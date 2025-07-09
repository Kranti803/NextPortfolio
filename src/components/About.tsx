import React from "react";
import { User, MapPin, Calendar } from "lucide-react";
const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-6">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a recent computer science graduate with a passion for creating
              digital solutions that make a difference. My journey in
              programming started during college, and I've been fascinated by
              the endless possibilities of technology ever since.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I believe in writing clean, efficient code and creating user
              experiences that are both functional and delightful. I'm always
              eager to learn new technologies and take on challenging projects
              that push my boundaries.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <MapPin
                  size={16}
                  className="text-emerald-600 dark:text-emerald-400"
                />
                <span>Delhi, India</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Calendar
                  size={16}
                  className="text-emerald-600 dark:text-emerald-400"
                />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
          <div className="lg:text-right">
            <div className="inline-block bg-gradient-to-br from-emerald-500 to-blue-500 p-8 rounded-2xl">
              <User size={120} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
