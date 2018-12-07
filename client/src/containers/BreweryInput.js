import React, { Component } from 'react';
import { createBrewery} from '../actions/breweryActions';
import { updateBreweryFormData } from '../actions/breweryInput';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, ControlLabel, Col, Form } from 'react-bootstrap';

export class BreweryInput extends Component {
  // setting intial state done in constructor
  constructor(props){
    super(props);
    this.state = {
      name: '',
      review: '',
    }
  }

  handleOnChange = event => {
    const {name,value} = event.target
    const thisBreweryData = Object.assign({}, this.props.breweryFormData, {
      [name]: value
    })
    this.props.updateBreweryFormData(thisBreweryData)
  }


  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createBrewery(this.props.breweryFormData)
  }

  render() {
    const {name,review} = this.props.breweryFormData
    return(
      <div className="BreweryForm">
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

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Review
          </Col>
          <Col sm={10}>
        <FormControl
        name="review"
        type="text"
        placeholder="Review"
        value={review}
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
    breweryFormData: state.breweryFormData
  }
}

// add arguments to connect as needed
export default connect(mapStateToProps, { createBrewery, updateBreweryFormData })(BreweryInput);
