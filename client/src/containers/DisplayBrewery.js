import React from 'react';
import { connect } from 'react-redux';
import {deleteBrewery} from '../actions/breweryActions';


const DisplayBrewery= ({ brewery}) =>
  <div className="displayBrewery">
    <div className="breweryShow">
      <h1>{brewery.name}</h1>
      <p>{brewery.review}</p>
    </div>
  </div>
  // mapStateToProps specifies which slice of state to provide to component
  const mapStateToProps = (state, breweryProps) => {
    // eslint-disable-next-line
    const brewery= state.breweriesReducer.find(brewery=> brewery.id == breweryProps.match.params.breweryId)
    if (brewery) {
      return {brewery}
    } else {
      return {brewery: {}}
    }
  }

export default connect(mapStateToProps, {deleteBrewery})(DisplayBrewery)
