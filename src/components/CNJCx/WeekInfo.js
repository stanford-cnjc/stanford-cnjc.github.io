import React from 'react';
import {
  Button,
  ListGroup,
  ListGroupItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from 'reactstrap';

import { FaGoogle, FaLink, FaYoutube } from 'react-icons/fa';

const renderSpeakers = speakers => {
  const imgs = speakers.map(speaker => {
    const speaker_img_src = require(`../../${speaker.img_src}`);
    return (
      <div style={{ marginRight: '5px' }} key={`${speaker.name}_footer_img`}>
        <img className="circle" alt={speaker.img_alt} src={speaker_img_src} />
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
      default:
        icon = <FaLink size={iconSize} />;
    }

    return (
      <a href={link.url} key={link.url}>
        <Button
          color="primary"
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
      <div>{renderedLinks}</div>
    </>
  );
};

function WeekInfo({ title, speakers, topics, links }) {
  return (
    <Card style={{ height: '500px', overflow: 'scroll' }}>
      <CardHeader>
        <h5>{title}</h5>
      </CardHeader>
      <CardBody>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>
            {renderTopics(topics)}
            <hr />
          </div>
          <div>{renderLinks(links)}</div>
        </div>
      </CardBody>
      <CardFooter>
        <h6>Session Leaders</h6>
        {renderSpeakers(speakers)}
      </CardFooter>
    </Card>
  );
}

export default WeekInfo;