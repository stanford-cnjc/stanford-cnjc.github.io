import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Jumbotron } from 'reactstrap';

import Intro from '../Intro/Intro';
import SessionsList from '../SessionsList/SessionsList';

import { wrapInContainer } from '../utils';

import './Home.css';

export default function Home() {
  const cnjcAnnouncement = (
    <Jumbotron className="cnjcx-bg">
      <h1>CNJCx: Practical Python</h1>
      <p className="lead">
        From August 13 - September 17, we'll be running our first mini-series!
      </p>
      <p>Participants will learn computing and programming skills including:</p>
      <ul>
        <li>Setting up a development workflow</li>
        <li>Managing Python environments</li>
        <li>Working on remote servers</li>
        <li>
          Using <code>git</code> for version control
        </li>
        <li>Python best practices</li>
      </ul>
      <hr />
      <p>
        Use the search field below to sort for the upcoming CNJCx sessions.
        CNJCx will have a light blue tag.
      </p>
      <Link to="/CNJCx">
        <Button>More info about CNJCx</Button>
      </Link>
    </Jumbotron>
  );

  return (
    <>
      <Intro />
      <br />
      {wrapInContainer(cnjcAnnouncement)}
      <br />
      <SessionsList />
    </>
  );
}
