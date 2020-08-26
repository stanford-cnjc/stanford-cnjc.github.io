import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { FaGithub } from 'react-icons/fa';

import './MenuBar.css';

import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavLink,
} from 'reactstrap';

export default function MenuBar() {
  // create a piece of state, 'isOpen' and a method to update that state, 'sestIsOpen'
  const [isOpen, setIsOpen] = useState(false);

  // create a function, 'toggleOpen', that sets isOpen to its boolean inverse
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar dark expand="md" className="menuBar">
        <LinkContainer to="/">
          <NavbarBrand>Stanford CNJC</NavbarBrand>
        </LinkContainer>
        <NavbarToggler onClick={toggleOpen} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <LinkContainer to="/About">
              <NavLink>About</NavLink>
            </LinkContainer>
            <LinkContainer to="/PresentationSignup">
              <NavLink>Presentation Signup</NavLink>
            </LinkContainer>
            <LinkContainer to="/CNJCx">
              <NavLink>CNJCx: Practical Python</NavLink>
            </LinkContainer>
            <NavLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/stanford-cnjc/cnjc-code"
            >
              <FaGithub /> Code
            </NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
