import React from 'react';
import DeleteBeer from '../containers/DeleteBeer';
import UpvoteBeer from '../containers/UpvoteBeer';

const BeerCard = ({beer, upvoteBeer, downvoteBeer, deleteBeer}) =>
			<tbody>
				<tr>
					<td><a href={`beers/${beer.id}`}>{beer.name}</a></td>
					<td>{beer.style}</td>
					<td>{beer.abv}</td>
					<td>{beer.brewery}</td>
					<td><DeleteBeer history={beer.history} beer={beer}/></td>
					<td><UpvoteBeer history={beer.history} beer={beer}/></td>
				</tr>
				</tbody>



export default BeerCard;
