import React from 'react';

const BeerCard = ({ beer, removeBeer, upvoteBeer, downvoteBeer }) =>
			<div>
				<a>
					<h3 className="card-title">{beer.name}</h3>
				</a>
				<p>{beer.style} By {beer.breweryName}</p>
				<button onClick={() => upvoteBeer(beer.id)}>Upvote</button>
				<button onClick={() => downvoteBeer(beer.id)}>Downvote</button>
				<button onClick={() => removeBeer(beer.id)}><span aria-hidden="true">&times;</span></button>
				<div>Votes: {beer.votes}</div>
		  </div>
		;


export default BeerCard;
