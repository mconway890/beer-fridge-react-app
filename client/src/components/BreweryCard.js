import React from 'react';
import DeleteBrewery from '../containers/DeleteBrewery';
import UpvoteBrewery from '../containers/UpvoteBrewery';
import DownvoteBrewery from '../containers/DownvoteBrewery';

const BreweryCard = ({brewery, likeBrewery, dislikeBrewery, deleteBrewery}) =>
			<tbody>
				<tr>
					<td><a href={`breweries/${brewery.id}`}>{brewery.name}</a></td>
					<td><DeleteBrewery history={brewery.history} brewery={brewery}/></td>
					<td><UpvoteBrewery history={brewery.history} brewery={brewery}/></td>
					<td><DownvoteBrewery history={brewery.history} brewery={brewery}/></td>
					<td>{brewery.votes}</td>
				</tr>
				</tbody>



export default BreweryCard;
