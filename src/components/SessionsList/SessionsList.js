import React, { Component } from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import moment from 'moment';

import Fuse from 'fuse.js';
import './SessionsList.css';

import session_data from '../../sessions.json';
import SessionListGroup from './SessionListGroup.js';

function past_sort(a, b) {
  return -moment(a.date).diff(moment(b.date));
}

function tbd_upcoming_sort(a, b) {
  if (a.date === 'TBD') {
    return 0;
  } else if (b.date === 'TBD') {
    return -1;
  } else {
    return moment(a.date).diff(moment(b.date));
  }
}

class SessionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: session_data.sessions,
      max_sessions_upcoming: 3,
      max_sessions_past: 10,
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
      } else if (sess.date === 'TBD') {
        return true;
      } else {
        return false;
      }
    });

    var upcoming_sessions = this.state.sessions.filter(
      (_, i) => is_upcoming[i]
    );
    var past_sessions = this.state.sessions.filter((_, i) => !is_upcoming[i]);

    upcoming_sessions.sort((a, b) => tbd_upcoming_sort(a, b)); // ascending sort
    past_sessions.sort((a, b) => past_sort(a, b));

    const n_hidden_upcoming =
      upcoming_sessions.length - this.state.max_sessions_upcoming;
    const n_hidden_past = past_sessions.length - this.state.max_sessions_past;

    let upcoming_more_button =
      n_hidden_upcoming > 0 ? (
        <Row>
          <Col style={{ textAlign: 'center' }}>
            <Button
              style={{ margin: 'auto' }}
              color="primary"
              onClick={() => {
                this.setState({
                  max_sessions_upcoming: this.state.max_sessions_upcoming + 5,
                });
              }}
            >
              {' '}
              Show More Upcoming Sessions ({n_hidden_upcoming} Hidden){' '}
            </Button>
          </Col>
        </Row>
      ) : null;

    let past_more_button =
      n_hidden_past > 0 ? (
        <Row>
          <Col style={{ textAlign: 'center' }}>
            <Button
              style={{ margin: 'auto' }}
              color="primary"
              onClick={() => {
                this.setState({
                  max_sessions_past: this.state.max_sessions_past + 5,
                });
              }}
            >
              {' '}
              Show More Past Sessions ({n_hidden_past} Hidden){' '}
            </Button>
          </Col>
        </Row>
      ) : null;

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
                  placeholder="e.g., CNJCx"
                />
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col lg="12" xs="12">
            <Row className="vertical-align">
              <Col xs="12" lg="12">
                <div>
                  <h2 className="center-align">Upcoming Meetings</h2>
                  <SessionListGroup
                    sessions={upcoming_sessions}
                    max_sessions={this.state.max_sessions_upcoming}
                  />
                </div>
              </Col>
            </Row>
            {upcoming_more_button}
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg="12" xs="12">
            <Row className="vertical-align">
              <Col xs="12" lg="12">
                <div>
                  <h2 className="center-align">Past Meetings</h2>
                  <SessionListGroup
                    sessions={past_sessions}
                    max_sessions={this.state.max_sessions_past}
                  />
                </div>
              </Col>
            </Row>
            {past_more_button}
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
