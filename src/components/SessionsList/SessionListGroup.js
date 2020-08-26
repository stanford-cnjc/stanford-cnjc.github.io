import React from 'react';
import { ListGroup } from 'reactstrap';
import Session from './Session';

import './SessionsList.css';

export default function SessionsListGroup({ sessions, maxSessions }) {
  if (sessions.length === 0) {
    return <div>No sessions to display.</div>;
  }

  const sessionRenderList = sessions.map(session => {
    return <Session {...session} key={session.date} />;
  });

  const sessionRenderWrapper =
    sessionRenderList.length > maxSessions
      ? sessionRenderList.slice(0, maxSessions)
      : sessionRenderList;

  return <ListGroup>{sessionRenderWrapper}</ListGroup>;
}
