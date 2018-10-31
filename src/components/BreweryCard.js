import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { upvoteBreweries } from '../actions/breweryActions';

class BreweriesCard extends Component {

	render() {

		const { brewery, breweries } = this.props;

		return (
			<div key={brewery.id} className="BreweriesCard">
				<a href={`breweries/${brewery.id}`}>
					<h1 className="card-title">{brewery.name}</h1>
				</a>
		    <br></br>
				<button onClick={() => {this.props.upvoteBreweries(brewery, breweries)}}>Upvote</button> {this.props.breweries.upvotes}
		  </div>
		)
	}
}


const mapStateToProps = state => {
	return {
		breweries: state.breweries
	}
}



export default connect(mapStateToProps, {upvoteBreweries})(BreweriesCard);
