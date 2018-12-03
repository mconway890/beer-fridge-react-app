import React, { Component } from 'react';
import { createBeer } from '../actions/beerActions';
import { updateBeerFormData } from '../actions/beerInput';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, ControlLabel, Col, Form } from 'react-bootstrap';

export class BeerInput extends Component {
  // setting intial state done in constructor
  constructor(props){
    super(props);
    this.state = {
      name: '',
      style: '',
      brewery: '',
      abv: '',
      description: '',
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
    const {name,style,brewery,abv,description} = this.props.beerFormData
    return(
      <div className="BeerForm">
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
          value={name}
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
          value={style}
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
          type="text"
          placeholder="ABV"
          value={abv}
          onChange={(event) => this.handleOnChange(event)}
           />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Brewery
            </Col>
            <Col sm={10}>
          <FormControl
          name="brewery"
          type="text"
          placeholder="Brewery"
          value={brewery}
          onChange={(event) => this.handleOnChange(event)}
           />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Details
            </Col>
            <Col sm={10}>
          <FormControl
          name="description"
          type="text"
          placeholder="Details"
          value={description}
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

// mapStateToProps specifies which slice of state to provide to component
const mapStateToProps = state => {
  return {
    beerFormData: state.beerFormData
  }
}

// add arguments to connect as needed
export default connect(mapStateToProps, { createBeer, updateBeerFormData })(BeerInput);
