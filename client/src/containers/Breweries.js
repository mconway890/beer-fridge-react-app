import React, { Component } from 'react';
import { connect } from 'react-redux';
import BreweryCard from '../components/BreweryCard';
import { removeBrewery, upvoteBrewery, downvoteBrewery } from '../actions/breweryActions';

class Breweries extends Component {

  render() {
    const { breweries, removeBrewery, upvoteBrewery, downvoteBrewery } = this.props;

    return (
      <div className="BreweriesContainer">
        <h1 className="breweryName">Breweries</h1>
          {breweries.map(brewery =>
          <BreweryCard
          key={brewery.id}
          upvoteBrewery={upvoteBrewery}
          downvoteBrewery={downvoteBrewery}
          removeBrewery={removeBrewery}
          brewery={brewery} /> )}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { breweries: state.breweries }
}

export default connect(mapStateToProps, {upvoteBrewery, removeBrewery, downvoteBrewery})(Breweries);
