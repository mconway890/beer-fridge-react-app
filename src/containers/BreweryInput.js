import React, { Component } from 'react';
import { addBrewery } from '../actions/breweryActions';
import uuid from 'uuid';
import { connect } from 'react-redux';

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
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <p>
              <input
                type="text"
                onChange={(event) => this.handleOnChange(event)}
                name="breweryName"
                value={this.state.breweryName}
                placeholder="brewery name" />
            </p>
            <button type="submit">Add Brewery</button>
          </form>
        </div>
    );
  }
};

// add arguments to connect as needed
export default connect(null, { addBrewery })(BreweryInput);
