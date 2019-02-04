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
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  Badge,
  UncontrolledTooltip,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import moment from 'moment';

import Fuse from 'fuse.js';
import './SessionsList.css';

import session_data from '../../sessions.json'; // in future, load from S3 or similar

class SessionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: session_data.sessions,
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
    return sessions.map(session => {
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
  };

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
            <Container>
              <Row className="vertical-align">
                <Col xs="12" lg="12">
                  <div>
                    <h2>Upcoming Meetings</h2>
                    <ListGroup>
                      {this.render_sessions(upcoming_sessions)}
                    </ListGroup>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col lg="6" xs="12">
            <Container>
              <Row className="vertical-align">
                <Col xs="12" lg="12">
                  <div>
                    <h2>Past Meetings</h2>
                    <ListGroup>{this.render_sessions(past_sessions)}</ListGroup>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }

  render() {
    return <div>{this.render_SessionGroups()}</div>;
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

export default SessionsList;
