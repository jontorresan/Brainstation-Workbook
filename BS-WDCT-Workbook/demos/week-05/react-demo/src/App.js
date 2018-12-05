import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super()

    this.state = {
      name: 'Tim',
      email: '',
      phone: ''
    }
  }

  changeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {this.state.name}
          </p>
        <div>
          <form>
            Type a name: <input type="text" onChange={this.changeName} />
          </form>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
