import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { upvoteBeer } from '../actions/beerActions';

class BeerCard extends Component {

	render() {

		const { beer, beers } = this.props;

		return (
			<div key={beer.id} className="BeerCard">
				<a href={`beers/${beer.id}`}>
					<h3 className="card-title">{beer.name}</h3>
				</a>
				<p>{beer.style} By {beer.breweryName}</p>
				<button onClick={() => {this.props.upvoteBeer(beer, beers)}}>Upvote</button> {this.props.beers.upvotes}
		  </div>
		)
	}
}


const mapStateToProps = state => {
	return {
		beers: state.beers
	}
}



export default connect(mapStateToProps, {upvoteBeer})(BeerCard);
