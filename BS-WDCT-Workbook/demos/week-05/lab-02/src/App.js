import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      num1: 0,
      num2: 0,
      operator: '+',
      result: 0
    }
  }

  updateNum1 = event => {
    this.setState({
      num1: event.target.value
    })
  }

  updateNum2 = event => {
    this.setState({
      num2: event.target.value
    })
  }

  updateOperator = event => {
    const operator = 'operator'
    this.setState({
      [operator]: event.target.value
    })  
  }

  updateState = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  calculate = () => {
    let { num1, num2, operator } = this.state
    let result = 0
    num1 = Number(num1)
    num2 = Number(num2)

    switch(operator) {
      case '+':
        result = num1 + num2
        break;
      case '-':
        result = num1 - num2
        break;
      case '*':
        result = num1 * num2
        break;
      case '/':
        result = num1 / num2
        break;
      default:
        result = 0
    }

    this.setState({
      result
    })
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.updateState} name="num1" />
        <select onChange={this.updateState} name="operator">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="text" onChange={this.updateState} name="num2" />
        =
        {this.state.result}
        <div>
        <button onClick={this.calculate}>Calculate</button>
        </div>
      </div>
    );
  }
}

export default App;
