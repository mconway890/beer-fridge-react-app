import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import BreweryCard from '../components/BreweryCard';
import { deleteBrewery, likeBrewery, dislikeBrewery, getBreweries } from '../actions/breweryActions';
import {Table} from 'react-bootstrap';

class Breweries extends Component {

  render() {
    //const breweries = this.props

    return (
      <div>
        <div className="BreweriesContainer">
          <h1 className="breweryName">Breweries</h1>
          <div>
            <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Brewery Name</th>
              </tr>
            </thead>

            {this.props && this.props.breweries.map(brewery=>
            <BreweryCard
            key={brewery.id}
            likeBrewery={likeBrewery}
            dislikeBrewery={dislikeBrewery}
            deleteBrewery={deleteBrewery}
            brewery={brewery}
             /> )}
            </Table>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { breweries: state.breweriesReducer }
}

export default connect(mapStateToProps, {likeBrewery, deleteBrewery, dislikeBrewery, getBreweries})(Breweries);
