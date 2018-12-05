import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      names: props.names,
      name: ''
    }
  }

  addName = () => {
    // const newNames = this.state.names.concat(this.state.name)
    this.setState({
      names: this.state.names.concat(this.state.name)
    })
  }

  inputName = e => {
    this.setState({
      name: e.target.value
    })
  }

  render() {

    const output = this.state.names.map(name => <li>{name}</li>)

    const style = {
      color: this.state.name === '' ? 'red' : 'blue',
      fontSize: '56px'
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col">
          <h1 style={style}>Students</h1>
          <input type="text" onChange={this.inputName}/>
          <button onClick={this.addName}>Add Name</button>
          <ul>
            {output}
          </ul>
          </div>
          </div>
      </div>
    );
  }
}

export default App;
