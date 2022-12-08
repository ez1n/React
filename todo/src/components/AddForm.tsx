import React, { useState } from 'react';
import styles from '../style/AddForm.module.css';

interface propsType {
  addToDo: (data: string) => void
}

export default function AddForm(props: propsType) {
  const [input, setInput] = useState<string>('');

  /** Change value */
  const changeValue = (e: any) => {
    setInput(e.target.value);
  }

  /** Add input */
  const submitInput = (e: any) => {
    e.preventDefault();
    props.addToDo(input);
    setInput('');
  }

  return (
    <form className={styles.form} onSubmit={submitInput}>
      <input className={styles.input} type="text" placeholder='Add To Do' value={input} onChange={changeValue} />
      <button className={styles.button} type="submit">Add</button>
    </form>
  );
}

