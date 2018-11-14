import React, {Component} from 'react';
import {connect} from 'react-redux';
import {upvoteBeer} from '../actions/beerActions';
import UpvoteBeerButton from '../components/UpvoteBeerButton';

class UpvoteBeer extends Component {

  handleClick = () => {
    this.props.upvoteBeer(this.props.beer.id, this.props.history)
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>
          <UpvoteBeerButton />
        </button>
      </div>
    )
  }
}

export default connect(null, {upvoteBeer})(UpvoteBeer);
