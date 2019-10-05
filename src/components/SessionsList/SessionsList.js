import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import moment from 'moment';

import Fuse from 'fuse.js';
import './SessionsList.css';

import session_data from '../../sessions.json'; // in future, load from S3 or similar
import SessionListGroup from './SessionListGroup.js';

class SessionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: session_data.sessions,
      max_sessions: 10,
    };
  }

  handleSearch = search_term => {
    this.setState({
      sessions: this.trim_sessions(search_term),
    });
  };

  trim_sessions(search_term) {
    if (search_term === '') {
      return session_data.sessions;
    }
    var options = {
      shouldSort: true,
      threshold: 0.2,
      location: 0,
      distance: 5000,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: ['title', 'location', 'date', 'speakers.name', 'files.name'],
    };
    var fuse = new Fuse(session_data.sessions, options);
    return fuse.search(search_term);
  }

  render_SessionGroups() {
    // sort sessions
    var is_upcoming = this.state.sessions.map(sess => {
      const sess_time = moment(
        sess.date + ' ' + sess.time,
        'YYYY-MM-DD h:mm a'
      );

      if (moment().isBefore(sess_time)) {
        return true;
      } else {
        return false;
      }
    });

    var upcoming_sessions = this.state.sessions.filter(
      (_, i) => is_upcoming[i]
    );
    var past_sessions = this.state.sessions.filter((_, i) => !is_upcoming[i]);

    upcoming_sessions.sort((a, b) => moment(a.date).diff(moment(b.date))); // ascending sort
    past_sessions.sort((a, b) => -moment(a.date).diff(moment(b.date)));

    return (
      <Container>
        <Row>
          <Col lg="6" xs="12">
            <Form>
              <FormGroup>
                <Label for="search_input">Search meetings by keyword:</Label>
                <Input
                  type="text"
                  id="search_input"
                  onChange={e => this.handleSearch(`${e.target.value}`)}
                  placeholder="e.g., t-SNE"
                />
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col lg="6" xs="12">
            <Row className="vertical-align">
              <Col xs="12" lg="12">
                <div>
                  <h2>Upcoming Meetings</h2>
                  <SessionListGroup sessions={upcoming_sessions} />
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg="6" xs="12">
            <Row className="vertical-align">
              <Col xs="12" lg="12">
                <div>
                  <h2>Past Meetings</h2>
                  <SessionListGroup sessions={past_sessions} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

  render() {
    return <div>{this.render_SessionGroups()}</div>;
  }
}

export default SessionsList;
