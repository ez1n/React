import React, {useContext} from 'react';
import styles from '../style/Header.module.css';
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';
import {ModeType} from "../type/ToDoType";
import {DarkModeContext} from "../context/DarkModContext";
import {theme} from "../common/theme";
import {ModeContext} from "../context/ModeContext";

export default function Header() {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
  const {mode, toggleMode} = useContext(ModeContext);

  const changeMode = (mode: ModeType) => {
    if (toggleMode) {
      toggleMode(mode);
    }
  }

  const changeDarkMode = () => {
    if (toggleDarkMode) {
      toggleDarkMode();
    }
  }

  return (
    <nav className={styles.navbar} style={{backgroundColor: darkMode ? theme.dark.header : theme.light.header}}>
      <button className={styles.icon} onClick={changeDarkMode} style={{color: theme.main}}>
        {darkMode ? <BsFillSunFill/> : <BsFillMoonFill/>}
      </button>

      <span>
        <button
          className={styles.button}
          onClick={() => changeMode('All')}
          style={{
            color: theme.main,
            textDecoration: mode === 'All' ? 'underline' : 'unset'
          }}>
          All
        </button>
        <button
          className={styles.button}
          onClick={() => changeMode('Active')}
          style={{
            color: theme.main,
            textDecoration: mode === 'Active' ? 'underline' : 'unset'
          }}>
          Active
        </button>
        <button
          className={styles.button}
          onClick={() => changeMode('Completed')}
          style={{
            color: theme.main,
            textDecoration: mode === 'Completed' ? 'underline' : 'unset'
          }}>
          Completed
        </button>
      </span>
    </nav>
  );
}

