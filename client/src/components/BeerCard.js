import React from 'react';
import DeleteBeer from '../containers/DeleteBeer';
import UpvoteBeer from '../containers/UpvoteBeer';
import DownvoteBeer from '../containers/DownvoteBeer';
import {Link} from 'react-router-dom';

const BeerCard = ({beer, likeBeer, dislikeBeer, deleteBeer}) =>
			<tbody>
				<tr>
					<td className="tableData"><Link to={`beers/${beer.id}`}>{beer.name}</Link></td>
					<td>{beer.style}</td>
					<td>{beer.abv}</td>
					<td>{beer.brewery}</td>
					<td><DeleteBeer beer={beer}/></td>
					<td><UpvoteBeer beer={beer}/></td>
					<td><DownvoteBeer beer={beer}/></td>
					<td className="tableData">{beer.votes}</td>
				</tr>
				</tbody>



export default BeerCard;
