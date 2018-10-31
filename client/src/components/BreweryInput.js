import React, { Component } from 'react';
import { addBrewery } from '../actions/breweryActions';
import uuid from 'uuid';
import { connect } from 'react-redux';

export class BreweryInput extends Component {

  state = {
    breweryName: '',
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleOnSubmit = event => {
    event.preventDefault();
    const brewery = {...this.state, id: uuid() };
    this.props.addBrewery(brewery);
    this.setState({
      breweryName: ''
    });
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="breweryName"
            value={this.state.breweryName}
            placeholder="brewery name" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

export default connect(null, { addBrewery })(BreweryInput);
