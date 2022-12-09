import React, {useState} from 'react';
import './style/App.css';
import {StatusType, ToDoType, ModeType} from "./type/ToDoType";
import Header from './components/Header';
import AddForm from './components/AddForm';
import ToDoList from './components/ToDoList';
import {DarkModeProvider} from "./context/DarkModContext";

function App() {
  const [list, setList] = useState<ToDoType[]>([]);
  const [mode, setMode] = useState<ModeType>('All');

  const changeMode = (mode: ModeType) => {
    setMode(mode);
  }

  const addToDo = (data: string) => {
    setList(prev => [...prev, {id: Date.now(), name: data, status: 'Active'}]);
  }

  const deleteToDo = (id: number) => {
    setList(prev => prev.filter((item: ToDoType) => id !== item.id));
  }

  const checkToDo = (id: number, status: StatusType) => {
    setList(prev => prev.map((item: ToDoType) => item.id === id ? {...item, status: status} : item));
  }

  return (
    <DarkModeProvider>
      <div className="app">
        <Header changeMode={changeMode}/>
        <ToDoList mode={mode} list={list} deleteToDo={deleteToDo} checkToDo={checkToDo}/>
        <AddForm addToDo={addToDo}/>
      </div>
    </DarkModeProvider>
  );
}

export default App;