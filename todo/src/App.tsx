import React from 'react';
import './style/App.css';
import Header from './components/Header';
import AddForm from './components/AddForm';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="app">
      <Header />
      <ToDoList />
      <AddForm />
    </div>
  );
}

export default App;
