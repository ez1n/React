import React, {useContext} from 'react';
import styles from '../style/Header.module.css';
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';
import {ModeType} from '../type/ToDoType';
import {DarkModeContext} from '../context/DarkModContext';
import {ModeContext} from '../context/ModeContext';

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
      const root = document.querySelector('#root');
      darkMode ? root?.classList.add('dark') : root?.classList.remove('dark');
    }
  }

  return (
    <nav className={styles.navbar}>
      <button className={styles.icon} onClick={changeDarkMode}>
        {darkMode ? <BsFillSunFill/> : <BsFillMoonFill/>}
      </button>

      <span>
        <button
          className={styles.button}
          onClick={() => changeMode('All')}
          style={{textDecoration: mode === 'All' ? 'underline' : 'unset'}}>
          All
        </button>

        <button
          className={styles.button}
          onClick={() => changeMode('Active')}
          style={{textDecoration: mode === 'Active' ? 'underline' : 'unset'}}>
          Active
        </button>

        <button
          className={styles.button}
          onClick={() => changeMode('Completed')}
          style={{textDecoration: mode === 'Completed' ? 'underline' : 'unset'}}>
          Completed
        </button>
      </span>
    </nav>
  );
}

