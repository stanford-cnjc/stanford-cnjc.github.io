import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import sessions_file from '../../sessions.json';
import moment from 'moment';
import axios from 'axios';

class PresentationGuidelines extends Component {
  constructor(props) {
    super(props);

    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = { email: false, valuesSubmitted: false };
  }

  closeModal() {
    this.setState({ valuesSubmitted: false, error: false });
  }

  handleValidSubmit(event, values) {
    this.setState({ email: values.email, error: false });

    const parts = {
      name: '&entry.1312122491=' + values.presenterNames.split(' ').join('+'),
      email: '&entry.683825261=' + values.presenterEmail,
      topic: '&entry.571595974=' + values.topic.split(' ').join('+'),
      dates:
        '&entry.1239080828=' +
        values.dateSelect
          .join(',+')
          .split(' ')
          .join('+'),
      anythingElse: '&entry.581861638=' + values.extra.split(' ').join('+'),
    };
    const base =
      'https://docs.google.com/forms/d/e/1FAIpQLScc_LMMmYn85kK6KZahvMnRmspgwrbOcmfge2BrGXbsa9vgdg/viewform?usp=pp_url';
    const url =
      base +
      parts.name +
      parts.email +
      parts.topic +
      parts.dates +
      parts.anythingElse;

    axios({
      method: 'post',
      url: url,
    })
      .then(data => {
        console.log(data);
        this.setState({ valuesSubmitted: true });
      })
      .catch(err => console.log(err));
  }

  handleInvalidSubmit(event, errors, values) {
    this.setState({ email: values.email, error: true });
  }

  render_valid_dates() {
    const sessions = sessions_file.sessions;
    return sessions
      .filter(session => session.title === 'TBD')
      .map(session => {
        const day_of_week = moment(session.date).format('dddd');
        const date_str = moment(session.date).format('MMMM Do YYYY');
        return (
          <option key={session.date}>
            {day_of_week}, {date_str}
          </option>
        );
      });
  }

  render_form() {
    let modal_render;
    if (!this.state.error) {
      modal_render = (
        <Modal
          isOpen={this.state.valuesSubmitted !== false}
          toggle={this.closeModal}
        >
          <ModalHeader toggle={this.closeModal}>Form is valid</ModalHeader>
          <ModalBody>Form submitted, thanks!</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.closeModal}>
              Ok, got it
            </Button>
          </ModalFooter>
        </Modal>
      );
    } else {
      modal_render = null;
    }
    return (
      <div>
        <AvForm
          onValidSubmit={this.handleValidSubmit}
          onInvalidSubmit={this.handleInvalidSubmit}
        >
          <Row form>
            <Col lg="6">
              <AvField
                name="presenterNames"
                label="Your names"
                type="textarea"
                placeholder="Sally Stanford, Carl Cardinal, Terry Tree"
                errorMessage="Names are required"
                required
              />
            </Col>
            <Col lg="6">
              <AvField
                name="presenterEmail"
                label="An email to reach you at"
                type="email"
                placeholder="sally@stanford.edu"
                errorMessage="Please enter a valid email"
                required
              />
            </Col>
          </Row>
          <Row form>
            <Col lg="6">
              <AvField
                name="topic"
                label="Topic you'd like to present on"
                type="textarea"
                placeholder="e.g., Linear dynamical systems"
                errorMessage="Topic is required"
                required
              />
            </Col>
            <Col lg="6">
              <AvField
                name="dateSelect"
                label="Which date do you want to present on? (Select all that work)"
                type="select"
                errorMessage="Please choose at least one"
                required
                multiple
              >
                {this.render_valid_dates()}
              </AvField>
            </Col>
          </Row>
          <Row form>
            <Col lg="12">
              <AvField name="extra" label="Anything else?" type="textarea" />
            </Col>
          </Row>
          <Button>Submit Sign-up Request</Button>
        </AvForm>
        {modal_render}
      </div>
    );
  }
  render() {
    return (
      <Container>
        <Row className="vertical-align">
          <Col xs="12" lg="12">
            <br />
            <h2>Signing up to present</h2>
            <Card>
              <CardBody>{this.render_form()}</CardBody>
            </Card>
          </Col>
        </Row>
        <br />
        <Row className="vertical-align">
          <Col xs="12" lg="12">
            <h2>How to prepare a presentation</h2>
            <hr />

            <h5>Step 0: Pick an available date</h5>
            <p>
              Upcoming session dates, times, and locations are listed as "TBD"
              in the "Upcoming Sessions" panel of the
              {` `}
              <Link to="/">homepage</Link>.
            </p>

            <h5>Step 1: Pick a topic</h5>
            <p>
              Choose a topic that you're interested in leading a discussion
              about. You <strong>do not</strong> need to be an expert in this
              topic already! All you need is a desire to learn more and guide a
              group discussion.
            </p>

            <h5>Step 2: Find co-presenters</h5>
            <p>
              Each session should be led by between 2-4 people. If you'd like to
              lead a session with more than 4 leaders, please email us
              separately so we can discuss logistics.
            </p>

            <h5>Step 3: Do your homework</h5>
            <p>
              Read about the topic, get a sense of how the method or technique
              applies to computational neuroscience, and think about the best
              way to discuss in a group context. This can mean walking through
              simple equations, a live programming demo, detailing how the
              method is used in a recent paper, or whatever else you think might
              be effective!
            </p>

            <h5>Step 3.5: Chat with an expert</h5>
            <p>Information about faculty mentorship coming soon. Stay tuned!</p>

            <h5>Step 4: Prepare the presentation</h5>
            <p>
              If you're making a slide deck, try to keep the amount of lecturing
              to a minimum. When possible, try to explain concepts and prompt
              discussion with live examples and derivations.
            </p>

            <h5>Step 5: Give a great presentation!</h5>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PresentationGuidelines;
