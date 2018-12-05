import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      duration: 0,
      time: 0,
      running: false
    }
    this.timerId = null
  }


  updateTime = e => {
    this.setState({
      duration: Number(e.target.value),
      time: Number(e.target.value)
    })
  }

  start = () => {
    this.setState({
      running: true,
      time: this.state.duration
    }, () => {
      this.timerId = setInterval(() => {
        if(this.state.time === 0) {
          clearInterval(this.timerId)
          this.setState({
            duration: 0,
            time: 'Done!',
            running: false
          })
        } else {
          this.setState({
            time: this.state.time - 1
          })
        }
      }, 1000)
    })
  }

  stop = () => {
    clearInterval(this.timerId)
    this.setState({
      running: false
    })
  }

  reset = () => {
    clearInterval(this.timerId)
    this.setState({
      time: 0,
      duration: 0,
      running: false
    })
  }

  render() {
    console.log(this.state.time)
    console.log(this.state.running || !(this.state.time === 0))
    return (
      <div className="App">
        <header className="App-header">
          Time: <input type="text" onChange={this.updateTime} value={this.state.duration}/>
          <button onClick={this.start} disabled={this.state.running || (this.state.time === 0 || this.state.time === 'Done!')}>Start</button>
          <button onClick={this.stop} disabled={!this.state.running}>Stop</button>
          <button onClick={this.reset} disabled={!this.state.running}>Reset</button>
          Countdown:
          <div>{this.state.time}</div>
        </header>
      </div>
    );
  }
}

export default App;
