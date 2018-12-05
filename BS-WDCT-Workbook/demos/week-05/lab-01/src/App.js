import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: 'Jonathan',
      counter: 0
    }
  }

  increment = () => {
    this.count(1)
  }

  decrement = () => {
    this.count(-1)
  }

  count = (num) => {
    console.log(this.state)
    this.setState({
      counter: this.state.counter + num
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.name}</p>
          <p>Counter: {this.state.counter}</p>
          <p>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
