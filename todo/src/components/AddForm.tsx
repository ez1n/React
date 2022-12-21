import React, {useContext, useState} from 'react';
import styles from '../style/AddForm.module.css';
import {ToDoType} from "../type/ToDoType";

interface propsType {
  list: ToDoType[],
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
    const todo = localStorage.getItem('todo');
    if (todo) {
      const newTodo = JSON.parse(todo).concat({id: Date.now(), name: input, status: 'Active'});
      localStorage.setItem('todo', JSON.stringify(newTodo));
    } else {
      const newTodo = [{id: Date.now(), name: input, status: 'Active'}];
      localStorage.setItem('todo', JSON.stringify(newTodo));
    }
    setInput('');
  }

  return (
    <footer className={styles.footer}>
      <form className={styles.form} onSubmit={submitInput}>
        <input className={styles.input} type="text" placeholder='Add To Do' value={input} onChange={changeValue} required/>
        <button className={styles.button} type="submit">
          Add
        </button>
      </form>
    </footer>
  );
}

