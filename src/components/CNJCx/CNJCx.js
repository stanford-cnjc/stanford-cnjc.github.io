import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class CNJCx extends Component {
  render() {
    const flyer = require('../../img/cnjcx_flyer.png');
    const bash_instructions = (
      <div>
        <h2> How do I open a bash terminal on my machine? </h2>
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
            <a href="https://docs.microsoft.com/en-us/windows/wsl/install-win10">
              For Windows users (this is more complicated, sorry! Let us know if
              you need some help)
            </a>
          </li>
        </ul>
      </div>
    );
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
              <hr />
            </Container>
            <Container>
              <Row>
                <Col>{bash_instructions}</Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CNJCx;
