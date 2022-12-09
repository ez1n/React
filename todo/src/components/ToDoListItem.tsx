import React, {useContext} from 'react';
import styles from '../style/ToDoList.module.css';
import {StatusType, ToDoType} from "../type/ToDoType";
import {BsFillTrashFill} from 'react-icons/bs';
import {DarkModeContext} from "../context/DarkModContext";
import {theme} from "../common/theme";

interface propsType {
  item: ToDoType,
  deleteToDo: (id: number) => void,
  checkToDo: (id: number, status: StatusType) => void,
}

export default function ToDoListItem(props: propsType) {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

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
          checked={props.item.status === "Completed"}
          id={props.item.id.toString()}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeStatus(e, props.item.id)}/>
        <label
          className={`${styles.input} ${props.item.status === 'Completed' && styles.completed}`}
          htmlFor={props.item.id.toString()}
          style={{color: props.item.status === 'Completed' ? 'gray' : darkMode ? theme.dark.font : theme.light.font}}
        >
          {props.item.name}
        </label>
      </div>

      <button className={styles.deleteButton} onClick={() => deleteToDo(props.item.id)} style={{color: darkMode ? theme.dark.font : theme.light.font}}>
        <BsFillTrashFill/>
      </button>
    </li>
  );
}


