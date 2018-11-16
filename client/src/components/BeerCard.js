import React from 'react';
import DeleteBeer from '../containers/DeleteBeer';
import UpvoteBeer from '../containers/UpvoteBeer';
import DownvoteBeer from '../containers/DownvoteBeer';

const BeerCard = ({beer, likeBeer, dislikeBeer, deleteBeer}) =>
			<tbody>
				<tr>
					<td><a href={`beers/${beer.id}`}>{beer.name}</a></td>
					<td>{beer.style}</td>
					<td>{beer.abv}</td>
					<td>{beer.brewery}</td>
					<td><DeleteBeer history={beer.history} beer={beer}/></td>
					<td><UpvoteBeer history={beer.history} beer={beer}/></td>
					<td><DownvoteBeer history={beer.history} beer={beer}/></td>
					<td>{beer.votes}</td>
				</tr>
				</tbody>



export default BeerCard;
