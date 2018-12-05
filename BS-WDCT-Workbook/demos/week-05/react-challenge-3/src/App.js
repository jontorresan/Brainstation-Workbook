import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import StatusList from './StatusList'
import AddStatus from './AddStatus'

class App extends Component {
  constructor() {
    super()

    this.state = {
      statuses: [{
        text: 'Im happy',
        date: new Date().toString()
      }, {
        text: 'Im sad',
        date: new Date().toString()
      }, {
        text: 'Im excited',
        date: new Date().toString()
      }]
    }
  }

  addStatus = (text) => {
    // this.state.statuses.unshift({
    //   text: this.state.statusText,
    //   date: new Date().toString()
    // })
    this.setState({
      statuses: [{
        text,
        date: new Date().toString()
      }].concat(this.state.statuses)
    })
  }

  deleteStatus = i => {
    this.state.statuses.splice(i, 1)
    this.setState({
      statuses: this.state.statuses
    })

    // const newStatuses = this.state.statuses.filter((status) => {
    //   return status.text !== e.target.value
    // })
    // this.setState({
    //   statuses: newStatuses
    // })
  }

  render() {
    return (
      <div className="App">
        <Header title="Status Feed" />
        <AddStatus addStatus={this.addStatus}/>
        <StatusList statuses={this.state.statuses} deleteStatus={this.deleteStatus}/>
      </div>
    );
  }
}

export default App;
