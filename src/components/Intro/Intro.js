import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Intro.css';
import mbc_logo from './mbct-logo.png';
import wtn_logo from './wt_400x400.jpg';

class Intro extends Component {
  render() {
    return (
      <Container>
        <Row className="vertical-align">
          <Col xs="12" lg={{ size: 6 }}>
            <div>
              <h1>CNJC</h1>
              <h6>Stanford Computational Neuroscience Journal Club</h6>
              <br />
              <p>
                CNJC organizes bi-weekly meetings open to the Stanford
                community. We foster interactions between students, post-docs,
                and faculty to encourage a deeper understanding of core
                techniques in computational neuroscience and their applications
                in the wild. CNJC is proudly supported by the Wu Tsai
                Neurosciences Institute and the Center for Mind, Brain,
                Computation, and Technology
              </p>
              <br />
            </div>
          </Col>
          <Col xs="6" lg={{ size: 3 }}>
            <img className="logo" src={mbc_logo} alt="MBCT Logo" />
          </Col>
          <Col xs="6" lg={{ size: 3 }}>
            <img className="logo" src={wtn_logo} alt="Wu Tsai Neuro Logo" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Intro;
