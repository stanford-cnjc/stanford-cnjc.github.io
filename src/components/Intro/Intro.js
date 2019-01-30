import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
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
                CNJC organizes regular meetings open to the Stanford community.
                We foster interactions between students, post-docs, and faculty
                to encourage a deeper understanding of core techniques in
                computational neuroscience and their applications in the wild.
                CNJC is proudly supported by the{' '}
                <a
                  href="http://neuroscience.stanford.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wu Tsai Neurosciences Institute
                </a>
                {` `}
                and the{` `}
                <a
                  href="https://neuroscience.stanford.edu/mbct/training-programs/mbct-training-program"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Center for Mind, Brain, Computation, and Technology.
                </a>
              </p>
              <h5>
                <Link to="/About">
                  <Button color="secondary">Learn more</Button>
                </Link>
                {` `}
                <Link to="/PresentationSignup">
                  <Button color="primary">Sign up to present</Button>
                </Link>
                {` `}
                <a
                  href="https://github.com/stanford-cnjc/cnjc-code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button color="primary">
                    <FaGithub /> Code on GitHub
                  </Button>
                </a>
              </h5>

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
