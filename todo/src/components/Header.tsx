import React from 'react';
import styles from '../style/Header.module.css';
import { BsFillSunFill } from 'react-icons/bs';

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <button className={styles.icon}>
        <BsFillSunFill />
      </button>

      <span>
        <button className={styles.button}>All</button>
        <button className={styles.button}>Active</button>
        <button className={styles.button}>Completed</button>
      </span>
    </nav>
  );
}

