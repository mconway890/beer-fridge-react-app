import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import BeerCard from '../components/BeerCard';
import { deleteBeer, likeBeer, dislikeBeer, getBeers } from '../actions/beerActions';
import {Table} from 'react-bootstrap';
import { Button,Modal } from 'semantic-ui-react'
import BeerInput from './BeerInput'

class Beers extends Component {
  constructor(props) {
    super(props);

    // Define the initial state:
    this.state = {
      beers: [],
      hasBeenClicked: false
    };
  }

  componentWillReceiveProps(props){
    if (props.beers.length > 0) {
      this.setState({
        beers: props.beers
      })
    }
  }

  sortAscending = () => {
    const { beers } = this.state;
    beers.sort(function (a,b) {
      return a.votes - b.votes
    })
    this.setState({ beers, hasBeenClicked:true })
  }

  sortDescending = () => {
    const { beers } = this.state;
    beers.sort(function (a,b) {
      return b.votes - a.votes
    })
    this.setState({ beers, hasBeenClicked:true })
  }

  handleClick = (beers) => {
    // Update state here
    //debugger;
    const sortedBeers = this.state.beers.sort(function (a,b) {
      return b.votes - a.votes
    })
    console.log(sortedBeers)
    this.setState({
      beers: sortedBeers,
      hasBeenClicked: true
    })
  }

  render() {
    if (this.state.hasBeenClicked){
      return (
        <div>
          <div className="BeersContainer">
            <h1 className="beerName">Beers</h1>
            <Button onClick={this.sortAscending} className="styledButton" size='mini'>Sort ASC</Button>
            <Modal trigger={<Button className="styledButton" size='mini'>Add Beer</Button>} centered={false}>
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

              {this.props && this.state.beers.map(beer =>
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
    } else {
      return (
        <div>
          <div className="BeersContainer">
            <h1 className="beerName">Beers</h1>
            <Button onClick={this.sortDescending} className="styledButton" size='mini'>Sort DESC</Button>
            <Modal trigger={<Button className="styledButton" size='mini'>Add Beer</Button>} centered={false}>
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

              {this.props && this.state.beers.map(beer =>
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
  }
};
// mapStateToProps specifies which slice of state to provide to component
const mapStateToProps = state => {
  return { beers: state.beersReducer }
}

export default connect(mapStateToProps, {likeBeer, deleteBeer, dislikeBeer, getBeers})(Beers);
