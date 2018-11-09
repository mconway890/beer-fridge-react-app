import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import BeerCard from '../components/BeerCard';
import { removeBeer, upvoteBeer, downvoteBeer, getBeers } from '../actions/beerActions';
import BeerInput from './BeerInput';


class Beers extends Component {

  render() {
    const beers = this.props.beers

    return (
      <div>
        <div className="BeersContainer">
          <h1 className="beerName">Beers</h1>
            {this.props && this.props.beers.map(beer =>
            <BeerCard
            key={beer.id}
            beer={beer} /> )}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { beers: state.beersReducer }
}

export default connect(mapStateToProps, {upvoteBeer, removeBeer, downvoteBeer, getBeers})(Beers);
