import React, { Component } from 'react';
import { Container, Button, Row, Col, Card } from 'reactstrap';
import WeekInfo from './WeekInfo.js';
import ReactMarkdown from 'react-markdown';

import cnjcx_data from '../../cnjcx.json';
import './CNJCx.css';

class CNJCx extends Component {
  renderSpeaker = speaker => {
    let img_render = null;
    if (speaker.img_src) {
      const speaker_img_src = require(`../../${speaker.img_src}`);
      img_render = (
        <img className="circle" alt={speaker.img_alt} src={speaker_img_src} />
      );
    }

    return (
      <a href={speaker.website}>
        <Card className="speakerCard">
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '10px' }}>{img_render}</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div>
                <strong>{speaker.name}</strong>
              </div>
              <small>{speaker.position}</small>
            </div>
          </div>
        </Card>
      </a>
    );
  };

  renderSpeakers = speakers => {
    const renderedSpeakers = speakers.map(speaker => {
      return (
        <Col lg="4" sm="6" xs="12" key={`${speaker.name}_image`}>
          {this.renderSpeaker(speaker)}
        </Col>
      );
    });
    return <Row>{renderedSpeakers}</Row>;
  };

  renderWeekInfo = sessions => {
    const renderedWeeks = sessions.map(session => {
      return (
        <Col
          style={{ marginBottom: '5px' }}
          lg="6"
          md="12"
          sm="12"
          xs="12"
          key={session.title}
        >
          <WeekInfo {...session} />
        </Col>
      );
    });
    return <Row>{renderedWeeks}</Row>;
  };

  render() {
    const mdSrc = '# sample header\n ### another header';
    const bashInstructions = (
      <div>
        <h2> How do I open a bash terminal on my machine? </h2>
        <ReactMarkdown source={mdSrc} />
        <ul>
          <li>
            <a href="https://support.apple.com/en-gb/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac#:~:text=Open%20Terminal,%2C%20then%20double%2Dclick%20Terminal.">
              For MacOS users
            </a>
          </li>
          <li>
            <a href="https://www.wikihow.com/Open-a-Terminal-Window-in-Ubuntu">
              For Ubuntu users
            </a>
          </li>
          <li>
            <a href="#">
              For Windows users (this is more complicated, sorry! Let us know if
              you need some help)
            </a>
          </li>
        </ul>
      </div>
    );

    const speakerProfiles = this.renderSpeakers(cnjcx_data.speakers);
    const weekInfo = this.renderWeekInfo(cnjcx_data.sessions);
    const buttonDemo = (
      <Container>
        <Row>
          <Col lg="4" sm="4">
            <Button className="cnjcx-btn"> Button 1 </Button>
          </Col>
          <Col lg="8" sm="8">
            <Button className="cnjcx-btn"> Button 2 </Button>
          </Col>
        </Row>
        <Row>
          <Col lg="4" sm="4">
            <Button className="cnjcx-btn"> Button 3 </Button>
          </Col>
          <Col lg="4" sm="4">
            <Button className="cnjcx-btn"> Button 4 </Button>
          </Col>
          <Col lg="4" sm="4">
            <Button className="cnjcx-btn"> Button 5 </Button>
          </Col>
        </Row>
        <Row>
          <Col lg="3" sm="3">
            <Button className="cnjcx-btn"> Button 6 </Button>
          </Col>
          <Col lg="3" sm="3">
            <Button className="cnjcx-btn"> Button 7 </Button>
          </Col>
          <Col lg="6" sm="6">
            <Button className="cnjcx-btn"> Button 8 </Button>
          </Col>
        </Row>
      </Container>
    );
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
              biosciences
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>{bashInstructions}</Col>
        </Row>
        <hr />
        <Row>
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
        <Row>
          <Col>
            <h3>CNJCx Materials</h3>
            <p>
              Materials from each session will be posted here following each
              session. Check back often for new content!
            </p>
            {weekInfo}
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h3> Buttons </h3>
            {buttonDemo}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CNJCx;
