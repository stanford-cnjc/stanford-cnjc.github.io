import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class CNJCx extends Component {
  render() {
    const flyer = require('../../img/cnjcx_flyer.png');
    return (
      <Container>
        <Row className="vertical-align">
          <Col xs="12" lg="12">
            <br />
            <h3>CNJCx: Practical Python</h3>
            <Container>
              <Row>
                <Col>
                  <img
                    style={{ maxWidth: '70%' }}
                    src={flyer}
                    alt="flyer advertising the CNJCx series"
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CNJCx;
