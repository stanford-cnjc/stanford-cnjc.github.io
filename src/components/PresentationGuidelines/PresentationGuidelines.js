import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Form,
  Label,
  Input,
  Button,
  Card,
  CardBody,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import sessions_file from '../../sessions.json';
import moment from 'moment';

class PresentationGuidelines extends Component {
  render_valid_dates() {
    const sessions = sessions_file.sessions;
    return sessions.map(session => {
      const day_of_week = moment(session.date).format('dddd');
      const date_str = moment(session.date).format('MMMM Do YYYY');
      if (session.title === 'TBD') {
        return (
          <option key={session.date}>
            {day_of_week}, {date_str}
          </option>
        );
      } else {
        return;
      }
    });
  }
  render_form() {
    return (
      <Form>
        <Row form>
          <Col lg="6">
            <FormGroup>
              <Label for="presenter-names">Your names</Label>
              <Input
                type="textarea"
                name="presenter-names"
                id="presenter-names"
                placeholder="Sally Stanford, Carl Cardinal, Terry Tree"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <Label for="presenter-email">An email to reach you at</Label>
              <Input
                type="email"
                name="presenter-email"
                id="presenter-email"
                placeholder="sally@stanford.edu"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col lg="6">
            <FormGroup>
              <Label for="topic">Topic you'd like to present on</Label>
              <Input
                type="textarea"
                name="topic"
                id="topic"
                placeholder="e.g., linear dynamical systems"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <Label for="presentation-date">
                Which date do you want to present on? (Select all that work)
              </Label>
              <Input
                type="select"
                name="date-select"
                id="presentation-date"
                multiple
              >
                {this.render_valid_dates()}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Button>Submit</Button>
      </Form>
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
