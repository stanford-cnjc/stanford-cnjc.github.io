import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Intro.css';
import mbc_logo from './mbct-logo.png';
import wtn_logo from './wt_400x400.jpg';

class Intro extends Component {
  render() {
    return (
      <Container>
        <Row className="vertical-align">
          <Col xs="12" lg="6">
            <div>
              <h1>CNJC</h1>
              <h6>Stanford Computational Neuroscience Journal Club</h6>
              <br />
              <p>
                CNJC organizes (mostly) bi-weekly meetings open to the Stanford
                community. We foster interactions between students, post-docs,
                and faculty to encourage a deeper understanding of core
                techniques in computational neuroscience and their applications
                in the wild. CNJC is proudly supported by the{' '}
                <a href="http://neuroscience.stanford.edu">
                  Wu Tsai Neurosciences Institute
                </a>{' '}
                and the{' '}
                <a href="https://neuroscience.stanford.edu/mbct/training-programs/mbct-training-program">
                  Center for Mind, Brain, Computation, and Technology.
                </a>
              </p>
              <Link to="/About">
                <h5>
                  <Button>Learn more</Button>
                </h5>
              </Link>

              <br />
            </div>
          </Col>
          <Col xs="6" lg="3">
            <img className="logo" src={mbc_logo} alt="MBCT Logo" />
          </Col>
          <Col xs="6" lg="3">
            <img className="logo" src={wtn_logo} alt="Wu Tsai Neuro Logo" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Intro;
