import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: 'Bonnie'
    }
  }

  updateName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Header name={this.state.name}/>
        <MainContent />
        <input type="text" onChange={this.updateName} />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    console.log(this.props)
    return (
      <header>
        <h1>Hello {this.props.name}!</h1>
      </header>
    )
  }
}

class MainContent extends Component {
  render() {
    return (
      <main>
        <p>This is my React App!</p>
      </main>
    )
  }
}

export default App;
