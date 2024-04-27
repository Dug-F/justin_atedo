"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define a type for the context value
type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

// Create the context with a default value of undefined, and then assert the type
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// Define a type for the props of ThemeProvider
type ThemeProviderProps = {
  children: ReactNode;
};

// ThemeProvider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light"); // default theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // The value provided to the context consumers
  const value = { theme, toggleTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
