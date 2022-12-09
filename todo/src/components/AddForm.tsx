import React, {useContext, useState} from 'react';
import styles from '../style/AddForm.module.css';
import {DarkModeContext} from "../context/DarkModContext";
import {theme} from "../common/theme";

interface propsType {
  addToDo: (data: string) => void
}

export default function AddForm(props: propsType) {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
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
    <footer className={styles.footer} style={{backgroundColor: darkMode ? theme.dark.header : theme.light.header}}>
      <form className={styles.form} onSubmit={submitInput}>
        <input className={styles.input} type="text" placeholder='Add To Do' value={input} onChange={changeValue}/>
        <button className={styles.button} type="submit" style={{backgroundColor: theme.main, color: theme.button}}>Add
        </button>
      </form>
    </footer>
  );
}

