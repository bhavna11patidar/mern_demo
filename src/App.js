import React from 'react';
import './App.css';
import Header from './Components/Main/Header';
import Home from './Components/Main/Home';
import Contact from './Components/Main/Contact';
import About from './Components/Main/About';
import Register from './Components/Main/Register';
import Task from './Components/Main/Task';
import Hooks from './Components/Main/Hooks';
import RegisterWithUseState from './Components/Main/RegisterWithUseState';
import toDoListState from './Components/Main/toDoListState';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CounterComponent1 from './Components/Main/CounterComponent1';
import CounterComponent2 from './Components/Main/CounterComponent2'
function App() {
  return (
      <div>
        <Router>
        <Header title="Header"></Header>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/task" component={Task}></Route>
          <Route exact path="/hooks" component={Hooks}></Route>
          <Route exact path="/register-hooks" component={RegisterWithUseState} />
          <Route exact path="/todo-state" component={toDoListState} />
          <Route exact path="/counter1" component={CounterComponent1} />
          <Route exact path="/counter2" component={CounterComponent2} />
        </Router>
      </div>
    );
}

export default App;
