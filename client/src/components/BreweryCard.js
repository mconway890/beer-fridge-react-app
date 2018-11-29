import React from 'react';
import DeleteBrewery from '../containers/DeleteBrewery';
import UpvoteBrewery from '../containers/UpvoteBrewery';
import DownvoteBrewery from '../containers/DownvoteBrewery';
import {Link} from 'react-router-dom';

const BreweryCard = ({brewery, likeBrewery, dislikeBrewery, deleteBrewery}) =>
			<tbody>
				<tr>
					<td><Link to={`breweries/${brewery.id}`}>{brewery.name}</Link></td>
					<td><DeleteBrewery history={brewery.history} brewery={brewery}/></td>
					<td><UpvoteBrewery history={brewery.history} brewery={brewery}/></td>
					<td><DownvoteBrewery history={brewery.history} brewery={brewery}/></td>
					<td>{brewery.votes}</td>
				</tr>
				</tbody>



export default BreweryCard;
