import React, { Component, Fragment } from 'react';
import Intro from '../Intro/Intro';
import SessionsList from '../SessionsList/SessionsList';
import Footer from '../Footer/Footer';

class Home extends Component {
  render() {
    return (
      <Fragment>
       <br/>
       <Intro className="left-align"/>
       <br />
       <br />
       <SessionsList />
       <br/>
       <Footer />
       <br />
      </Fragment>
    );
  }
}

export default Home;
