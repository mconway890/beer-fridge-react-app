import React, { Component } from 'react';
import { addBeer } from '../actions/beerActions';
import uuid from 'uuid';
import { connect } from 'react-redux';

export class BeerInput extends Component {

  state = {
    name: '',
    style: '',
    breweryName: ''
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleOnSubmit = event => {
    event.preventDefault();
    const beer = {...this.state, id: uuid() };
    this.props.addBeer(beer);
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
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default connect(null, { addBeer })(BeerInput);
