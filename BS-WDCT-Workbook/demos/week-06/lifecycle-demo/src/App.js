import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: 'Jonathan'
    }

    console.log('constructor')
  }

  componentDidMount() {
    console.log('didMount. state: ', this.state)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('didUpdate. state: ', this.state)
    console.log(prevProps, prevState)
  }

  getInput = e => {
    this.setState({
      name: e.target.value
    }, () => {
      console.log('setState. state: ', this.state)
    })
  }

  render() {
    console.log('render. state:', this.state)
    return (
      <div className="App">
        My Name is {this.state.name}.
        <br/>
        <input type="text" onChange={this.getInput} value={this.state.name} />
      </div>
    );
  }
}

export default App;
