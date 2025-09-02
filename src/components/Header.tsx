"use client";
import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { navLinks } from "@/constants";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { ThemeToggler } from "./ThemeToggler";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  return (
    <nav
      className={`my-4 z-50 flex border h-[60px] backdrop-filter backdrop-blur-xl dark:bg-opacity-10 bg-white
        dark:bg-stone-800/40
      dark:border-stone-800/90
        items-center justify-between px-4 sm:px-15 
        ${isMenuOpen ? "rounded-none" : "rounded-md"} 
        sticky top-[2px] left-0`}
    >
      <h2 className="text-xl dark:text-slate-100 text-[#373737]">
        <Link href={"/"}>{"<Kk/>."}</Link>
      </h2>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-x-4 items-center">
        {navLinks.map((section) => (
          <li
            key={section}
            className={`transition-all font-light tracking-wide duration-100 py-2 px-3 rounded-md 
              dark:hover:bg-stone-600/30 dark:hover:border-stone-700 capitalize
              ${
                activeSection === section
                  ? "dark:bg-stone-600/30 border dark:border-stone-700 bg-[#f0f0f0] border-gray-300"
                  : "border border-transparent"
              }`}
          >
            <Link
              className="text-md dark:text-slate-100 text-[#383838]"
              href={`#${section}`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </Link>
          </li>
        ))}
        <ThemeToggler />
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-2">
        <ThemeToggler />
        <Hamburger
          toggled={isMenuOpen}
          toggle={setIsMenuOpen}
          hideOutline={true}
          rounded
          size={24}
        />
      </div>

      {/* Mobile Navigation */}
      <div
        className={
          isMenuOpen
            ? "bg-white dark:bg-[#212121] text-gray-800 dark:text-slate-100 absolute h-screen top-0 left-0 w-2/3 px-10 py-2 duration-300 ease-in translate-x-[0%]"
            : "bg-white dark:bg-[#212121] text-gray-800 dark:text-slate-100 absolute h-screen top-0 left-0 w-2/3 px-10 py-2 duration-300 ease-in translate-x-[-150%]"
        }
      >
        <h2 className="text-xl font-bold text-gray-800 dark:text-zinc-100">
          <Link href={"/"}>{"<Kk/>."}</Link>
        </h2>
        <ul className="flex flex-col items-center gap-12 text-sm sm:text-lg pt-8">
          {navLinks.map((section) => (
            <li key={section} onClick={() => setIsMenuOpen(false)}>
              <Link
                href={`#${section}`}
                onClick={() => setActiveSection(section)}
                className={`text-gray-700 capitalize dark:text-zinc-100 ${
                  activeSection === section
                    ? "border-b-2 border-stone-700 pb-1"
                    : ""
                }`}
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
