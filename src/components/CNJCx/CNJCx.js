import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  Container,
  Button,
  Row,
  Col,
  Card,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import WeekInfo from './WeekInfo.js';
import { FaVideo, FaUsers, FaCalendarPlus, FaGithub } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';

import cnjcxData from '../../data/cnjcx.json';
import './CNJCx.css';

const renderSpeaker = speaker => {
  let imgRender = null;
  if (speaker.imgSrc) {
    const speakerImgSrc = require(`../../${speaker.imgSrc}`);
    imgRender = (
      <img className="circle" alt={speaker.imgAlt} src={speakerImgSrc} />
    );
  }

  return (
    <a href={speaker.website} target="_blank" rel="noopener noreferrer">
      <Card className="speakerCard">
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '10px' }}>{imgRender}</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
              <strong>{speaker.name} </strong>{' '}
              <small>({speaker.pronouns})</small>
            </div>
            <small>{speaker.position} </small>
          </div>
        </div>
      </Card>
    </a>
  );
};

const renderSpeakers = speakers => {
  const renderedSpeakers = speakers.map(speaker => {
    return (
      <Col lg="6" md="6" sm="12" xs="12" key={`${speaker.name}_image`}>
        {renderSpeaker(speaker)}
      </Col>
    );
  });
  return <Row>{renderedSpeakers}</Row>;
};

const renderWeekInfo = sessions => {
  const renderedWeeks = sessions.map((session, sessionIdx) => {
    return (
      <Col
        style={{ marginBottom: '5px' }}
        lg="12"
        md="12"
        sm="12"
        xs="12"
        key={session.title}
        id={`week${sessionIdx + 1}`}
      >
        <WeekInfo {...session} />
      </Col>
    );
  });
  return <Row>{renderedWeeks}</Row>;
};

const TableOfContents = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  const weekLinks = [
    {
      title: 'Week 1: Command Line',
      anchor: '#week1',
    },
    {
      title: 'Week 2: Remote Machines',
      anchor: '#week2',
    },
    {
      title: 'Week 3: Python Installations',
      anchor: '#week3',
    },
    {
      title: 'Week 4: Writing and Sharing Code',
      anchor: '#week4',
    },
    {
      title: 'Week 5: Practical Python',
      anchor: '#week5',
    },
    {
      title: 'Week 6: Guest Lectures',
      anchor: '#week6',
    },
  ];

  const sessionMaterialsButton = (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret color="primary">
        <FaVideo />
        {` `}Session Materials
      </DropdownToggle>
      <DropdownMenu>
        {weekLinks.map(({ title, anchor }) => (
          <Link to={anchor}>
            <DropdownItem>{title}</DropdownItem>
          </Link>
        ))}
      </DropdownMenu>
    </ButtonDropdown>
  );

  return (
    <div>
      <h6>Table of Contents</h6>
      <Nav>
        <NavItem>
          <Link to="#speakers">
            <Button color="secondary">
              <FaUsers />
              {` `}CNJCx Speakers
            </Button>
          </Link>
        </NavItem>
        <NavItem>{sessionMaterialsButton}</NavItem>
      </Nav>
    </div>
  );
};

function CNJCx() {
  const rsvpLink = (
    <div>
      <h6> RSVP for CNJCx: Practical Python Week 6</h6>
      <a
        href="https://forms.gle/wJ5nJDvxD9CJ7VoJ9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button color="success">
          <FaCalendarPlus />
          {` `}RSVP for CNJCx Week 6
        </Button>
      </a>
    </div>
  );

  const bashInstructions = (
    <div id="bashInstructions">
      <h6> How do I open a Bash terminal on my machine? </h6>
      <p>
        Please follow{' '}
        <a
          href="https://github.com/stanford-cnjc/cnjcx-course-materials/blob/master/week1_commandline/cnjcx_week1_recap.md#prerequisites"
          target="_blank"
          rel="noopener noreferrer"
        >
          our guide for Linux, macOS, and Windows users.
        </a>
      </p>
    </div>
  );

  const speakerProfiles = renderSpeakers(cnjcxData.speakers);
  const weekInfo = renderWeekInfo(cnjcxData.sessions);

  return (
    <Container>
      <Row>
        <Col>
          <h1>CNJCx: Practical Python</h1>
          <p>
            A 6-week mini-series designed to introduce broadly-applicable
            computing skills, like how to work on a remote machine, version
            control for code, command line basics, managing Python package
            dependencies with environments, and Python best practices for
            biosciences.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>{rsvpLink}</Col>
        <Col>{<TableOfContents />}</Col>
        <Col>{bashInstructions}</Col>
      </Row>
      <hr />
      <Row id="speakers">
        <Col>
          <h2>Lecturers and Guest Speakers</h2>
          <p>
            We are incredibly grateful to the speakers who volunteered their
            time and expertise to teach and contribute content to CNJCx. Thank
            you! Speakers are listed here in order of appearance.
          </p>
          {speakerProfiles}
        </Col>
      </Row>
      <hr />
      <Row id="materials">
        <Col>
          <h2>CNJCx Materials</h2>
          <p>
            Materials from each session will be posted here following each
            session. Check back often for new content!
          </p>
          <a
            href="https://github.com/stanford-cnjc/cnjcx-course-materials"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" color="primary">
              <FaGithub /> Browse all CNJCx: Practical Python content on Github
            </Button>
          </a>
          {weekInfo}
        </Col>
      </Row>
    </Container>
  );
}

export default CNJCx;
