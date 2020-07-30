import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SessionListGroup from '../SessionsList/SessionListGroup.js';
import session_data from '../../cnjcx.json';

class CNJCx extends Component {
  render() {
    return (
      <Container>
        <Row className="vertical-align">
          <Col xs="12" lg="12">
            <br />
            <h3>CNJCx: Practical Python</h3>
            <p>
              Description of CNJCx: life changing, reverses hair loss, makes you
              type 100 wpm faster, guaranteed glam journal publication.
            </p>
            <SessionListGroup
              sessions={session_data.sessions}
              max_sessions={1000}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CNJCx;
