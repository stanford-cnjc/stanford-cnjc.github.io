import React, { Component } from 'react';
import { FaEnvelope, FaGlobeAmericas, FaLinkedin } from 'react-icons/fa';
import { Container, Row, Col, ListGroup, ListGroupItem, } from 'reactstrap';
import moment from 'moment';

class SessionGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'title': props.title,
            'sessions': props.sessions
        }
    }

    render_speakers = speakers => {
        const n_speakers = speakers.length;

        return speakers.map((speaker, i) => {
            // conditional rendering
            var speaker_info = <span>
                <strong>{speaker.name}</strong>
            </span>

            if (speaker.email && !speaker.url) {
                speaker_info = <span>
                    <strong>{speaker.name}</strong>&nbsp;
                    <a href={"mailto:" + speaker.email}>
                        <FaEnvelope color="#8c1515" />
                    </a>
                </span>
            }
            if (!speaker.email && speaker.url) {
                speaker_info = <span>
                    <strong>{speaker.name}</strong>&nbsp;
                    <a href={speaker.url}>
                        <FaGlobeAmericas color="#4d4f53" />
                    </a>
                </span>
            }
            if (speaker.email && speaker.url) {
                var icon = <FaGlobeAmericas color="#4d4f53" />
                if (speaker.url.includes('linkedin')) {
                    icon = <FaLinkedin color="#4d4f53" />
                }
                speaker_info =
                        <span>
                            <strong>{speaker.name}</strong>&nbsp;
                            <a href={"mailto:" + speaker.email}>
                                <FaEnvelope color="#8c1515" />
                            </a>&nbsp;
                            <a href={speaker.url}>
                                {icon}
                            </a>
                        </span>
            }

            let to_render;

            if (i === n_speakers - 1){ // last
                to_render = <span>
                    and {speaker_info}<br/>
                </span>
            } else if (i === n_speakers - 2) { // penultimate
                to_render = <span>
                    {speaker_info}&nbsp;
                </span>
            } else { //all others
                to_render = <span>
                    {speaker_info},&nbsp;
                </span>
            }

            return (
                <span key={speaker.name}>
                    {to_render}
                </span>
            );
        });
    }

    render_sessions = sessions => {
        if (sessions.length === 0) {
            return (
                <div>No sessions to display.</div>
            )
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
                    </div>
                </ListGroupItem>
            );
        });
    }

    render() {
        return (
            <Container>
                <Row className="vertical-align">
                    <Col xs="12" lg="12">
                        <div>
                            <h2>{this.state.title}</h2>
                            <ListGroup>
                                {this.render_sessions(this.state.sessions)}
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SessionGroup;
