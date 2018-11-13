import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaEnvelope } from 'react-icons/fa';

class Footer extends Component {
  render() {
    return (
      <Container>
        <Row className="vertical-align">
          <Col xs="12" lg="12">
            <hr />
            <p>
              <strong>
                <em>Questions? Comments? Ideas?</em>
              </strong>
            </p>
            <p>
              Check out the designated{` `}
              <a href="https://groups.google.com/forum/#!forum/stanford-cnjc">
                Google Group
              </a>
              {` `}
              or{` `}
              <a href="mailto:stanford-cnjc@gmail.com">
                drop us an email <FaEnvelope color="#8c1515" />
              </a>
              !
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
