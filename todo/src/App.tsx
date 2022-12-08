import React, {useState} from 'react';
import './style/App.css';
import {ToDoType} from "./type/ToDoType";
import Header from './components/Header';
import AddForm from './components/AddForm';
import ToDoList from './components/ToDoList';

function App() {
  const [list, setList] = useState<ToDoType[]>([]);

  const addToDo = (data: string) => {
    setList(prev => [...prev, {id: Date.now(), name: data}]);
  }

  const deleteToDo = (num: number) => {
    setList(prev => prev.filter((item: ToDoType, index: number) => num !== index))
  }

  return (
    <div className="app">
      <Header/>
      <ToDoList list={list} deleteToDo={deleteToDo}/>
      <AddForm addToDo={addToDo}/>
    </div>
  );
}

export default App;