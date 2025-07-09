"use client";
import SplashScreen from "@/components/SplashScreen";
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
  const [isLoading, setIsLoading] = useState(true);

  //on first mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
    setIsThemeLoaded(true);
  }, []);

  //whenever the theme changes
  useEffect(() => {
    if (isThemeLoaded) {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme, isThemeLoaded]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Show splash screen while loading
  // if (isThemeLoaded) {
  //   const handleSplashComplete = () => {
  //     setIsLoading(false);
  //   };
  //   if (isLoading) {
  //     return <SplashScreen onComplete={handleSplashComplete} duration={2000} />;
  //   }
  // }

  if (!isThemeLoaded) return <SplashScreen />;
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
