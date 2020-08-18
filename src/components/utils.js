import React from 'react';
import { Container, Row, Col } from 'reactstrap';

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
