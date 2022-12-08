import React from 'react';
import {statusType, ToDoType} from "../type/ToDoType";
import styles from '../style/ToDoList.module.css';
import {BsFillTrashFill} from 'react-icons/bs';

interface propsType {
  list: ToDoType[],
  deleteToDo: (id: number) => void,
  checkToDo: (id: number, status: statusType) => void
}

export default function ToDoList(props: propsType) {
  const deleteToDo = (id: number) => {
    props.deleteToDo(id);
  }

  const changeStatus = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    props.checkToDo(id, e.target.checked ? 'completed' : 'active');
  }

  return (
    <main className={styles.main}>
      {props.list.map((item: ToDoType) => (
        <li className={styles.list} key={item.id}>
          <div className={styles.item}>
            <input
              className={styles.input}
              type="checkbox"
              name="status"
              id={item.id.toString()}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeStatus(e, item.id)}/>
            <label
              className={`${styles.input} ${item.status === 'completed' && styles.completed}`}
              htmlFor={item.id.toString()}
            >
              {item.name}
            </label>
          </div>

          <button className={styles.deleteButton} onClick={() => deleteToDo(item.id)}>
            <BsFillTrashFill/>
          </button>
        </li>
      ))}
    </main>
  );
}


