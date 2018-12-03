import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import BeerCard from '../components/BeerCard';
import { deleteBeer, likeBeer, dislikeBeer, getBeers } from '../actions/beerActions';
import {Table} from 'react-bootstrap';
import { Button,Modal } from 'semantic-ui-react'
import BeerInput from './BeerInput'

class Beers extends Component {

  render() {
    //const beers = this.props

    return (
      <div>
        <div className="BeersContainer">
          <h1 className="beerName">Beers</h1>
          <Modal trigger={<Button size='mini'>Add Beer</Button>} centered={false}>
          <Modal.Header>Add New Beer</Modal.Header>
          <Modal.Content image>
            <BeerInput />
          </Modal.Content>
          </Modal>
          <div>
            <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Beer Name</th>
                <th>Style</th>
                <th>ABV</th>
                <th>Brewery</th>
                <th>Remove</th>
                <th>Like</th>
                <th>Dislike</th>
                <th>Votes</th>
              </tr>
            </thead>

            {this.props && this.props.beers.map(beer =>
            <BeerCard
            key={beer.id}
            likeBeer={likeBeer}
            dislikeBeer={dislikeBeer}
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
// mapStateToProps specifies which slice of state to provide to component
const mapStateToProps = state => {
  return { beers: state.beersReducer }
}

export default connect(mapStateToProps, {likeBeer, deleteBeer, dislikeBeer, getBeers})(Beers);
