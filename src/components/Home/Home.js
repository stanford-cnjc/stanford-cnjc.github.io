import React, { Component, Fragment } from 'react';
import Intro from '../Intro/Intro';
import SessionsList from '../SessionsList/SessionsList';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <br />
        <Intro className="left-align" />
        <br />
        <br />
        <SessionsList />
      </Fragment>
    );
  }
}

export default Home;
