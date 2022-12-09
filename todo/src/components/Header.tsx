import React, {useContext} from 'react';
import styles from '../style/Header.module.css';
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';
import {ModeType} from "../type/ToDoType";
import {DarkModeContext} from "../context/DarkModContext";

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
    <nav className={styles.navbar}>
      <button className={styles.icon} onClick={changeDarkMode}>
        {darkMode ? <BsFillSunFill/> : <BsFillMoonFill/>}
      </button>

      <span>
        <button className={styles.button} onClick={() => changeMode('All')}>All</button>
        <button className={styles.button} onClick={() => changeMode('Active')}>Active</button>
        <button className={styles.button} onClick={() => changeMode('Completed')}>Completed</button>
      </span>
    </nav>
  );
}

