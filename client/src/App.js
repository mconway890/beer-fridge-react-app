import React, { Component } from 'react';
import BeerInput from './containers/BeerInput';
import Beers from './containers/Beers';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DisplayBeer from './containers/DisplayBeer';
import { connect } from 'react-redux';
import { getBeers } from './actions/beerActions';

class App extends Component {

  componentDidMount() {
    this.props.getBeers()
  }

  render() {
    return (
      <div className="App">
        <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/beers/new" component={BeerInput}/>
          <Route exact path="/beers" component={Beers}/>
          <Route exact path="/beers/:beerId" component={DisplayBeer} />
          <Route exact path="/about" component={About}/>
        </div>
        </Router>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return({
    beers: state.beersReducer
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    getBeers: () => {
      let action = getBeers()
      dispatch(action)
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
