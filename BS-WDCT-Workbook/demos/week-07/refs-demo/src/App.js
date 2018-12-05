import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateRef />
        <CallbackRef />
        <ControlledComponent />
      </div>
    );
  }
}

// React 16.3 Refs using React.createRef
class CreateRef extends Component {
  constructor(props) {
    super(props)

    this.myForm = React.createRef()
  }

  search = e => {
    e.preventDefault()
    console.log(`Searching for ${this.myForm.current.name.value}...`)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.search} ref={this.myForm} >
          Enter your name: <input type="text" name="name" />
          <br/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

// React Refs using callback refs
class CallbackRef extends Component {
  search = e => {
    e.preventDefault()
    console.log(`Searching for ${this.myForm.name.value}...`)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.search} ref={self => this.myForm = self} >
          Enter your name: <input type="text" name="name" />
          <br/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

// Standard controlled component using state to hold the value of
// input
class ControlledComponent extends Component {
  state = {
    name: ''
  }

  search = e => {
    e.preventDefault()
    console.log(`Searching for ${this.state.name}...`)
  }

  updateState = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.search} >
          Enter your name: <input type="text" name="name" onChange={this.updateState} value={this.state.name} />
          <br/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}


export default App;
