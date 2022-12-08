import React from 'react';
import {ToDoType} from "../type/ToDoType";
import styles from '../style/ToDoList.module.css';
import { BsFillTrashFill } from 'react-icons/bs';

interface propsType {
  list: ToDoType[],
  deleteToDo: (num: number) => void
}

export default function ToDoList(props: propsType) {
  return (
    <main className={styles.main}>
      {props.list.map((item: ToDoType, index: number) => (
        <li className={styles.list} key={item.id}>
          <div className={styles.item}>
            <input className={styles.input} type="checkbox" name="" id={item.name + item.id} />
            <label className={styles.input} htmlFor={item.name + item.id}>{item.name}</label>
          </div>

          <button className={styles.deleteButton} onClick={() => props.deleteToDo(index)}>
            <BsFillTrashFill />
          </button>
        </li>
      ))}
    </main>
  );
}


