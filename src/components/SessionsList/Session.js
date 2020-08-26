import React, { Component, useState } from 'react';
import { ListGroup, ListGroupItem, Button, Badge } from 'reactstrap';
import { FaMinus, FaPlus } from 'react-icons/fa';
import moment from 'moment';
import Popover from 'react-tiny-popover';

import { seriesToColorClass, renderFile, renderSpeakers } from '../utils.js';
import './Session.css';

const renderDate = (dayOfWeek, dateStr) => {
  if (dayOfWeek === 'TBD' || dateStr === 'TBD') {
    return 'TBD';
  } else {
    return (
      <em>
        {dayOfWeek}, {dateStr}
      </em>
    );
  }
};

const convertWeekday = date => {
  return date === 'TBD' ? 'TBD' : moment(date).format('dddd');
};

const convertDate = date => {
  return date === 'TBD' ? 'TBD' : moment(date).format('MMMM Do YYYY');
};

const renderFiles = files => {
  return files.map(file => {
    return <span key={file.url}>{renderFile(file)}</span>;
  });
};

const TooltipBadge = ({ content, className, tooltipText }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <Popover
      content={<div>{tooltipText}</div>}
      position={'left'}
      isOpen={tooltipVisible}
    >
      <div
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        <Badge className={className}>{content}</Badge>
      </div>
    </Popover>
  );
};

function Session({
  title,
  speakers,
  date,
  time,
  location,
  files,
  rsvpLink,
  description,
  series,
}) {
  const [collapsed, setCollapsed] = useState(true);

  speakers.date = date;
  const fontColor = title === 'TBD' ? 'gray' : 'black';
  let dayOfWeek = convertWeekday(date);
  let dateStr = convertDate(date);

  if (dayOfWeek === 'Invalid date') {
    dayOfWeek = date;
    dateStr = date;
  }

  // add a badge if the current date is today and the session is upcoming
  let todayBadge = null;
  let timeDiff = null;
  if (date !== 'TBD') {
    const sessTime = moment(date + ' ' + time, 'YYYY-MM-DD h:mm a');
    timeDiff = sessTime.fromNow();
    if (
      moment(date).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD') &&
      timeDiff.startsWith('in')
    ) {
      let color = 'danger';
      if (timeDiff.endsWith('hours')) {
        color = 'warning';
      }
      todayBadge = <Reminder time={sessTime} color={color} />;
    }
  }

  let resourceHeader = null;
  if (files.length > 0) {
    resourceHeader = (
      <span>
        <br />
        <h6> Session Resources </h6>
      </span>
    );
  }

  let descriptionRender = null;
  if (description) {
    const buttonText = collapsed ? 'Show More' : 'Show Less';
    const buttonIcon = collapsed ? <FaPlus /> : <FaMinus />;
    descriptionRender = (
      <div>
        <div style={{ display: 'flex' }}>
          <div
            className={collapsed ? 'collapsed' : 'expanded'}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div>
            <Button
              color="info"
              size="sm"
              onClick={() => setCollapsed(!collapsed)}
              style={{ width: '8em', marginLeft: '50px' }}
            >
              {buttonText}
              {` `}
              {buttonIcon}
            </Button>
          </div>
        </div>
        <hr />
      </div>
    );
  }

  let foodSignup = null;
  if (rsvpLink) {
    if (timeDiff.startsWith('in')) {
      foodSignup = (
        <span>
          <hr />
          <a href={rsvpLink} target="_blank" rel="noopener noreferrer">
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

  const className = seriesToColorClass(series);
  const seriesBadge = series ? (
    <TooltipBadge
      content={series}
      className={className}
      tooltipText={`Part of the ${series} series`}
    />
  ) : null;

  const filesRender = collapsed ? null : (
    <div>
      {resourceHeader}
      <ListGroup>{renderFiles(files)}</ListGroup>
    </div>
  );

  // build up the pieces
  const topPart = (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h4>
          {title} {todayBadge}
        </h4>
        <h4>{seriesBadge}</h4>
      </div>
      {renderDate(dayOfWeek, dateStr)}
    </>
  );

  const bottomPart = (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>{renderSpeakers(speakers)}</div>
        <div>
          {location}, {time} (PT)
        </div>
      </div>
      {filesRender}
      {foodSignup}
    </>
  );

  return (
    <span key={date + title}>
      <ListGroupItem>
        <div className={fontColor}>
          {topPart}
          {descriptionRender}
          {bottomPart}
        </div>
      </ListGroupItem>
      <br />
    </span>
  );
}

class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment(this.props.time, 'YYYY-MM-DD h:mm a').fromNow(),
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
      time: moment(this.props.time, 'YYYY-MM-DD h:mm a').fromNow(),
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

export default Session;
