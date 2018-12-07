import React from 'react';
import DeleteBrewery from '../containers/DeleteBrewery';
import UpvoteBrewery from '../containers/UpvoteBrewery';
import DownvoteBrewery from '../containers/DownvoteBrewery';
import {Link} from 'react-router-dom';

const BreweryCard = ({brewery, likeBrewery, dislikeBrewery, deleteBrewery}) =>
			<tbody>
				<tr>
					<td className="tableData"><Link to={`breweries/${brewery.id}`}>{brewery.name}</Link></td>
					<td><DeleteBrewery brewery={brewery}/></td>
					<td><UpvoteBrewery brewery={brewery}/></td>
					<td><DownvoteBrewery brewery={brewery}/></td>
					<td className="tableData">{brewery.votes}</td>
				</tr>
				</tbody>



export default BreweryCard;
