import React, { Component } from 'react';

class InputsRow extends Component {

  handleInputOneChange(e) {
    if(typeof Number(e.target.value) === 'number') {
      var temp = Number(e.target.value);
      this.props.onChangeInputOne(temp);
    }
  }
  handleInputTwoChange(e) {
    if(typeof Number(e.target.value) === 'number') {
      var temp = Number(e.target.value);
      this.props.onChangeInputTwo(temp);
    }
  }

  render() {
    return (
      <div>
        <input type="number" onChange={this.handleInputOneChange.bind(this)} value={this.props.inputOneValue} />
        <input type="number" onChange={this.handleInputTwoChange.bind(this)} value={this.props.inputTwoValue} />
      </div>
    );
  }
}

export default InputsRow;
