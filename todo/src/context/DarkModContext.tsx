import React, {createContext, useState} from "react";

interface darkModeType {
  darkMode: boolean,
  toggleDarkMode: (() => void) | null
}

const initialDarkMode: darkModeType = {
  darkMode: false,
  toggleDarkMode: null
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