import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Discussions extends Component {
  render() {
    return (
        <Container>
        <Row className="vertical-align">
          <Col xs="12" lg="12">
            <h4>Fancy a chat?</h4>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Discussions;

