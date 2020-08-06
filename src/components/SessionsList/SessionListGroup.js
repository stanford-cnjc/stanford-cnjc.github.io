import React, { Component } from 'react';

import { ListGroup } from 'reactstrap';
import Session from './Session';

import './SessionsList.css';

class SessionsListGroup extends Component {
  render_sessions = sessions => {
    if (sessions.length === 0) {
      return <div>No sessions to display.</div>;
    }

    var session_render_list = sessions.map(session => {
      return <Session {...session} />;
    });

    const n_sessions = session_render_list.length;
    let session_render_wrapper = <div>{session_render_list}</div>;
    if (n_sessions > this.props.max_sessions) {
      session_render_list = session_render_list.slice(
        0,
        this.props.max_sessions
      );
      session_render_wrapper = <div>{session_render_list}</div>;
    }
    return session_render_wrapper;
  };

  render() {
    return <ListGroup>{this.render_sessions(this.props.sessions)}</ListGroup>;
  }
}

export default SessionsListGroup;
