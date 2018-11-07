import React, {Component} from 'react';
import Client from '../Client';

class BeerSearch extends Component {
  state = {
    value: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchBeers(this.state.value)
  }

  render() {
    return (
      <section  className = 'Search-Form'
        style = {{ backgroundColor: 'black',
                    color: 'gray'
                }}>
        <div>
          <form onSubmit={ event => this.handleSubmit(event) }>
            <div>
              <label>
                Enter a Search Term:
                  <input type="text" value={this.state.value} onChange={ event => this.setState({value: event.target.value})}/>
                </label>
              </div>
          </form>
        </div>
      </section>
    )
  }
}

export default BeerSearch;
