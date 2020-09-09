import React from 'react';
import './App.css';
import Header from './Components/Main/Header';
import Home from './Components/Main/Home';
import Contact from './Components/Main/Contact';
import About from './Components/Main/About';
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
      <div>
        <Router>
        <Header/>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/about" component={About}></Route>
        </Router>
      </div>
    );
}

export default App;
