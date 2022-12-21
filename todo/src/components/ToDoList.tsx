import React, { useContext } from 'react';
import styles from '../style/ToDoList.module.css';
import { StatusType, ToDoType } from "../type/ToDoType";
import ToDoListItem from "./ToDoListItem";
import { ModeContext } from "../context/ModeContext";

interface propsType {
  list: ToDoType[],
  deleteToDo: (id: number, index: number) => void,
  checkToDo: (id: number, status: StatusType) => void
}

export default function ToDoList(props: propsType) {
  const { mode, } = useContext(ModeContext);

  return (
    <main className={styles.main}>
      {props.list.map((item, index) => {
        switch (mode) {
          case "All":
            return <ToDoListItem key={item.id} index={index} item={item} deleteToDo={props.deleteToDo} checkToDo={props.checkToDo} />
          default:
            return (
              item.status === mode &&
              <ToDoListItem key={item.id} index={index} item={item} deleteToDo={props.deleteToDo} checkToDo={props.checkToDo} />
            )
        }
      }
      )}
    </main>
  );
}


