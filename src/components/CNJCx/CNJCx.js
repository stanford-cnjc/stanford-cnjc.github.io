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
import { FaVideo, FaUsers, FaLaptopCode, FaCalendarPlus } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';

import cnjcx_data from '../../cnjcx.json';
import './CNJCx.css';

const renderSpeaker = speaker => {
  let img_render = null;
  if (speaker.img_src) {
    const speaker_img_src = require(`../../${speaker.img_src}`);
    img_render = (
      <img className="circle" alt={speaker.img_alt} src={speaker_img_src} />
    );
  }

  return (
    <a href={speaker.website} target="_blank" rel="noopener noreferrer">
      <Card className="speakerCard">
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '10px' }}>{img_render}</div>
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
          <Link to="#bashInstructions">
            <Button color="secondary">
              <FaLaptopCode />
              {` `}Opening a Bash Terminal
            </Button>
          </Link>
        </NavItem>
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
      <h6> RSVP for CNJCx: Practical Python Week 2</h6>
      Whether you were able to attend <Link to="#week1">Week 1</Link> or not,
      please let us know if you're planning to join for Week 2.
      <br />
      <a
        href="https://forms.gle/pBsgwRT6cgJ9uKB29"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button color="success">
          <FaCalendarPlus />
          {` `}RSVP for CNJCx Week 2
        </Button>
      </a>
    </div>
  );

  const bashInstructions = (
    <div id="bashInstructions">
      <h2> How do I open a Bash terminal on my machine? </h2>
      <p>
        We've compiled resources to open a terminal on MacOS, Ubuntu, and
        Windows. Prior to the first session, you should be able to open a
        terminal with the instructions below. Feel free to type{' '}
        <code>echo $SHELL</code> at the command prompt and hit enter to see the
        shell you're using. It should say either <code>/bin/bash</code> (if
        you're using Bash) or <code>/bin/zsh</code> (if you're using Zsh). Both
        will work for CNJCx: Practical Python.
      </p>
      <h4>For MacOS users</h4>
      <ol>
        <li>
          We recommend you{' '}
          <a
            href="https://www.iterm2.com/downloads.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            download iTerm2
          </a>
          {` `}
          prior to the first session, it's a superior alternative to the
          built-in Terminal app on MacOS.
        </li>
        <li>
          To open a terminal, open Spotlight Search (with ⌘ + Space or by
          clicking the magnifying glass icon in your top bar) and search "iTerm"
          (or "Terminal" if you'd prefer to use the default application)
        </li>
      </ol>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.wikihow.com/Open-a-Terminal-Window-in-Ubuntu"
      >
        <h4>For Ubuntu users</h4>
      </a>
      <ol>
        <li>Ctrl + Alt + t</li>
        <li>Alternatively, search "terminal" in the Dash</li>
      </ol>
      <div>
        <h4>For Windows users</h4>
        <p>
          We recommend enabling the Windows Subsystem for Linux (WSL). This is a
          little more complicated than the previous instructions, so please
          reach out to us if you get stuck!
        </p>
        <ol>
          <li>Right Click the Start Menu</li>
          <li>Click "Settings"</li>
          <li>Search "Turn Windows features on and off"</li>
          <li>Click the checkbox for "Windows Subsytem for Linux"</li>
          <li>
            <a
              href="https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6?activetab=pivot%3aoverviewtab"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download "Ubuntu 18.04" from the Windows Store
            </a>
          </li>
          <li>Click the Ubuntu Icon to launch a Bash terminal</li>
          <li>
            The first time you log in, you may be prompted for a username and
            password. These will be your credentials for the Ubuntu subsystem on
            your machine, i.e., <code>[username]</code> will determine the path
            to your home directory (<code>/home/[username]</code>) and the
            password you'll use to perform actions as root (more about that in
            Week 1).
          </li>
        </ol>
      </div>
    </div>
  );

  const speakerProfiles = renderSpeakers(cnjcx_data.speakers);
  const weekInfo = renderWeekInfo(cnjcx_data.sessions);

  return (
    <Container>
      <Row className="vertical-align">
        <Col xs="12" lg="12">
          <br />
          <h3>CNJCx: Practical Python</h3>
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
      </Row>
      <hr />
      <Row>
        <Col>{<TableOfContents />}</Col>
      </Row>
      <hr />
      <Row>
        <Col>{bashInstructions}</Col>
      </Row>
      <hr />
      <Row id="speakers">
        <Col>
          <h3>Lecturers and Guest Speakers</h3>
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
          <h3>CNJCx Materials</h3>
          <p>
            Materials from each session will be posted here following each
            session. Check back often for new content!
          </p>
          {weekInfo}
        </Col>
      </Row>
    </Container>
  );
}

export default CNJCx;
