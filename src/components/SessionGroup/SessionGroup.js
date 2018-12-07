import React, { Component } from 'react';
import {
  FaImage,
  FaEnvelope,
  FaGlobeAmericas,
  FaLinkedin,
  FaFilePowerpoint,
  FaFile,
  FaFilePdf,
  FaLink,
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
} from 'reactstrap';
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
      return <span key={speaker.name}>{to_render}</span>;
    });
  };

  render_file = file => {
    const url = file.url;

    const size = '2em';
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
    } else if (url.startsWith('http')) {
      icon = <FaLink size={size} />;
    }

    return (
      <ListGroupItem className="file_download_link">
        <a href={url} download="">
          {icon}
          {` `}
          {file.name}
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
      return (
        <span key={session.date}>
          <ListGroupItem>
            <div className={font_color}>
              <h4>
                {session.title} {today_badge}
              </h4>
              {day_of_week}, {date_str}
              <hr />
              {this.render_speakers(session.speakers)}
              {session.location}, {session.time}
              <br />
              <br />
              <ListGroup>{this.render_files(session.files)}</ListGroup>
            </div>
          </ListGroupItem>
          <br />
        </span>
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

export default SessionGroup;
