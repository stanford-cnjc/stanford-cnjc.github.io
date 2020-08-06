import React, { Component, Fragment } from 'react';

import {
  FaImage,
  FaEnvelope,
  FaGlobeAmericas,
  FaLinkedin,
  FaFilePowerpoint,
  FaFile,
  FaFilePdf,
  FaLink,
  FaGithub,
} from 'react-icons/fa';
import { GoClippy } from 'react-icons/go';
import { ListGroup, Button, UncontrolledTooltip } from 'reactstrap';
import Session from './Session';

import './SessionsList.css';

class SessionsListGroup extends Component {
  renderEmail = speaker => {
    if (speaker.handle && speaker.domain) {
      const address = speaker.handle + '@' + speaker.domain;
      const targId = speaker.handle + speaker.date;

      return (
        <span>
          <FaEnvelope color="#8c1313" id={targId} />
          <UncontrolledTooltip
            autohide={false}
            placement="top-end"
            target={targId}
          >
            {address}
            {` `}
            <Button color="link" size="sm">
              <GoClippy
                className="copy-src"
                data-clipboard-text={address}
                size="1em"
              />
            </Button>{' '}
          </UncontrolledTooltip>
        </span>
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
        <a href={speaker.url} target="_blank" rel="noopener noreferrer">
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
        {` `}
        {this.renderEmail(speaker)}
        {this.renderURL(speaker)}
      </span>
    );
  };

  render_speakers = speakers => {
    return speakers.map((speaker, i) => {
      speaker.date = speakers.date;
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
      return <span key={speaker.name + speaker.date}>{to_render}</span>;
    });
  };

  render_file = file => {
    const url = file.url;

    const size = '1.2em';
    let icon = <FaFile size={size} />;

    if (url.endsWith('.ppt') || url.endsWith('.pptx') || url.endsWith('.key')) {
      icon = <FaFilePowerpoint size={size} />;
    } else if (url.endsWith('.pdf')) {
      icon = <FaFilePdf size={size} />;
    } else if (
      url.endsWith('.png') ||
      url.endsWith('.jpg') ||
      url.endsWith('.jpeg')
    ) {
      icon = <FaImage size={size} />;
    } else if (url.startsWith('https://github')) {
      icon = <FaGithub size={size} />;
    } else if (url.startsWith('http')) {
      icon = <FaLink size={size} />;
    }

    return (
      <Fragment>
        <span className="file_download_link">
          <a href={url} target="_blank" rel="noopener noreferrer" download="">
            {icon}
            {` `}
            {file.name}
          </a>
        </span>
        <br />
      </Fragment>
    );
  };

  render_files = files => {
    return files.map(file => {
      return <span key={file.url}>{this.render_file(file)}</span>;
    });
  };

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
