import React, { Component } from 'react';
import { addBeer } from '../actions';
import uuid from 'uuid';
import { connect } from 'react-redux';

export class BeerInput extends Component {

  state = {
    name: '',
    style: '',
    brewery: ''
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
      brewery: ''
    });
  }

  render() {
    return(
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
            name="brewery"
            value={this.state.brewery}
            placeholder="brewery" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

export default connect(null, { addBeer })(BeerInput);
