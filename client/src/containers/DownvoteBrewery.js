import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dislikeBrewery} from '../actions/breweryActions';
import DownvoteBreweryButton from '../components/DownvoteBreweryButton';

class DownvoteBrewery extends Component {

  handleClick = () => {
    this.props.dislikeBrewery(this.props.brewery.id, this.props.history)
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>
          <DownvoteBreweryButton />
        </button>
      </div>
    )
  }
}

export default connect(null, {dislikeBrewery})(DownvoteBrewery);
