import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      timeOfDay: 'Morning 🌝'
    }
  }

  changeTimeOfDay = (e) => {
    this.setState({
      timeOfDay: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Time of Day: <select onChange={this.changeTimeOfDay}>
            <option value="Morning 🌝">Morning</option>
            <option value="Afternoon 🌞">Afternoon</option>
            <option value="Evening 🌛">Evening</option>
            <option value="Night 🌚" >Night</option>
          </select>
          <Greeting timeOfDay={this.state.timeOfDay} />
        </header>
      </div>
    );
  }
}

class Greeting extends Component {
  render() {
    return <h1>Good {this.props.timeOfDay}</h1>
  }
}

export default App;
