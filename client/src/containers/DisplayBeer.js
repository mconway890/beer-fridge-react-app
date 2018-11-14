import React from 'react';
import { connect } from 'react-redux';
import {deleteBeer } from '../actions/beerActions';

const DisplayBeer = ({ beer }) =>
  <div className="displayBeer">
    <div>
      <h1>{beer.name}</h1>
      <p>{beer.style}</p>
      <p>{beer.abv}</p>
      <p>{beer.brewery}</p>
      <p>{beer.description}</p>
      <br></br>
    </div>
  </div>

  const mapStateToProps = (state, beerProps) => {
    // eslint-disable-next-line
    const beer = state.beersReducer.find(beer => beer.id == beerProps.match.params.beerId)
    if (beer) {
      return {beer}
    } else {
      return {beer: {}}
    }
  }

export default connect(mapStateToProps, {deleteBeer})(DisplayBeer)
