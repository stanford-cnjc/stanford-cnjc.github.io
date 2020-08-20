import React, { useState } from 'react';
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
import moment from 'moment-timezone';

import Fuse from 'fuse.js';
import './SessionsList.css';

import sessionData from '../../data/sessions.json';
import SessionListGroup from './SessionListGroup.js';

import { pastSort, tbdUpcomingSort } from '../utils';

const trimSessions = searchTerm => {
  if (searchTerm === '') {
    return sessionData.sessions;
  }

  const options = {
    shouldSort: true,
    threshold: 0.2,
    location: 0,
    distance: 5000,
    maxPatternLength: 32,
    minMatchCharLength: 2,
    keys: ['title', 'location', 'date', 'speakers.name', 'files.name'],
  };
  const fuse = new Fuse(sessionData.sessions, options);
  return fuse.search(searchTerm);
};

export default function SessionsList() {
  const [sessions, setSessions] = useState(sessionData.sessions);
  const [maxSessionsUpcoming, setMaxSessionsUpcoming] = useState(3);
  const [maxSessionsPast, setMaxSessionsPast] = useState(10);

  const handleSearch = searchTerm => {
    setSessions(trimSessions(searchTerm));
  };

  const isUpcoming = sessions.map(sess => {
    if (
      sess.title ===
      'Special Guest Session: Characterizing hippocampal replay using switching point process state space models'
    ) {
    }
    const sess_time = moment.tz(
      sess.date + ' ' + sess.time,
      'YYYY-MM-DD h:mm a',
      'America/Los_Angeles'
    );
    if (moment().isBefore(sess_time)) {
      return true;
    } else if (sess.date === 'TBD') {
      return true;
    } else {
      return false;
    }
  });

  let upcomingSessions = sessions.filter((_, i) => isUpcoming[i]);
  let pastSessions = sessions.filter((_, i) => !isUpcoming[i]);

  upcomingSessions.sort((a, b) => tbdUpcomingSort(a, b)); // ascending sort
  pastSessions.sort((a, b) => pastSort(a, b));

  const nHiddenUpcoming = upcomingSessions.length - maxSessionsUpcoming;
  const nHiddenPast = pastSessions.length - maxSessionsPast;

  const upcomingMoreButton =
    nHiddenUpcoming > 0 ? (
      <Row>
        <Col>
          <Button
            color="primary"
            onClick={() => {
              setMaxSessionsUpcoming(maxSessionsUpcoming + 5);
            }}
          >
            {' '}
            Show More Upcoming Sessions ({nHiddenUpcoming} Hidden){' '}
          </Button>
        </Col>
      </Row>
    ) : null;

  const pastMoreButton =
    nHiddenPast > 0 ? (
      <Row>
        <Col>
          <Button
            color="primary"
            onClick={() => {
              setMaxSessionsPast(maxSessionsPast + 5);
            }}
          >
            {' '}
            Show More Past Sessions ({nHiddenPast} Hidden){' '}
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
                onChange={e => handleSearch(`${e.target.value}`)}
                placeholder="e.g., CNJCx"
              />
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <div>
                <h1>Upcoming Meetings</h1>
                <SessionListGroup
                  sessions={upcomingSessions}
                  maxSessions={maxSessionsUpcoming}
                />
              </div>
            </Col>
          </Row>
          {upcomingMoreButton}
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Row>
            <Col>
              <div>
                <h1>Past Meetings</h1>
                <SessionListGroup
                  sessions={pastSessions}
                  maxSessions={maxSessionsPast}
                />
              </div>
            </Col>
          </Row>
          {pastMoreButton}
        </Col>
      </Row>
    </Container>
  );
}
