import React from 'react';
import styles from '../style/ToDoList.module.css';
import {StatusType, ToDoType} from "../type/ToDoType";
import {BsFillTrashFill} from 'react-icons/bs';

interface propsType {
  item: ToDoType,
  deleteToDo: (id: number) => void,
  checkToDo: (id: number, status: StatusType) => void,
}

export default function ToDoListItem(props: propsType) {
  const deleteToDo = (id: number) => {
    props.deleteToDo(id);
  }

  const changeStatus = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    props.checkToDo(id, e.target.checked ? 'Completed' : 'Active');
  }

  return (
    <li className={styles.list}>
      <div className={styles.item}>
        <input
          className={styles.input}
          type="checkbox"
          name="status"
          id={props.item.id.toString()}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeStatus(e, props.item.id)}/>
        <label
          className={`${styles.input} ${props.item.status === 'Completed' && styles.completed}`}
          htmlFor={props.item.id.toString()}
        >
          {props.item.name}
        </label>
      </div>

      <button className={styles.deleteButton} onClick={() => deleteToDo(props.item.id)}>
        <BsFillTrashFill/>
      </button>
    </li>
  );
}


