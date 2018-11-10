import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class About extends Component {
  render() {
    return (
      <Container>
        <Row className="vertical-align">
          <Col xs="12" lg="12">
            <h4>CNJC is commited to C, to N, to J, and also to C.</h4>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
