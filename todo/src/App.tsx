import React from 'react';
import './style/App.css';
import Header from './components/Header';
import AddInputForm from './components/AddInputForm';

function App() {
  return (
    <div className="app">
      <Header />
      <h1>todo list</h1>
      <AddInputForm />
    </div>
  );
}

export default App;
