import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { createFruit } from '../actions/fruitActions';
import { createVegetable } from '../actions/vegetableActions';

class Create extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      fruit_name: '',
      fruit_quantity: '',
      vegetable_name: '',
      vegetable_quantity: ''
    }

  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let typeName = this.props.type;
    const postData = {
      [typeName + '_name']: this.state[typeName + '_name'],
      [typeName + '_quantity']: this.state[typeName + '_quantity']
    };

    // Call Action
    if (typeName === "fruit") {
      this.props.createFruit(postData);
    } else if (typeName === "vegetable") {
      this.props.createVegetable(postData);
    }

    this.setState({
      [typeName + '_name']: '',
      [typeName + '_quantity']: ''
    })
  }

  render() {
    let typeName = this.props.type;
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Add New {typeName}</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>{this.props.type} Name:  </label>
            <input
              type="text"
              name={typeName + "_name"}
              className="form-control"
              value={this.state[typeName + '_name']}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>{typeName} Quantity: </label>
            <input type="text"
              name={typeName + "_quantity"}
              className="form-control"
              value={this.state[typeName + '_quantity']}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input type="submit"
              value="Save Fruit"
              className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

Create.propTypes = {
  createFruit: PropTypes.func.isRequired,
  createVegetable: PropTypes.func.isRequired
}

export default connect(null, { createFruit, createVegetable })(Create);