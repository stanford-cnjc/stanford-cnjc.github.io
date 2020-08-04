import React, { Fragment, Component } from 'react';
import {
  Container,
  Button,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';
import { FaGlobeAmericas } from 'react-icons/fa';

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

    const url = (
      <Button color="link">
        <a href={speaker.website}>
          <FaGlobeAmericas />
        </a>
      </Button>
    );

    return (
      <Fragment>
        <Card className="speakerCard">
          <CardHeader>
            <strong>{speaker.name}</strong>
            {` `}
            {url}
            <hr />
            <small>{speaker.position}</small>
          </CardHeader>
          <CardBody>{img_render}</CardBody>
        </Card>
        <br />
      </Fragment>
    );
  };

  renderSpeakers = speakers => {
    const renderedSpeakers = speakers.map(speaker => {
      return (
        <Col lg="3" xs="4">
          {this.renderSpeaker(speaker)}
        </Col>
      );
    });
    return <Row>{renderedSpeakers}</Row>;
  };

  render() {
    const speakerProfiles = this.renderSpeakers(cnjcx_data.speakers);
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
          <Col>{buttonDemo}</Col>
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
      </Container>
    );
  }
}

export default CNJCx;
