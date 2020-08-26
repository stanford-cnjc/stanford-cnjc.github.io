import React from 'react';
import { Button, Container, Row, Col, UncontrolledTooltip } from 'reactstrap';

import {
  FaEnvelope,
  FaGlobeAmericas,
  FaLinkedin,
  FaImage,
  FaFilePowerpoint,
  FaFile,
  FaFilePdf,
  FaLink,
  FaGithub,
} from 'react-icons/fa';

import moment from 'moment';
import { GoClippy } from 'react-icons/go';

export function seriesToColorClass(seriesStr) {
  switch (seriesStr.toLowerCase()) {
    case 'cnjcx':
      return 'cnjcx-bg';
    default:
      return null;
  }
}

export function wrapInContainer(content) {
  return (
    <Container>
      <Row>
        <Col>{content}</Col>
      </Row>
    </Container>
  );
}

export function pastSort(a, b) {
  return -moment(a.date).diff(moment(b.date));
}

export function tbdUpcomingSort(a, b) {
  if (a.date === 'TBD') {
    return 2; // if this is 0, chrome/firefox give diff results because the sort is unstable
  } else if (b.date === 'TBD') {
    return -1;
  } else {
    return moment(a.date).diff(moment(b.date));
  }
}

export function renderFile(file) {
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
    <>
      <span className="file_download_link">
        <a href={url} target="_blank" rel="noopener noreferrer" download="">
          {icon}
          {` `}
          {file.name}
        </a>
      </span>
      <br />
    </>
  );
}

export function renderSpeakers(speakers) {
  const renderURL = speaker => {
    let icon = speaker.url.includes('linkedin') ? (
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

  const renderEmail = speaker => {
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

  const renderSpeaker = speaker => {
    return (
      <span>
        <strong>{speaker.name}</strong>
        {` `}
        {renderEmail(speaker)}
        {renderURL(speaker)}
      </span>
    );
  };

  return speakers.map((speaker, i) => {
    speaker.date = speakers.date;
    const speakerInfo = renderSpeaker(speaker);
    let toRender;

    if (i === speakers.length - 1) {
      // last
      if (speakers.length === 1) {
        toRender = (
          <span>
            {speakerInfo}
            <br />
          </span>
        );
      } else {
        toRender = (
          <span>
            and {speakerInfo}
            <br />
          </span>
        );
      }
    } else if (i === speakers.length - 2) {
      // penultimate
      toRender = (
        <span>
          {speakerInfo}
          {` `}
        </span>
      );
    } else {
      //all others
      toRender = (
        <span>
          {speakerInfo},{` `}
        </span>
      );
    }
    return <span key={speaker.name + speaker.date}>{toRender}</span>;
  });
}
