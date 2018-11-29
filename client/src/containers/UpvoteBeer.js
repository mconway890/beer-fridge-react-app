import React, {Component} from 'react';
import {connect} from 'react-redux';
import {likeBeer} from '../actions/beerActions';
import UpvoteBeerButton from '../components/UpvoteBeerButton';

class UpvoteBeer extends Component {

  handleClick = () => {
    this.props.likeBeer(this.props.beer.id, this.props.history)
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

// pass null as first argument to trigger action without mapStateToProps
export default connect(null, {likeBeer})(UpvoteBeer);
