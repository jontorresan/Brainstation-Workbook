import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  state = {
    name: ''
  }

  getName = name => {
    this.setState({
      name
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact render={(routerProps) => <InputName getName={this.getName} {...routerProps}/>} />
          <Route path='/profile' render={() => <Profile name={this.state.name}/>} />
        </Switch>
      </div>
    );
  }
}

const InputName = props => {
  const goToProfile = () => props.history.push('/profile')

  return (
    <div>
      Enter Name: 
      <input 
        type="text"
        onChange={e => props.getName(e.target.value)} />
      <button onClick={goToProfile}>Submit</button>
    </div>
  )
  }

const Profile = props => (
  <div>
    <h1>Welcome {props.name}</h1>
  </div>
)

export default App;
