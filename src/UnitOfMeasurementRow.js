import React, { Component } from 'react';

class UnitOfMeasurementRow extends Component {
  handleInputOneChange(e) {
    var name = e.target.value;
    this.props.onChangeInputOne(name);
  }
  handleInputTwoChange(e) {
    var name = e.target.value;
    this.props.onChangeInputTwo(name);
  }
  render() {
    return (
      <div>
        <select onChange={this.handleInputOneChange.bind(this)}>
          <option value="Kelvin">
            Kelvin
          </option>

          <option value="Fahrenheit">
            Fahrenheit
          </option>

          <option value="Celsius">
            Celsius
          </option>
        </select>
        <select onChange={this.handleInputTwoChange.bind(this)}>
          <option value="Kelvin">
            Kelvin
          </option>

          <option value="Fahrenheit">
            Fahrenheit
          </option>

          <option value="Celsius">
            Celsius
          </option>
        </select>
      </div>
    );
  }
}

export default UnitOfMeasurementRow;
