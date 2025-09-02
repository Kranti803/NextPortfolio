import React from "react";
import Image from "next/image";
import { BsDownload } from "react-icons/bs";
import Profile from "../assets/avatarr.png";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 py-12 md:min-h-[80vh] flex flex-col items-center justify-center gap-10"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="flex justify-center lg:justify-start">
          <Image
            src={Profile}
            loading="lazy"
            alt="profile_image"
            className="rounded-full p-4 dark:bg-stone-600/30 border dark:border-stone-700 border-glow hover:grayscale transition-all duration-300 h-[220px] xs:h-[300px] md:h-[400px] w-[220px] xs:w-[300px] md:w-[400px] object-cover bg-[#d4d4d6]"
          />
        </div>

        <div className="text-center lg:text-left max-w-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary-color text-[#383838] dark:text-slate-100 mb-4">
            . About Me
          </h3>
          <p className="text-sm sm:text-lg md:text-base leading-relaxed text-[#666666] dark:text-slate-100 mb-6">
            As a dedicated and self-motivated individual, I am a full-stack
            developer with a passion for creating elegant and efficient
            solutions. I have a strong background in computer science and am a
            self-taught developer always eager to expand my skillset. My
            technical expertise includes JavaScript, C++, and experience with
            popular web development frameworks and libraries such as React,
            Node.js, and MongoDB. I create seamless and responsive web
            applications, proactively solving problems and optimizing code. I am
            excited to contribute my skills to innovative and impactful
            projects.
          </p>

          <Link
            href={"/resume.pdf"}
            download={true}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-md dark:bg-stone-600/30 dark:border-stone-700 border text-slate-100 bg-[#141414] font-medium"
          >
            Resume <BsDownload size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
