import React, { Component } from 'react';
import {
  FaImage,
  FaEnvelope,
  FaGlobeAmericas,
  FaLinkedin,
  FaFilePowerpoint,
  FaFile,
  FaFilePdf,
} from 'react-icons/fa';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import moment from 'moment';
import './SessionGroup.css';

class SessionGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      sessions: props.sessions,
    };
  }

  renderEmail = speaker => {
    if (speaker.email) {
      return (
        <a href={'mailto:' + speaker.email}>
          {` `}
          <FaEnvelope color="#8c1515" />
        </a>
      );
    }
  };

  renderURL = speaker => {
    var icon = speaker.url.includes('linkedin') ? (
      <FaLinkedin color="#4d4f53" />
    ) : (
      <FaGlobeAmericas color="#4d4f53" />
    );

    if (speaker.url) {
      return (
        <a href={speaker.url}>
          {` `}
          {icon}
        </a>
      );
    }
  };

  render_speaker = speaker => {
    return (
      <span>
        <strong>{speaker.name}</strong>
        {this.renderEmail(speaker)}
        {this.renderURL(speaker)}
      </span>
    );
  };

  render_speakers = speakers => {
    return speakers.map((speaker, i) => {
      var speaker_info = this.render_speaker(speaker);
      let to_render;

      if (i === speakers.length - 1) {
        // last
        if (speakers.length === 1) {
          to_render = (
            <span>
              {speaker_info}
              <br />
            </span>
          );
        } else {
          to_render = (
            <span>
              and {speaker_info}
              <br />
            </span>
          );
        }
      } else if (i === speakers.length - 2) {
        // penultimate
        to_render = (
          <span>
            {speaker_info}
            {` `}
          </span>
        );
      } else {
        //all others
        to_render = (
          <span>
            {speaker_info},{` `}
          </span>
        );
      }
      return <span key={speaker.name}>{to_render}</span>;
    });
  };

  render_file = file => {
    const size = '2em';
    let icon = <FaFile size={size} />;
    if (
      file.endsWith('.ppt') ||
      file.endsWith('.pptx') ||
      file.endsWith('.key')
    ) {
      icon = <FaFilePowerpoint size={size} />;
    } else if (file.endsWith('.pdf')) {
      icon = <FaFilePdf size={size} />;
    } else if (
      file.endsWith('.png') ||
      file.endsWith('.jpg') ||
      file.endsWith('.jpeg')
    ) {
      icon = <FaImage size={size} />;
    }

    // parse filename
    var fileparts = file.split('/');
    var filename = fileparts[fileparts.length - 1];

    return (
      <ListGroupItem className="file_download_link">
        <a href={file} download="">
          {icon}
          {filename}
        </a>
      </ListGroupItem>
    );
  };

  render_files = files => {
    return files.map(file => {
      return <span key={file}>{this.render_file(file)}</span>;
    });
  };

  render_sessions = sessions => {
    if (sessions.length === 0) {
      return <div>No sessions to display.</div>;
    }
    return sessions.map(session => {
      return (
        <ListGroupItem key={session.date}>
          <div>
            <h4>{session.title}</h4>
            {moment(session.date).format('MM/DD/YYYY')}
            <hr />
            {this.render_speakers(session.speakers)}
            {session.location}, {session.time}
            <br />
            <br />
            <ListGroup>{this.render_files(session.files)}</ListGroup>
          </div>
        </ListGroupItem>
      );
    });
  };

  render() {
    return (
      <Container>
        <Row className="vertical-align">
          <Col xs="12" lg="12">
            <div>
              <h2>{this.state.title}</h2>
              <ListGroup>{this.render_sessions(this.state.sessions)}</ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SessionGroup;
