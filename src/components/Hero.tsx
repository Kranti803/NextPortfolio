import React from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineSend,
} from "react-icons/ai";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
// import { TypewriterEffect } from "./Client";
import TypewriterComponent from "typewriter-effect";
import Profile from "../assets/avatarr.png";
import Image from "next/image";

const Home = () => {
  return (
    <section className="py-4 rounded-md px-6 md:min-h-[calc(100vh-70px)]  flex flex-col-reverse lg:flex-row items-center justify-between gap-10 ">
      <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left">
        <div>
          <p className="text-xl dark:text-slate-100 text-[#383838]">
            Hello! 👋
          </p>
          <h3 className="text-4xl md:text-6xl font-bold  dark:text-slate-100 text-[#383838]">
            I'm <span>Kranti Kumar</span>
          </h3>
        </div>

        <h4 className="text-sm xs:text-lg md:text-2xl flex items-center justify-center lg:justify-start gap-2 dark:text-slate-100">
          {/* I'm <TypewriterEffect /> */}
          I'm A FullStack Developer
        </h4>

        <p className="text-sm sm:text-lg leading-relaxed text-[#666666] dark:text-slate-100">
          I have a passion for building intuitive, user-friendly interfaces that
          provide an enjoyable and seamless user experience.
        </p>

        <Link
          href="mailto:krantikumar803@gmail.com"
          className="flex items-center w-fit px-3 py-2 gap-x-2 rounded-md dark:bg-stone-600/30 dark:border-stone-700 border border-[#373737] bg-[#141414] text-slate-100"
        >
          Contact me <AiOutlineSend size={18} />
        </Link>

        <div className="flex justify-center lg:justify-start gap-6 text-2xl mt-4">
          <Link
            href="https://www.facebook.com/profile.php?id=100009548415723"
            target="_blank"
          >
            <FaFacebookSquare
              className="dark:hover:bg-stone-600/30 dark:border-stone-700 hover:bg-[#f0f0f0] border-gray-300 border p-2 rounded-md "
              size={50}
            />
          </Link>
          <AiOutlineInstagram
            className="dark:hover:bg-stone-600/30 cursor-pointer border-gray-300 hover:bg-[#f0f0f0] dark:border-stone-700 border p-2 rounded-md "
            size={50}
          />
          <FaLinkedin
            className="dark:hover:bg-stone-600/30 cursor-pointerborder-gray-300 hover:bg-[#f0f0f0]  dark:border-stone-700 border p-2 rounded-md "
            size={50}
          />
          <Link href="https://github.com/Kranti803" target="_blank">
            <AiOutlineGithub
              className="dark:hover:bg-stone-600/30 hover:bg-[#f0f0f0] border-gray-300 dark:border-stone-700 border p-2 rounded-md "
              size={50}
            />
          </Link>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <Image
          src={Profile}
          alt="profile"
          height={200}
          width={200}
          className="rounded-full p-4 dark:bg-stone-600/30  dark:border-stone-700 border border-gray-300  border-glow bg-[#d4d4d6]"
        />
      </div>
    </section>
  );
};

export default Home;
