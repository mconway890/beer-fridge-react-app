import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { getBeers } from '../actions/beerActions';

class Beers extends Component {

  ComponentDidMount() {
    this.props.getBeers()
  }

  render() {
    const { recipes, match } = this.props;
    const ratedBeers = beers.sort(function(a, b) {
            return b.upvotes - a.upvotes;
          })

    return (
      <div className="BeersContainer">
        <h1 className="beerName">Beers</h1>
          {ratedBeers.map(beer => <BeerCard key={beer.id} beer={beer} /> )}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { beers: state.beers }
}

export default connect(mapStateToProps)(Beers);
