import React, {useContext} from 'react';
import styles from '../style/Header.module.css';
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';
import {ModeType} from "../type/ToDoType";
import {DarkModeContext} from "../context/DarkModContext";
import {theme} from "../common/theme";

interface propsType {
  changeMode: (mode: ModeType) => void
}

export default function Header(props: propsType) {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

  const changeMode = (mode: ModeType) => {
    props.changeMode(mode);
  }

  const changeDarkMode = () => {
    toggleDarkMode();
  }

  return (
    <nav className={styles.navbar} style={{backgroundColor: darkMode ? theme.dark.header : theme.light.header}}>
      <button className={styles.icon} onClick={changeDarkMode} style={{color: theme.main}}>
        {darkMode ? <BsFillSunFill/> : <BsFillMoonFill/>}
      </button>

      <span>
        <button className={styles.button} onClick={() => changeMode('All')} style={{color: theme.main}}>All</button>
        <button className={styles.button} onClick={() => changeMode('Active')} style={{color: theme.main}}>Active</button>
        <button className={styles.button} onClick={() => changeMode('Completed')} style={{color: theme.main}}>Completed</button>
      </span>
    </nav>
  );
}

