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
import {
  ListGroup,
  ListGroupItem,
  Button,
  Badge,
  UncontrolledTooltip,
} from 'reactstrap';
import moment from 'moment';

import './SessionsList.css';

class SessionsListGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      max_sessions: 5,
    };
  }

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
      session.speakers.date = session.date;
      let font_color;
      if (session.title === 'TBD') {
        font_color = 'gray';
      } else {
        font_color = 'black';
      }

      const day_of_week = moment(session.date).format('dddd');
      const date_str = moment(session.date).format('MMMM Do YYYY');

      // add a badge if the current date is today and the session is upcoming
      let today_badge = null;
      const sess_time = moment(
        session.date + ' ' + session.time,
        'YYYY-MM-DD h:mm a'
      );
      const diff = sess_time.fromNow();
      if (
        moment(session.date).format('YYYY-MM-DD') ===
          moment().format('YYYY-MM-DD') &&
        diff.startsWith('in')
      ) {
        let color = 'danger';
        if (diff.endsWith('hours')) {
          color = 'warning';
        }
        today_badge = <Reminder session_time={sess_time} color={color} />;
      }

      let resource_header = null;
      if (session.files.length > 0) {
        resource_header = (
          <span>
            <br />
            <h6> Session Resources </h6>
          </span>
        );
      }

      let session_description = null;
      if (session.description) {
        session_description = (
          <span>
            <p>{session.description}</p>
            <hr />
          </span>
        );
      }

      let food_signup = null;
      if (session.rsvp_link) {
        if (diff.startsWith('in')) {
          food_signup = (
            <span>
              <hr />
              <a
                href={session.rsvp_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="primary" outline>
                  Food sign-up link for this session
                </Button>
              </a>
              <p>
                <em>
                  Due to the nature of our funding, food is limited to Stanford
                  affiliates. Sorry! However, everyone is welcome to attend and
                  participate!
                </em>
              </p>
            </span>
          );
        }
      }

      return (
        <span key={session.date}>
          <ListGroupItem>
            <div className={font_color}>
              <h4>
                {session.title} {today_badge}
              </h4>
              {day_of_week}, {date_str}
              <hr />
              {session_description}
              {this.render_speakers(session.speakers)}
              {session.location}, {session.time}
              <br />
              {resource_header}
              <ListGroup>{this.render_files(session.files)}</ListGroup>
              {food_signup}
            </div>
          </ListGroupItem>
          <br />
        </span>
      );
    });

    const n_sessions = session_render_list.length;
    let session_render_wrapper = <div>{session_render_list}</div>;
    if (n_sessions > this.state.max_sessions) {
      var n_hidden = this.props.sessions.length - this.state.max_sessions;
      session_render_list = session_render_list.slice(
        0,
        this.state.max_sessions
      );
      session_render_wrapper = (
        <div>
          {session_render_list}
          <Button
            color="primary"
            onClick={e => {
              this.setState({
                max_sessions: this.state.max_sessions + 5,
              });
            }}
          >
            {' '}
            Show More ({n_hidden} Hidden){' '}
          </Button>
        </div>
      );
    }
    return session_render_wrapper;
  };

  render() {
    return <ListGroup>{this.render_sessions(this.props.sessions)}</ListGroup>;
  }
}

class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment(this.props.session_time, 'YYYY-MM-DD h:mm a').fromNow(),
    };
  }
  componentDidMount() {
    this.interval = setInterval(this.updateTime.bind(this), 30000); // every 30s
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTime() {
    this.setState({
      time: moment(this.props.session_time, 'YYYY-MM-DD h:mm a').fromNow(),
    });
  }

  render() {
    return (
      <Badge pill color={this.props.color}>
        Happening {this.state.time}!
      </Badge>
    );
  }
}

export default SessionsListGroup;