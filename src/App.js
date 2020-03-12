import React from 'react';
import './App.css';
import Welcome from './components/Welcome'
import Login from './components/Login'

function App() {
  return (
    <div className="app">
      <Welcome />
      <Login />
    </div>
  );
}

export default App;
