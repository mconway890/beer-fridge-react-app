import React, { Component } from 'react';
import { connect } from 'react-redux';
import Beers from './Beers';
import BeerCard from '../components/BeerCard';
import BeerInput from './BeerInput';
import { upvoteBeer } from '../actions/beerActions';
import { fetchBeer } from '../actions/beerActions';

class DisplayBeer extends Component {

  handleClick = () => {
    this.props.upvoteBeer(this.props.beer[0])
  }

  componentDidMount() {
    this.props.fetchBeer(this.props.match.params.beerId);
  }

  render() {
    let beer = this.props.beer[0]
    return (
      <div className="displayBeer">
        <div>
          <h1>{beer.name}</h1>
          <p>{beer.style}</p>
          <p>{beer.brewery}</p>
          <br></br>
          <button beer={beer} upvoteBeer={this.handleClick}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    beer: state.beers
  })
}

export default connect(mapStateToProps, {fetchBeer, upvoteBeer})(DisplayBeer)
