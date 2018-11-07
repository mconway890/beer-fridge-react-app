import React from 'react';
import {Button, ButtonGroup, Table} from 'react-bootstrap';

const BeerCard = ({ beer, removeBeer, upvoteBeer, downvoteBeer }) =>
			<div>
				<Table striped bordered condensed hover>
			  <thead>
			    <tr>
			      <th>Beer Name</th>
			      <th>Style</th>
			      <th>Brewery</th>
						<th>Rate</th>
						<th>Rating</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <td>{beer.name}</td>
			      <td>{beer.style}</td>
			      <td>{beer.breweryName}</td>
						<td>
						<ButtonGroup bsSize="small">
							<Button bsStyle="success" onClick={() => upvoteBeer(beer.id)}>Upvote</Button>
							<Button bsStyle="warning" onClick={() => downvoteBeer(beer.id)}>Downvote</Button>
							<Button bsStyle="danger" onClick={() => removeBeer(beer.id)}><span aria-hidden="true">&times;</span></Button>
						</ButtonGroup>
						</td>
						<td>Rating: {beer.votes}</td>
			    </tr>
					</tbody>
				</Table>
		  </div>
		;


export default BeerCard;
