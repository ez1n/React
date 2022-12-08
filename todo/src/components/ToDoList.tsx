import React from 'react';
import styles from '../style/ToDoList.module.css';
import { BsFillTrashFill } from 'react-icons/bs';

export default function ToDoList() {
  const todoLists = [
    { id: 1, name: '할일1' },
    { id: 2, name: '할일2' },
    { id: 3, name: '할일3' },
  ]
  return (
    <main className={styles.main}>
      {todoLists.map(item => (
        <li className={styles.list} key={item.id}>
          <div className={styles.item}>
            <input className={styles.input} type="checkbox" name="" id={item.name + item.id} />
            <label className={styles.input} htmlFor={item.name + item.id}>{item.name}</label>
          </div>

          <button className={styles.deleteButton}>
            <BsFillTrashFill />
          </button>
        </li>
      ))}
    </main>
  );
}

