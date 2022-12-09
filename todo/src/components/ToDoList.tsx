import React from 'react';
import styles from '../style/ToDoList.module.css';
import {ModeType, StatusType, ToDoType} from "../type/ToDoType";
import ToDoListItem from "./ToDoListItem";

interface propsType {
  mode: ModeType,
  list: ToDoType[],
  deleteToDo: (id: number) => void,
  checkToDo: (id: number, status: StatusType) => void
}

export default function ToDoList(props: propsType) {
  return (
    <main className={styles.main}>
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


