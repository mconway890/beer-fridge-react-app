import React, { Component } from 'react';
import { connect } from 'react-redux';

class Beers extends Component {

  render() {

    let beers = this.props.beers.map(beer => <li key={beer.id}>{beer.name} from {beer.breweryName}</li>);

    return (
      <div>
        <ul>
          {beers}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { beers: state.beers }
}

export default connect(mapStateToProps)(Beers);
