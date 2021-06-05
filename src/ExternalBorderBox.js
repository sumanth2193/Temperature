import React, { Component } from 'react';
import './ExternalBorderBox.css';
import Title from './Title'
import UnitOfMeasurementRow from './UnitOfMeasurementRow'
import InputsRow from './InputsRow'

class ExternalBorderBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputOneUnit: 'Kelvin',
      inputTwoUnit: 'Kelvin',
      inputOneValue: 0,
      inputTwoValue: 0
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.state.inputOneUnit !== prevState.inputOneUnit || this.state.inputTwoUnit !== prevState.inputTwoUnit) {
      this.handleInputOne(this.state.inputOneValue);
    }
    // else if (this.state.inputTwoUnit !== prevState.inputTwoUnit) {
    //   this.handleInputOne(this.state.inputOneValue);
    // }
    return true;
  }

  changeInputOneUnit(newUnitName) {
    this.setState({inputOneUnit: newUnitName});
  }

  changeInputTwoUnit(newUnitName) {
    this.setState({inputTwoUnit: newUnitName});
  }

  handleInputOne(currentTemp) {
    var convertedTemp = this.convertTheOtherInputTemperature(2, currentTemp);
    this.setState({inputOneValue: currentTemp, inputTwoValue: convertedTemp});
  }

  handleInputTwo(currentTemp) {
    var convertedTemp = this.convertTheOtherInputTemperature(1, currentTemp);
    this.setState({inputOneValue: convertedTemp, inputTwoValue: currentTemp});
  }

  //local functions
  kToF(temp) {
    return (temp * (9/5) - 459.67);
  }

  kToC(temp) {
    return (temp - 273.15);
  }

  fToC(temp) {
    return( (temp - 32) / 1.8 );
  }

  fToK(temp) {
    return( (temp + 459.67) * (5/9) );
  }

  cToK(temp) {
    return( temp + 273.15 );
  }

  cToF(temp) {
    return( temp * (9/5) + 32);
  }

  convertTheOtherInputTemperature(desiredInputTemperaturePosition, knownTemperature) {
    var pos = desiredInputTemperaturePosition;
    var temp = knownTemperature;
    if(this.state.inputOneUnit === this.state.inputTwoUnit) {
      return knownTemperature;

      //Kelvin and ???
    } else if(this.state.inputOneUnit === 'Kelvin') {
      if(this.state.inputTwoUnit === 'Fahrenheit') {
        if(pos === 1) {
          return this.fToK(temp);
        } else {
          return this.kToF(temp);
        }
      } else { //celsius
        if(pos === 1) {
          return this.cToK(temp);
        } else {
          return this.kToC(temp);
        }
      }

      //Fahrenheit and ???
    } else if(this.state.inputOneUnit === 'Fahrenheit') {
      if(this.state.inputTwoUnit === 'Kelvin') {
        if(pos === 1) {
          return this.kToF(temp);
        } else {
          return this.fToK(temp);
        }
      } else { //celsius
        if(pos === 1) {
          return this.cToF(temp);
        } else {
          return this.fToC(temp);
        }
      }

      //Celsius and ???
    } else { //celsius is 1st position
      if(this.state.inputTwoUnit === 'Fahrenheit') {
        if(pos === 1) {
          return this.fToC(temp);
        } else {
          return this.cToF(temp);
        }
      } else { //kelvin
        if(pos === 1) {
          return this.kToC(temp);
        } else {
          return this.cToK(temp);
        }
      }
    }
  }
  //local functions

  render() {
    return (
      <div className="Border">
        <Title name="Converter!" />
        <UnitOfMeasurementRow onChangeInputOne={this.changeInputOneUnit.bind(this)} onChangeInputTwo={this.changeInputTwoUnit.bind(this)} />
        <InputsRow inputOneValue={this.state.inputOneValue} inputTwoValue={this.state.inputTwoValue}
        onChangeInputOne={this.handleInputOne.bind(this)} onChangeInputTwo={this.handleInputTwo.bind(this)} />
        <div>
          <span>
            1st input unit: {this.state.inputOneUnit}, 2nd input unit: {this.state.inputTwoUnit}
          </span>
        </div>
      </div>
    );
  }
}

export default ExternalBorderBox;
