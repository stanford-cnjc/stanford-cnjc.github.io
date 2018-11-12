import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Iframe from 'react-iframe';

class Discussions extends Component {
  render() {
    return (
      <Container>
        <Row className="vertical-align">
          <Col xs="12" lg="12">
            <h1>
              For discussions, head on over to our{' '}
              <a href="https://groups.google.com/forum/#!forum/stanford-cnjc">
                Google Group!
              </a>
            </h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Discussions;
