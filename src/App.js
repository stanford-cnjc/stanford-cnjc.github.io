import React, { Component } from 'react';

// third-party imports (things that were `yarn add`ed)
import { HashRouter as Router, Route } from 'react-router-dom';
import Clipboard from 'clipboard';

// import components from the src/ directory
import Home from './components/Home/Home';
import About from './components/About/About';
import MenuBar from './components/MenuBar/MenuBar';
import PresentationSignup from './components/PresentationSignup/PresentationSignup';
import CNJCx from './components/CNJCx/CNJCx';
import Footer from './components/Footer/Footer';

class App extends Component {
  // in constructor of App, create a new Clipboard object
  constructor(props) {
    super(props);
    new Clipboard('.copy-src');
  }

  // App is just a <Router> object that renders a component based on the current URL
  render() {
    return (
      <Router>
        <div className="App">
          {/* render the MenuBar on all pages (/*) */}
          <Route path="/" component={MenuBar} />

          {/* render the Home component if nothing after "/" in URL */}
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route
            exact
            path="/PresentationSignup"
            component={PresentationSignup}
          />
          <Route exact path="/CNJCx" component={CNJCx} />

          {/* always render the footer last, on all pages */}
          <Route path="/" component={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;
