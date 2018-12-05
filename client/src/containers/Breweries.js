import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import BreweryCard from '../components/BreweryCard';
import { deleteBrewery, likeBrewery, dislikeBrewery, getBreweries } from '../actions/breweryActions';
import {Table} from 'react-bootstrap';
import { Button,Modal } from 'semantic-ui-react';
import BreweryInput from './BreweryInput';

class Breweries extends Component {

  render() {
    //const breweries = this.props

    return (
      <div>
        <div className="BreweriesContainer">
          <h1 className="breweryName">Breweries</h1>
          <Modal trigger={<Button className="styledButton" size='mini'>Add Brewery</Button>} centered={false}>
          <Modal.Header>Add New Brewery</Modal.Header>
          <Modal.Content image>
            <BreweryInput />
          </Modal.Content>
          </Modal>
          <div>
            <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Brewery Name</th>
                <th>Remove</th>
                <th>Like</th>
                <th>Dislike</th>
                <th>Votes</th>
              </tr>
            </thead>

            {this.props && this.props.breweries.map(brewery =>
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
// mapStateToProps specifies which slice of state to provide to component
const mapStateToProps = state => {
  return { breweries: state.breweriesReducer }
}

export default connect(mapStateToProps, {likeBrewery, deleteBrewery, dislikeBrewery, getBreweries})(Breweries);
