import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteBrewery} from '../actions/breweryActions';
import DeleteBreweryButton from '../components/DeleteBreweryButton';

class DeleteBrewery extends Component {

  handleClick = () => {
    this.props.deleteBrewery(this.props.brewery.id, this.props.history)
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>
          <DeleteBreweryButton />
        </button>
      </div>
    )
  }
}

export default connect(null, {deleteBrewery})(DeleteBrewery);
