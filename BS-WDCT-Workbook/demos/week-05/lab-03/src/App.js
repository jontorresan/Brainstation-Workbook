import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      greeting: ''
    }
  }

  updateState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Greet name={this.state.name} greeting={this.state.greeting} />
        <input type="text" onChange={this.updateState} name="greeting" />
        <input type="text" onChange={this.updateState} name="name" />
      </div>
    );
  }
}

class Greet extends Component {
  render() {
    return (
      <h1>{this.props.greeting} {this.props.name}!</h1>
    )
  }
}

export default App;
