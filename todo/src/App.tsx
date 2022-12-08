import React, {useState} from 'react';
import './style/App.css';
import {statusType, ToDoType} from "./type/ToDoType";
import Header from './components/Header';
import AddForm from './components/AddForm';
import ToDoList from './components/ToDoList';

function App() {
  const [list, setList] = useState<ToDoType[]>([]);

  const addToDo = (data: string) => {
    setList(prev => [...prev, {id: Date.now(), name: data, status: 'active'}]);
  }

  const deleteToDo = (id: number) => {
    setList(prev => prev.filter((item: ToDoType) => id !== item.id));
  }

  const checkToDo = (id: number, status: statusType) => {
    setList(prev => prev.map((item: ToDoType) => item.id === id ? {...item, status: status} : item));
    console.log(list)
  }

  return (
    <div className="app">
      <Header/>
      <ToDoList list={list} deleteToDo={deleteToDo} checkToDo={checkToDo}/>
      <AddForm addToDo={addToDo}/>
    </div>
  );
}

export default App;