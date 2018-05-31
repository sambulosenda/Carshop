import React, { Component } from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { setCars } from "../actions";

class SearchCars extends Component {
  constructor() {
    super();

    
    this.state = {
      tansmition: ""
    };
  }

  search() {
    let { tansmition } = this.state;
    const url = `http://localhost:4000/vehicles/?transmission=${tansmition}`;

    fetch(url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
        this.props.setCars(json.results)
      })
    }

  render() {
    return (
      <Form inline>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Automated"
            onChange={event =>  this.setState({tansmition: event.target.value })
            }
          />
        </FormGroup>
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    );
  }
}

export default connect(null, { setCars})(SearchCars);
