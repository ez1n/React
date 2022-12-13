import React, { useEffect, useState } from 'react';
import styles from './style/App.module.css';
import { StatusType, ToDoType } from "./type/ToDoType";
import Header from './components/Header';
import AddForm from './components/AddForm';
import ToDoList from './components/ToDoList';
import { DarkModeProvider } from "./context/DarkModContext";
import { ModeProvider } from "./context/ModeContext";

function App() {
  const [list, setList] = useState<ToDoType[]>([]);

  useEffect(() => {
    const todo = localStorage.getItem('todo');
    if (todo) {
      setList(JSON.parse(todo));
    }
  }, [])

  const addToDo = (data: string) => {
    setList(prev => [...prev, { id: Date.now(), name: data, status: 'Active' }]);
  }

  const deleteToDo = (id: number, num: number) => {
    const todo = localStorage.getItem('todo');
    if (todo) {
      const newTodo = JSON.parse(todo).filter((item: string, index: number) => num !== index);
      localStorage.setItem('todo', JSON.stringify(newTodo));
      setList(prev => prev.filter((item: ToDoType) => id !== item.id));
    }
  }

  const checkToDo = (id: number, status: StatusType) => {
    setList(prev => prev.map((item: ToDoType) => item.id === id ? { ...item, status: status } : item));
  }

  return (
    <DarkModeProvider>
      <div className={styles.app}>
        <ModeProvider>
          <Header />
          <ToDoList list={list} deleteToDo={deleteToDo} checkToDo={checkToDo} />
        </ModeProvider>
        <AddForm list={list} addToDo={addToDo} />
      </div>
    </DarkModeProvider>
  );
}

export default App;