import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: 'Jonathan'
  }

  updateName = name => {
    this.setState({
      name: name
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Greeting App</h1>
        <NameInput 
          updateName={this.updateName}
        />
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

class NameInput extends Component {
  state = {
    textInput: ''
  }

  getInput = e => {
    this.setState({
      textInput: e.target.value
    })
  }

  render() {
    return (
      <div>
        Enter Your Name: 
        <input 
          type="text" 
          onChange={this.getInput} 
          value={this.state.textInput}
        />
        <button onClick={() => this.props.updateName(this.state.textInput)}>Submit</button>
      </div>
    )
  }
}

class Greeting extends Component {
  render() {
    return (
      <p>Hello {this.props.name}!</p>
    )
  }
}

export default App;
