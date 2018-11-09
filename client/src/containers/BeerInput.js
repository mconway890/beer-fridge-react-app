import React, { Component } from 'react';
import { addBeer } from '../actions/beerActions';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, ControlLabel, Col, Form } from 'react-bootstrap';

export class BeerInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      style: '',
      brewery: '',
      abv: '',
    }
  }

  handleOnChange = event => {
    const {name,value} = event.target
    const thisBeerData = Object.assign({}, this.props.beerFormData, {
      [name]: value
    })
    this.props.updateBeerFormData(thisBeerData)
  }


  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createBeer(this.props.beerFormData, this.props.history)
  }

  render() {
    return(
      <div>
        <h2>Add New Beer</h2>
        <Form horizontal onSubmit={(event) => this.handleOnSubmit(event)}>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
          <FormControl
          name="name"
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={(event) => this.handleOnChange(event)}
           />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Style
            </Col>
            <Col sm={10}>
          <FormControl
          name="style"
          type="text"
          placeholder="Style"
          value={this.state.style}
          onChange={(event) => this.handleOnChange(event)}
          />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Abv
            </Col>
            <Col sm={10}>
          <FormControl
          name="abv"
          type="abv"
          placeholder="ABV"
          value={this.state.abv}
          onChange={(event) => this.handleOnChange(event)}
           />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">Submit</Button>
          </Col>
        </FormGroup>
        </Form>
      </div>
    );
  }
};

mapStateToProps = state => {
  return {
    beerFormData: state.beerFormData
  }
}

// add arguments to connect as needed
export default connect(mapStateToProps, { createBeer, updateBeerFormData })(BeerInput);
