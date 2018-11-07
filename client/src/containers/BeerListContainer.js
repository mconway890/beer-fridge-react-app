import React, { Component } from 'react';
import BeerSearch from '../components/BeerSearch';
import BeerList from '../components/BeerList';

class BeerListContainer extends React.Component {
  state = {
    beers: []
  }

  render(){
    return (
      <div>
        <BeerSearch fetchBeers={this.fetchBeers} />
        <BeerList beers={this.state.beers} />
      </div>
    )
  }

  fetchBeers = (value = "ipa") => {
    const api_key = '83fd11753862c400d64767312b511f3f';
    const url = `http://api.brewerydb.com/v2/search?q=${this.state.term}&key=${api_key}`
    fetch(url)
    .then(response => response.json())
    .then(apiResponse => {
      console.log(apiResponse);
      this.setState({ breweries: apiResponse.data})
    })
  }



  componentDidMount() {
    this.fetchBeers()
  }
}

export default BeerListContainer;
