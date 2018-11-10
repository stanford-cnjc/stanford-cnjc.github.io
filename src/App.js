import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import MenuBar from './components/MenuBar/MenuBar';
import Discussions from './components/Discussions/Discussions';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={MenuBar} />
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Discussions" component={Discussions} />
        </div>
      </Router>
    );
  }
}

export default App;
