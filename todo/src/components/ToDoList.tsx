import React, {useContext} from 'react';
import styles from '../style/ToDoList.module.css';
import {StatusType, ToDoType} from "../type/ToDoType";
import ToDoListItem from "./ToDoListItem";
import {DarkModeContext} from "../context/DarkModContext";
import {theme} from "../common/theme";
import {ModeContext} from "../context/ModeContext";

interface propsType {
  list: ToDoType[],
  deleteToDo: (id: number) => void,
  checkToDo: (id: number, status: StatusType) => void
}

export default function ToDoList(props: propsType) {
  const {darkMode,} = useContext(DarkModeContext);
  const {mode,} = useContext(ModeContext);

  return (
    <main className={styles.main} style={{backgroundColor: darkMode ? theme.dark.background : theme.light.background}}>
      {props.list.map((item: ToDoType) => {
          switch (mode) {
            case "All":
              return <ToDoListItem key={item.id} item={item} deleteToDo={props.deleteToDo} checkToDo={props.checkToDo}/>
            default:
              return (
                item.status === mode &&
                <ToDoListItem key={item.id} item={item} deleteToDo={props.deleteToDo} checkToDo={props.checkToDo}/>
              )
          }
        }
      )}
    </main>
  );
}


