import React from 'react';
import styles from '../style/AddForm.module.css';

export default function AddForm() {
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder='Add To Do' />
      <button className={styles.button} type="submit">Add</button>
    </form>
  );
}

