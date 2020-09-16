import React from 'react';
import './App.css';
import Header from './Components/Main/Header';
import Home from './Components/Main/Home';
import Contact from './Components/Main/Contact';
import About from './Components/Main/About';
import Register from './Components/Main/Register';
import Task from './Components/Main/Task';
import Hooks from './Components/Main/Hooks';
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
      <div>
        <Router>
        <Header></Header>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/task" component={Task}></Route>
          <Route exact path="/hooks" component={Hooks}></Route>
        </Router>
      </div>
    );
}

export default App;
