import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <Container>
        <Row className="vertical-align">
          <Col xs="12" lg="12">
            <p>Footer content goes here</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
