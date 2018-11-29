import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dislikeBeer} from '../actions/beerActions';
import DownvoteBeerButton from '../components/DownvoteBeerButton';

class DownvoteBeer extends Component {

  handleClick = () => {
    this.props.dislikeBeer(this.props.beer.id, this.props.history)
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>
          <DownvoteBeerButton />
        </button>
      </div>
    )
  }
}
// pass null as first argument to trigger action without mapStateToProps
export default connect(null, {dislikeBeer})(DownvoteBeer);
