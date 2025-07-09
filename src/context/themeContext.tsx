"use client";
import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";

export interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const useTheme = () => {
  return useContext(ThemeContext);
};

const defaultContext: ThemeContextType = {
  theme: "light",
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  // Load theme on first mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const resolvedTheme =
      savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";

    setTheme(resolvedTheme);
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
    setIsThemeLoaded(true);
  }, []);

  // Whenever the theme changes AFTER theme is loaded
  useEffect(() => {
    if (isThemeLoaded) {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme, isThemeLoaded]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Prevent render until theme loaded to avoid flicker
  if (!isThemeLoaded) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
