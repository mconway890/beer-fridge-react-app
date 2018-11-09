import React from 'react';
import {Table} from 'react-bootstrap';

const BeerCard = ({ beer }) =>
			<div>
				<Table striped bordered condensed hover>
			  <thead>
			    <tr>
			      <th>Beer Name</th>
			      <th>Style</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <td><a href={`beers/${beer.id}`}>{beer.name}</a></td>
			      <td>{beer.style}</td>
			    </tr>
					</tbody>
				</Table>
		  </div>
		;


export default BeerCard;
