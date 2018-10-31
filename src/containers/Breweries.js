import React, { Component } from 'react';
import { connect } from 'react-redux';

class Breweries extends Component {

  render() {

    let breweries = this.props.breweries.map(brewery => <li key={brewery.id}>{brewery.breweryName}</li>);

    return (
      <div>
        <ul>
          {breweries}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { breweries: state.breweries }
}

export default connect(mapStateToProps)(Breweries);
