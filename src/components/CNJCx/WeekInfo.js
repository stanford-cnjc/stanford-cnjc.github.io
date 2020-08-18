import React, { useState } from 'react';
import {
  Button,
  Collapse,
  ListGroup,
  ListGroupItem,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from 'reactstrap';

import {
  FaGoogle,
  FaLink,
  FaLaptop,
  FaLaptopCode,
  FaYoutube,
  FaPlus,
  FaMinus,
} from 'react-icons/fa';
import './CNJCx.css';

const renderSpeakers = speakers => {
  const imgs = speakers.map(speaker => {
    const speakerImgSrc = require(`../../${speaker.imgSrc}`);
    return (
      <div style={{ marginRight: '5px' }} key={`${speaker.name}_footer_img`}>
        <img className="circle" alt={speaker.img_alt} src={speakerImgSrc} />
      </div>
    );
  });

  return <div style={{ display: 'flex' }}>{imgs}</div>;
};

const renderTopics = topics => {
  const renderedPoints = topics.map(topic => {
    return <ListGroupItem key={`${topic}`}>{topic}</ListGroupItem>;
  });
  return (
    <>
      <h6>Topics Covered</h6>
      <ListGroup>{renderedPoints}</ListGroup>
    </>
  );
};

const renderLinks = links => {
  const iconSize = '1.2em';
  const renderedLinks = links.map(link => {
    let icon = null;
    switch (link.type) {
      case 'video':
        icon = <FaYoutube size={iconSize} />;
        break;
      case 'google_doc':
        icon = <FaGoogle size={iconSize} />;
        break;
      case 'slides':
        icon = <FaLaptop size={iconSize} />;
        break;
      case 'markdown':
        icon = <FaLaptopCode size={iconSize} />;
        break;
      default:
        icon = <FaLink size={iconSize} />;
    }

    return link.url === '' ? (
      <div>
        <Button
          disabled
          color="primary"
          size="sm"
          style={{ marginRight: '5px', marginTop: '5px' }}
        >
          {icon}
          {` `}
          {link.title}
        </Button>
      </div>
    ) : (
      <a
        href={link.url}
        key={link.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          color="primary"
          size="sm"
          style={{ marginRight: '5px', marginTop: '5px' }}
        >
          {icon}
          {` `}
          {link.title}
        </Button>
      </a>
    );
  });

  return (
    <>
      <h6>Links</h6>
      <div className="flexcol">{renderedLinks}</div>
    </>
  );
};

function WeekInfo({ title, date, speakers, topics, links }) {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed(!collapsed);

  const button_text = collapsed ? 'Show More' : 'Show Less';
  const button_icon = collapsed ? <FaPlus /> : <FaMinus />;
  const collapseButton = (
    <Button color="info" size="sm" onClick={toggleCollapsed}>
      {button_icon}
      {` `}
      {button_text}
    </Button>
  );

  return (
    <Card>
      <CardHeader>
        <div className="flexrow">
          <div>
            <h5>{title}</h5>
            <small>{date}</small>
          </div>
          <div>{collapseButton}</div>
        </div>
      </CardHeader>
      <Collapse isOpen={!collapsed}>
        <CardBody>
          <Row>
            <Col lg="8" sm="12">
              {renderTopics(topics)}
            </Col>
            <Col lg="4" sm="12">
              {renderLinks(links)}
            </Col>
          </Row>
          <hr />
          <h6>Session Leaders</h6>
          {renderSpeakers(speakers)}
        </CardBody>
      </Collapse>
    </Card>
  );
}

export default WeekInfo;
