import React, {useContext} from 'react';
import styles from '../style/ToDoList.module.css';
import {StatusType, ToDoType} from "../type/ToDoType";
import {BsFillTrashFill} from 'react-icons/bs';
import {DarkModeContext} from "../context/DarkModContext";
import {theme} from "../common/theme";

interface propsType {
  item: ToDoType,
  index: number,
  deleteToDo: (id: number, index: number) => void,
  checkToDo: (id: number, status: StatusType) => void,
}

export default function ToDoListItem(props: propsType) {
  const {darkMode,} = useContext(DarkModeContext);

  const deleteToDo = () => {
    props.deleteToDo(props.item.id, props.index);
  }

  const changeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const todo = localStorage.getItem('todo');
    if (todo) {
      const newTodo = JSON.parse(todo).map((item: ToDoType) => {
        if (item.id === props.item.id) {
          return {...item, status: e.target.checked ? 'Completed' : 'Active'}
        }
        return item
      });
      localStorage.setItem('todo', JSON.stringify(newTodo));
    }
    props.checkToDo(props.item.id, e.target.checked ? 'Completed' : 'Active');
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
          onChange={changeStatus}/>
        <label
          className={`${styles.input} ${props.item.status === 'Completed' && styles.completed}`}
          htmlFor={props.item.id.toString()}
          style={{color: props.item.status === 'Completed' ? 'gray' : darkMode ? theme.dark.font : theme.light.font}}
        >
          {props.item.name}
        </label>
      </div>

      <button className={styles.deleteButton} onClick={deleteToDo}
              style={{color: darkMode ? theme.dark.font : theme.light.font}}>
        <BsFillTrashFill/>
      </button>
    </li>
  );
}


