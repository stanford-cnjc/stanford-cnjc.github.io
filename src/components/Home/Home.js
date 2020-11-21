import React from 'react';
import { Button, Jumbotron } from 'reactstrap';

import Intro from '../Intro/Intro';
import SessionsList from '../SessionsList/SessionsList';

import { wrapInContainer } from '../utils';

import './Home.css';

export default function Home() {
  const vcnAnnouncement = (
    <Jumbotron>
      <h1>Virtual Computational Neuroscience (VCN)</h1>
      <p className="lead">
        In light of the many changes we are all navigating during COVID-19,
        Stanford CNJC is temporarily merging with other institutions to provide
        an exciting online talk series:{' '}
        <a
          href="https://virtualcompneurojc.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Virtual Computational Neuroscience (VCN)
        </a>
        !
      </p>
      <p>
        VCN is a partnership between computational neuroscience groups at
        Stanford, Princeton, Harvard, and MIT. New talks will be posted on the
        VCN website and will not be cross-listed here, so please bookmark the
        VCN website to stay up to date:
      </p>
      <a
        href="https://virtualcompneurojc.github.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Visit the VCN Website</Button>
      </a>
    </Jumbotron>
  );

  return (
    <>
      <Intro />
      <br />
      {wrapInContainer(vcnAnnouncement)}
      <br />
      <SessionsList />
    </>
  );
}
