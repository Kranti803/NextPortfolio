"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  toggletheme: () => void;
}

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggletheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggletheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
