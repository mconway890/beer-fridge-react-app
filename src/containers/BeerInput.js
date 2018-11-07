import React, { Component } from 'react';
import { addBeer } from '../actions/beerActions';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

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
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>
            <input
              type="text"
              onChange={(event) => this.handleOnChange(event)}
              name="name"
              value={this.state.name}
              placeholder="beer name" />
          </p>
          <p>
            <input
              type="text"
              onChange={(event) => this.handleOnChange(event)}
              name="style"
              value={this.state.style}
              placeholder="style" />
          </p>
          <p>
            <input
              type="text"
              onChange={(event) => this.handleOnChange(event)}
              name="breweryName"
              value={this.state.breweryName}
              placeholder="brewery" />
          </p>
          <Button type="submit" bsStyle="primary" bsSize="xsmall">Add Beer</Button>
        </form>
      </div>
    );
  }
};

// add arguments to connect as needed
export default connect(null, { addBeer })(BeerInput);
