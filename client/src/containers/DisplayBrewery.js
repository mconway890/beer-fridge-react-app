import React, { Component } from 'react';

class DisplayBrewery extends Component {

  handleClick = () => {
    this.props.upvoteBrewery(this.props.brewery[0])
  }

  componentDidMount() {
    this.props.fetchBrewery(this.props.match.params.breweryId);
  }

  render() {
    let brewery = this.props.brewery[0]
    return (
      <div className="displayBrewery">
        <div>
          <h1>{brewery.breweryName}</h1>
          <br></br>
          <button brewery={brewery} upvoteBrewery={this.handleClick}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    brewery: state.breweries
  })
}

export default connect(mapStateToProps, {fetchBrewery, upvoteBrewery})(DisplayBrewery)
