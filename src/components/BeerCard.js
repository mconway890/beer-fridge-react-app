import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

const BeerCard = ({ beer, removeBeer, upvoteBeer, downvoteBeer }) =>
			<div>
				<a>
					<h3 className="card-title">{beer.name}</h3>
				</a>
				<p>{beer.style} By {beer.breweryName}</p>
				<ButtonGroup bsSize="small">
					<Button bsStyle="success" onClick={() => upvoteBeer(beer.id)}>Upvote</Button>
					<Button bsStyle="warning" onClick={() => downvoteBeer(beer.id)}>Downvote</Button>
					<Button bsStyle="danger" onClick={() => removeBeer(beer.id)}><span aria-hidden="true">&times;</span></Button>
				</ButtonGroup>
				<div>Votes: {beer.votes}</div>
		  </div>
		;


export default BeerCard;
