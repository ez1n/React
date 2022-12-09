import React, {useContext} from 'react';
import styles from '../style/ToDoList.module.css';
import {ModeType, StatusType, ToDoType} from "../type/ToDoType";
import ToDoListItem from "./ToDoListItem";
import {DarkModeContext} from "../context/DarkModContext";
import {theme} from "../common/theme";

interface propsType {
  mode: ModeType,
  list: ToDoType[],
  deleteToDo: (id: number) => void,
  checkToDo: (id: number, status: StatusType) => void
}

export default function ToDoList(props: propsType) {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

  return (
    <main className={styles.main} style={{backgroundColor: darkMode ? theme.dark.background : theme.light.background}}>
      {props.list.map((item: ToDoType) => {
          switch (props.mode) {
            case "All":
              return (
                <ToDoListItem key={item.id} item={item} deleteToDo={props.deleteToDo} checkToDo={props.checkToDo}/>
              )
            default:
              return (
                item.status === props.mode &&
                <ToDoListItem key={item.id} item={item} deleteToDo={props.deleteToDo} checkToDo={props.checkToDo}/>
              )
          }
        }
      )}
    </main>
  );
}


