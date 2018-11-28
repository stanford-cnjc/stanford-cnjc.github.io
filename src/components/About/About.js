import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <Container>
        <Row className="vertical-align">
          <Col xs="12" lg="12">
            <br />
            <h3>What is CNJC?</h3>
            <p>
              CNJC is a <strong>community</strong> of Stanford students and
              postdocs with a shared interest in computational neuroscience and
              techniques. We advocate for an inclusive, multidisciplinary
              approach to building an understanding of core concepts in
              computational neuroscience and aim to help each other master
              techniques in our research.
            </p>

            <p>
              CNJC is a <strong>workshop series</strong> held on a biweekly
              schedule. CNJC members work in small teams to lead sessions
              affording an in-depth discussion of a given topic.
            </p>

            <p>
              CNJC is a <strong>proud affiliate</strong> of the{' '}
              <a href="http://neuroscience.stanford.edu">
                Wu Tsai Neurosciences Institute
              </a>{' '}
              and the{' '}
              <a href="https://neuroscience.stanford.edu/mbct/training-programs/mbct-training-program">
                Center for Mind, Brain, Computation, and Technology
              </a>
              . We encourage members to get involved in these great
              organizations to enrich their experience and learning!
            </p>
            <hr />
            <h3>Who can join CNJC?</h3>
            <p>
              If you're a student or post-doc at Stanford, we'd love to see you
              at a meeting! Please check the <Link to="/">Homepage</Link> for a
              listing of meeting dates and locations.
            </p>

            <h6>Google Group</h6>
            <p>
              We have a Google Group dedicated to discussions about meetings and
              CNJC at large. Check it out{' '}
              <a href="https://groups.google.com/forum/#!forum/stanford-cnjc">
                here!{` `}
                <FaGoogle />
              </a>
            </p>

            <hr />
            <h3>What kind of topics does CNJC cover?</h3>
            <p>
              The best way to get a sense for the typical meeting is to check
              the <Link to="/">Homepage</Link>. While that page is relatively
              empty for the time being, please see this incomplete list of
              topics as a good starting point. Meetings topics are meant to
              reflect the interests of CNJC members. The best way to see a topic
              represented is to sign up to present!
            </p>
            <ul>
              <li>Linear dynamical systems</li>
              <li>Dimensionality reduction</li>
              <li>Supervised classification</li>
              <li>Graph theory</li>
              <li>Kalman filters</li>
              <li>Markov models</li>
              <li>Compressed sensing</li>
              <li>Machine learning</li>
              <li>and much more!</li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
