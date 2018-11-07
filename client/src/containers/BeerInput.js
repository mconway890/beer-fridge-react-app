import React, { Component } from 'react';
import { addBeer } from '../actions/beerActions';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, ControlLabel, Col, Form } from 'react-bootstrap';

export class BeerInput extends Component {

  state = {
    // set up controlled form with internal state
    name: '',
    style: '',
    breweryName: ''
  }

  handleOnChange = event => {
    // handle updating component state
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleOnSubmit = event => {
    // handle form submit
    event.preventDefault();
    // create beer object from state
    const beer = {...this.state, id: uuid() };
    // pass beer object to action creator
    this.props.addBeer(beer);
    // update component state to return to default state
    this.setState({
      name: '',
      style: '',
      breweryName: ''
    });
  }

  render() {
    return(
      <div>
        <h2>Add New Beer</h2>
        <Form horizontal onSubmit={(event) => this.handleOnSubmit(event)}>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
          <FormControl
          name="name"
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={(event) => this.handleOnChange(event)}
           />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Style
            </Col>
            <Col sm={10}>
          <FormControl
          name="style"
          type="text"
          placeholder="Style"
          value={this.state.style}
          onChange={(event) => this.handleOnChange(event)}
          />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Brewery
            </Col>
            <Col sm={10}>
          <FormControl
          name="breweryName"
          type="brewery"
          placeholder="Brewery"
          value={this.state.breweryName}
          onChange={(event) => this.handleOnChange(event)}
           />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">Submit</Button>
          </Col>
        </FormGroup>
        </Form>
      </div>
    );
  }
};

// add arguments to connect as needed
export default connect(null, { addBeer })(BeerInput);
