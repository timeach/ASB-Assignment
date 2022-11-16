import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { RegisterCard } from './features/registerCard/RegisterCard';
import { Menu } from './features/menu/Menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter /> */}
        {/* <RegisterCard/> */}
        <Menu />

      </header>
    </div>
  );
}

export default App;
