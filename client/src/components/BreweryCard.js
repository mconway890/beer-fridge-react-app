import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

const BreweryCard = ({ brewery, removeBrewery, upvoteBrewery, downvoteBrewery }) =>
			<div key={brewery.id} className="BreweryCard">
				<a href='breweries/{brewery.id}'>
					<h3 className="card-title">{brewery.breweryName}</h3>
				</a>
				<ButtonGroup bsSize="small">
					<Button bsStyle="success" onClick={() => upvoteBrewery(brewery.id)}>Upvote</Button>
					<Button bsStyle="warning" onClick={() => downvoteBrewery(brewery.id)}>Downvote</Button>
					<Button bsStyle="danger" onClick={() => removeBrewery(brewery.id)}><span aria-hidden="true">&times;</span></Button>
				</ButtonGroup>
				<div>Votes: {brewery.votes}</div>		  </div>
			;

export default BreweryCard;
