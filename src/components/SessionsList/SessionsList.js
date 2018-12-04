import React, { Component, Fragment } from 'react';
import SessionGroup from '../SessionGroup/SessionGroup';
import moment from 'moment';

import './SessionsList.css';

import session_data from '../../sessions.json'; // in future, load from S3 or similar

class SessionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: session_data.sessions,
    };
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
      <Fragment>
        <SessionGroup title="Upcoming Meetings" sessions={upcoming_sessions} />
        <br />
        <SessionGroup title="Past Meetings" sessions={past_sessions} />
      </Fragment>
    );
  }

  render() {
    return <div>{this.render_SessionGroups()}</div>;
  }
}

export default SessionsList;
