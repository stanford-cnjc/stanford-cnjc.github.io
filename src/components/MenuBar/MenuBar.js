import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import './MenuBar.css';

import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavLink,
} from 'reactstrap';

class MenuBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar dark expand="md" className="cardinal">
          <LinkContainer to="/">
            <NavbarBrand>Stanford CNJC</NavbarBrand>
          </LinkContainer>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <LinkContainer to="/About">
                <NavLink>About</NavLink>
              </LinkContainer>
              <LinkContainer to="/PresentationGuidelines">
                <NavLink>Presentation Guidelines</NavLink>
              </LinkContainer>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MenuBar;
