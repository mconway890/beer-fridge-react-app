import React, { Component } from 'react';
import { addBrewery } from '../actions/breweryActions';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, ControlLabel, Col, Form } from 'react-bootstrap';

export class BreweryInput extends Component {

  state = {
    // set up controlled form with internal state
    breweryName: '',
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
    const brewery = {...this.state, id: uuid() };
    // pass beer object to action creator
    this.props.addBrewery(brewery);
    this.setState({
      breweryName: ''
    });
  }

  render() {
    return(
      <div>
        <h2>Add New Brewery</h2>
        <Form horizontal onSubmit={(event) => this.handleOnSubmit(event)}>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Brewery Name
            </Col>
            <Col sm={10}>
          <FormControl
          name="breweryName"
          type="text"
          placeholder="Brewery Name"
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
export default connect(null, { addBrewery })(BreweryInput);
