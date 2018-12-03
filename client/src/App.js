import React, { Component } from 'react';
import BeerInput from './containers/BeerInput';
import BreweryInput from './containers/BreweryInput';
import Beers from './containers/Beers';
import Breweries from './containers/Breweries';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DisplayBeer from './containers/DisplayBeer';
import DisplayBrewery from './containers/DisplayBrewery';
import { connect } from 'react-redux';
import { getBeers } from './actions/beerActions';
import { getBreweries } from './actions/breweryActions';

class App extends Component {
// componentDidMount called after render() - sets up async process (fetching)
  componentDidMount() {
    this.props.getBreweries()
    this.props.getBeers()
  }
// App parent renders child component Navbar
  render() {
    return (
      <div className="App">
        <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/beers/new" component={BeerInput}/>
          <Route exact path="/beers" component={Beers}/>
          <Route exact path="/breweries/new" component={BreweryInput}/>
          <Route exact path="/breweries" component={Breweries}/>
          <Route exact path="/beers/:beerId" component={DisplayBeer} />
          <Route exact path="/breweries/:breweryId" component={DisplayBrewery}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
        </div>
        </Router>
      </div>
    );
  }
};

// state => new store object
// how component gets info from the store, maps to props object
const mapStateToProps = (state) => {
  return({
    beers: state.beersReducer,
    breweries: state.breweriesReducer
  })
}

// dispatch => function - connects actions to reducers
// how we trigger store changes and render new store object
// const mapDispatchToProps = (dispatch) => {
//   return({
//     getBeers: () => {
//       let action = getBeers()
//       dispatch(action)
//     }
//   })
// }

// connects components to store
// maps function to props object - return value of the object passed into dispatch
export default connect(mapStateToProps, {getBeers, getBreweries})(App);
