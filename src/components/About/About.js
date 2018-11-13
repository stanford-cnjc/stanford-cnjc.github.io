import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaGoogle } from 'react-icons/fa';

class About extends Component {
  render() {
    return (
      <Container>
        <Row className="vertical-align">
          <Col xs="12" lg="12">
            <br />
            <h3>What is CNJC?</h3>
            <p>
              CNJC is a <strong>community</strong> committed to bringing
              together those interested in computational neuroscience and
              techniques. We encourage an inclusive and multidisciplinary
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
              CNJC is a <strong>proud affiliate</strong> of the Wu Tsai
              Neuroscience Institute and MBCT training program. We encourage our
              members to get involved in these broader organizations to enrich
              their experience and learning.
            </p>
            <hr />
            <h3>Who can join CNJC?</h3>
            <p>
              If you're a student or post-docs at Stanford, we'd love to see you
              at a meeting! Please check the <a href="/">Homepage</a> for a
              listing of meeting dates and locations.
            </p>

            <h6>Mailing List</h6>
            <p>To-do</p>

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
              the <a href="/">Homepage</a>. In addition, this incomplete list of
              topics is a good starting point!
            </p>
            <ul>
              <li>Principal Components Analysis</li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
