import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteBeer} from '../actions/beerActions';
import DeleteBeerButton from '../components/DeleteBeerButton';

class DeleteBeer extends Component {

  handleClick = () => {
    //console.log('A');
    this.props.deleteBeer(this.props.beer.id)
    //console.log('B');
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>
          <DeleteBeerButton />
        </button>
      </div>
    )
  }
}

export default connect(null, {deleteBeer})(DeleteBeer);
