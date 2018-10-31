import React, { Component } from 'react';
import { connect } from 'react-redux';
import Beers from './Beers';
import BeerCard from '../components/BeerCard';
import BeerInput from './BeerInput';
import { upvoteBeer } from '../actions/beerActions';

class DisplayBeer extends Component {

  handleClick = () => {
    this.props.upvoteBeer(this.props.beer[0])
  }

  componentDidMount() {
    this.props.fetchBeers(this.props.match.params.beerId);
  }

  render() {
    return (
      <div className="displayBeer">
        <h1>{beer.name}</h1>
        <p>{beer.style}</p>
        <p>{beer.brewery}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    beer: state.beers
  })
}

export default connect(mapStateToProps, {getBeer})(DisplayBeer)
