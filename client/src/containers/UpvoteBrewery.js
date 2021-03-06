import React, {Component} from 'react';
import {connect} from 'react-redux';
import {likeBrewery} from '../actions/breweryActions';
import UpvoteBreweryButton from '../components/UpvoteBreweryButton';

class UpvoteBrewery extends Component {

  handleClick = () => {
    this.props.likeBrewery(this.props.brewery.id)
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>
          <UpvoteBreweryButton />
        </button>
      </div>
    )
  }
}

// pass null as first argument to trigger action without mapStateToProps
export default connect(null, {likeBrewery})(UpvoteBrewery);
