import React, { Component } from 'react';

const BreweryCard = ({ brewery, removeBrewery, upvoteBrewery, downvoteBrewery }) =>
			<div key={brewery.id} className="BreweryCard">
				<a>
					<h3 className="card-title">{brewery.breweryName}</h3>
				</a>
				<button onClick={() => upvoteBrewery(brewery.id)}>Upvote</button>
				<button onClick={() => downvoteBrewery(brewery.id)}>Downvote</button>
				<button onClick={() => removeBrewery(brewery.id)}><span aria-hidden="true">&times;</span></button>
				<div>Votes: {brewery.votes}</div>		  </div>
			;

export default BreweryCard;
