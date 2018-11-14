import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import BeerCard from '../components/BeerCard';
import { deleteBeer, upvoteBeer, downvoteBeer, getBeers } from '../actions/beerActions';
import {Table} from 'react-bootstrap';

class Beers extends Component {

  render() {
    //const beers = this.props

    return (
      <div>
        <div className="BeersContainer">
          <h1 className="beerName">Beers</h1>
          <div>
            <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Beer Name</th>
                <th>Style</th>
                <th>ABV</th>
                <th>Brewery</th>
                <th></th>
              </tr>
            </thead>

            {this.props && this.props.beers.map(beer =>
            <BeerCard
            key={beer.id}
            upvoteBeer={upvoteBeer}
            downvoteBeer={downvoteBeer}
            deleteBeer={deleteBeer}
            beer={beer}
             /> )}
            </Table>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { beers: state.beersReducer }
}

export default connect(mapStateToProps, {upvoteBeer, deleteBeer, downvoteBeer, getBeers})(Beers);
