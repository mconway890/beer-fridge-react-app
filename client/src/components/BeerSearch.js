import React, {Component} from 'react';
import Client from '../Client';

const MATCHING_ITEM_LIMIT = 25;

class BeerSearch extends Component {
  state = {
    beers: [],
    showRemoveIcon: false,
    searchValue: ''
  };

  handleSearchChange = (e) => {
    const value = e.target.value;

    this.setState({
      searchValue: value,
    });

    if (value === '') {
      this.setState({
        beers: [],
        showRemoveIcon: false,
      });
    } else {
      this.setState({
        showRemoveIcon: true,
      });

      Client.search(value, (beers) => {
        this.setState({
          beers: beers.slice(0, MATCHING_ITEM_LIMIT),
        });
      });
    }
  }

  handleSearchCancel = () => {
    this.setState({
      beers: [],
      showRemoveIcon: false,
      searchValue: '',
    });
  };

  render() {
    const { showRemoveIcon, beers } = this.state;
    const removeIconStyle = showRemoveIcon ? {} : { visibility: 'hidden' };
    const beerRows = beers.map((beer, idx) => (
      <tr
        key={idx}
        onClick={() => this.props.onBeerClick(beer)}
      >
        <td>{beer.style}</td>
        <td className='right aligned'>{beer.brewery}</td>
      </tr>
    ));

    return (
      <div id='beer-search'>
        <table>
          <thead>
          <tr>
            <th colSpan='5'>
              <div className='ui fluid search'>
                <div className='ui icon input'>
                  <input
                    className='prompt'
                    type='text'
                    placeholder='Search beers...'
                    value={this.state.searchValue}
                    onChange={this.handleSearchChange}
                  />
                  <i className='search icon' />
                </div>
                <i
                  className='remove icon'
                  onClick={this.handleSearchCancel}
                  // style={removeIconStyle}
                />
              </div>
            </th>
          </tr>
          <tr>
            <th className='eight wide'>style</th>
            <th>Brewery</th>
          </tr>
          </thead>
          <tbody>
            {beerRows}
          </tbody>
        </table>
      </div>
    )
  }
};


export default BeerSearch;
