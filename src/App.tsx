import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Counter } from './features/counter/Counter';
import { RegisterCard } from './features/registerCard/RegisterCard';
import { Menu } from './features/menu/Menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={RegisterCard}/>
          <Route path="/menu" component={Menu} />
        </Switch>
      </BrowserRouter>

      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter /> */}
        {/* <RegisterCard/> */}
        {/* <Menu /> */}

      {/* </header> */}
    </div>
  );
}

export default App;
