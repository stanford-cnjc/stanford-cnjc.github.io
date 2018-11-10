import React, { Component } from 'react';
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

    render_sessions = sessions => {
        if (sessions.length === 0){
            return (
                <div>No sessions to display.</div>
            )
        }
        return sessions.map(session => {
            return (
                <ListGroupItem key={session.date}>
                    <div>
                        <h5>{session.title}</h5>
                        {moment(session.date).format('MM/DD/YYYY')}
                        <p>Presented by {session.speaker}</p>
                        {session.location}, {session.time}
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
