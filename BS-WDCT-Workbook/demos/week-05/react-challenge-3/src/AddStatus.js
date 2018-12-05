import React, { Component } from 'react'

class AddStatus extends Component {
  constructor() {
    super()

    this.state = {
      statusText: ''
    }
  }

  getInput = e => {
    this.setState({
      statusText: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.getInput} value={this.state.statusText} />
        <button onClick={() => this.props.addStatus(this.state.statusText)}>Add</button>
      </div>
    )
  }
}

export default AddStatus