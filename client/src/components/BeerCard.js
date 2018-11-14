import React, {Component} from 'react';

class BeerCard extends Component {
	render() {
		const {beer} = this.props;
		return(
			<tbody>
				<tr>
					<td><a href={`beers/${beer.id}`}>{beer.name}</a></td>
					<td>{beer.style}</td>
					<td>{beer.abv}</td>
					<td>{beer.brewery}</td>
				</tr>
				</tbody>
		)
	}
}


export default BeerCard;
