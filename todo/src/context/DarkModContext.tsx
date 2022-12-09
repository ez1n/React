import React, {createContext, useState} from "react";

export type darkModeType = {
  darkMode: boolean,
  toggleDarkMode: () => void
};

const initialDarkMode: darkModeType = {
  darkMode: false,
  toggleDarkMode: () => {
    initialDarkMode.darkMode = !initialDarkMode.darkMode
  }
}

export const DarkModeContext = createContext(initialDarkMode);

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(prev => !prev);
  return (
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  )
}