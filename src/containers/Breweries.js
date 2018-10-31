import React, { Component } from 'react';
import { connect } from 'react-redux';
import BreweryCard from '../components/BreweryCard';
import { getBreweries } from '../actions/breweryActions';

class Breweries extends Component {

  ComponentDidMount() {
    this.props.getBreweries()
  }

  render() {
    const { breweries } = this.props;
    const ratedBreweries = breweries.sort(function(a, b) {
            return b.upvotes - a.upvotes;
          })

    return (
      <div className="BreweriesContainer">
        <h1 className="breweryName">Breweries</h1>
          {ratedBreweries.map(brewery => <BreweryCard key={brewery.id} brewery={brewery} /> )}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { breweries: state.breweries }
}

export default connect(mapStateToProps, getBreweries)(Breweries);
