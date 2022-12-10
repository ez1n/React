import React, {createContext, useState} from "react";
import {ModeType} from "../type/ToDoType";

interface ModeInterface {
  mode: ModeType,
  toggleMode: ((mode: ModeType) => void) | null
}


const initialMode: ModeInterface = {
  mode: 'All',
  toggleMode: null
};

export const ModeContext = createContext(initialMode);

export function ModeProvider({children}: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ModeType>('All');
  const toggleMode = (mode: ModeType) => setMode(mode);
  return (
    <ModeContext.Provider value={{mode, toggleMode}}>
      {children}
    </ModeContext.Provider>
  )
}