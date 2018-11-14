import React from 'react';

const BeerCard = ({beer, upvoteBeer, downvoteBeer, deleteBeer}) =>
			<tbody>
				<tr>
					<td><a href={`beers/${beer.id}`}>{beer.name}</a></td>
					<td>{beer.style}</td>
					<td>{beer.abv}</td>
					<td>{beer.brewery}</td>
				</tr>
				</tbody>



export default BeerCard;
