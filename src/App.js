import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import MenuBar from './components/MenuBar/MenuBar';
import PresentationSignup from './components/PresentationSignup/PresentationSignup';
import Footer from './components/Footer/Footer';
import Clipboard from 'clipboard';

class App extends Component {
  constructor(props) {
    super(props);
    new Clipboard('.copy-src');
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={MenuBar} />
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route
            exact
            path="/PresentationSignup"
            component={PresentationSignup}
          />
          <Route path="/" component={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;
