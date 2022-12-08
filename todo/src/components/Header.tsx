import React from 'react';
import styles from '../style/Header.module.css';
import { BsFillSunFill } from 'react-icons/bs';
import {ModeType} from "../type/ToDoType";

interface propsType {
  changeMode: (mode: ModeType) => void
}

export default function Header(props: propsType) {
  const changeMode = (mode: ModeType) => {
    props.changeMode(mode);
  }

  return (
    <nav className={styles.navbar}>
      <button className={styles.icon}>
        <BsFillSunFill />
      </button>

      <span>
        <button className={styles.button} onClick={() => changeMode('All')}>All</button>
        <button className={styles.button} onClick={() => changeMode('Active')}>Active</button>
        <button className={styles.button} onClick={() => changeMode('Completed')}>Completed</button>
      </span>
    </nav>
  );
}

