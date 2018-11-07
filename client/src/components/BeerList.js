import React from 'react';

const BeerList = props => {
    console.log(props);
    return (
      <div>
        <ul>
          <li>{props.beers.map(beer => <img key={beer.url} src={beer.url} alt="beer"/>)}</li>
        </ul>
      </div>
    )
}

export default BeerList;
