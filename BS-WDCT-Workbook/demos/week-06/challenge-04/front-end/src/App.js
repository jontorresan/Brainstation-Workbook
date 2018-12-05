import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    name: ''
  }

  componentDidMount() {
    axios
      .get('http://localhost:8080/name')
      .then(({data}) => {
        console.log(data)
        this.setState({
          name: data.name || 'Anonymous' // !data.name ? 'Anonymous' : data.name
        })
      })
  }

  getName = e => {
    this.setState({
      name: e.target.value
    })
  } 

  saveName = () => {
    axios
      .post('http://localhost:8080/name', {
        name: this.state.name
      })
      .then(res => console.log(res))
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome {this.state.name}</h1>
        <div>
          Enter a name: <input type="text" onChange={this.getName} />
          <button onClick={this.saveName}>Save Name</button>
        </div>
      </div>
    );
  }
}

export default App;
