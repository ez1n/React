import React, {useContext} from 'react';
import styles from '../style/Header.module.css';
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';
import {ModeType} from "../type/ToDoType";
import {DarkModeContext} from "../context/DarkModContext";
import {theme} from "../common/theme";

interface propsType {
  mode: ModeType,
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
        <button
          className={styles.button}
          onClick={() => changeMode('All')}
          style={{
            color: theme.main,
            textDecoration: props.mode === 'All' ? 'underline' : 'unset'
          }}>
          All
        </button>
        <button
          className={styles.button}
          onClick={() => changeMode('Active')}
          style={{
            color: theme.main,
            textDecoration: props.mode === 'Active' ? 'underline' : 'unset'
          }}>
          Active
        </button>
        <button
          className={styles.button}
          onClick={() => changeMode('Completed')}
          style={{
            color: theme.main,
            textDecoration: props.mode === 'Completed' ? 'underline' : 'unset'
          }}>
          Completed
        </button>
      </span>
    </nav>
  );
}

