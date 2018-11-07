import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import BeerCard from '../components/BeerCard';
import { removeBeer, upvoteBeer, downvoteBeer } from '../actions/beerActions';

class Beers extends Component {

  render() {
    const { beers, removeBeer, upvoteBeer, downvoteBeer } = this.props;

    return (
      <div className="BeersContainer">
        <h1 className="beerName">Beers</h1>
          {beers.map(beer =>
          <BeerCard
          key={beer.id}
          upvoteBeer={upvoteBeer}
          downvoteBeer={downvoteBeer}
          removeBeer={removeBeer}
          beer={beer} /> )}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { beers: state.beers }
}

export default connect(mapStateToProps, {upvoteBeer, removeBeer, downvoteBeer})(Beers);
