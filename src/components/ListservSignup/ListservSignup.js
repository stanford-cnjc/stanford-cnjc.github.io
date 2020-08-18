import React, { Component } from 'react';
import { Container, Button, Row, Col } from 'reactstrap';
import './ListservSignup.css';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { FaCheck } from 'react-icons/fa';
import { RingLoader } from 'react-spinners';

// note: this component is not being updated to a functional component with hooks
// because the availity-reacstrap docs still use class components
class ListservSignup extends Component {
  constructor(props) {
    super(props);

    this.handleValidEmail = this.handleValidEmail.bind(this);
    this.handleInvalidEmail = this.handleInvalidEmail.bind(this);
    this.state = {
      email: false,
      valuesSubmitted: false,
      buttonContent: 'Submit',
      buttonColor: 'primary',
      buttonDisable: false,
    };
  }
  handleValidEmail(event, values) {
    this.setState({ email: values.address, error: false });

    const base =
      'https://docs.google.com/forms/d/e/1FAIpQLScwO2KzgGzU8ZN2Fqzoc36aL3ZdJguYjJbVLaYw7DEABSBblA/formResponse?usp=pp_url';
    const url = base + '&entry.899316489=' + values.newListservEmail;

    this.setState({
      buttonContent: <RingLoader size={25} color={'purple'} />,
      buttonColor: 'secondary',
      buttonDisable: true,
    });
    fetch(url, {
      method: 'POST',
      body: '',
      mode: 'no-cors',
    }).then(data => {
      console.log(data);
      this.setState({
        valuesSubmitted: true,
        buttonColor: 'success',
        buttonDisable: true,
        buttonContent: <FaCheck />,
      });
    });
  }

  handleInvalidEmail(event, errors, values) {
    this.setState({ email: values.email, error: true });
  }

  renderListserveField() {
    return (
      <div>
        <AvForm
          onValidSubmit={this.handleValidEmail}
          onInvalidSubmit={this.handleInvaidSubmit}
        >
          <Row form>
            <Col lg="6">
              <AvField
                name="newListservEmail"
                // label="Add your Stanford email here:"
                type="text"
                placeholder="junior@stanford.edu"
                validate={{
                  required: {
                    value: true,
                    errorMessage: 'A valid email is required',
                  },
                  email: {
                    value: true,
                    errorMessage: 'A valid email is required',
                  },
                  pattern: {
                    value: '^[A-Za-z0-9,_]+@stanford.edu$',
                    errorMessage:
                      'Only stanford.edu email addresses are allowed',
                  },
                }}
              />
            </Col>
            <Col>
              <Button
                type="submit"
                color={this.state.buttonColor}
                disabled={this.state.buttonDisable}
              >
                {this.state.buttonContent}
              </Button>
            </Col>
          </Row>
        </AvForm>
      </div>
    );
  }

  render() {
    return (
      <Container>
        <Row className="vertical-align">
          <Col id="listserv_signup_nopad" xs="12" lg="6">
            <br />
            {this.renderListserveField()}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ListservSignup;
