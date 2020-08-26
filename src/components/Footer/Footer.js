import React from 'react';

import { UncontrolledTooltip, Button } from 'reactstrap';
import { FaEnvelope } from 'react-icons/fa';
import { GoClippy } from 'react-icons/go';

import { wrapInContainer } from '../utils';

export default function Footer() {
  const groupHandle = 'stanford.cnjc';
  const groupDomain = 'gmail.com';
  const emailPopup = (
    <p>
      Drop us an email:{' '}
      <FaEnvelope color="#8c1313" size="1.5em" id={'EmailLelandStanford'} />
      <UncontrolledTooltip
        autohide={false}
        placement="top-end"
        target={'EmailLelandStanford'}
      >
        {groupHandle + '@' + groupDomain}
        {` `}
        <Button color="link" size="sm">
          <GoClippy
            className="copy-src"
            data-clipboard-text={groupHandle + '@' + groupDomain}
            size="1em"
          />
        </Button>{' '}
      </UncontrolledTooltip>
    </p>
  );

  const content = (
    <>
      <hr />
      <div>
        Questions? Comments? Ideas?{` `}
        {emailPopup}
      </div>
    </>
  );

  return wrapInContainer(content);
}
