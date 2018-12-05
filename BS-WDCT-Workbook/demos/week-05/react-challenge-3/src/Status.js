import React, { Component } from 'react'

class Status extends Component {
  render() {
    const { status, i } = this.props
    const { text, date } = status
    return (
      <div style={{
        margin: '10px',
        border: 'solid 1px'
      }}>
        <div>{text}</div>
        <div>{date}</div>
        <button onClick={() => this.props.deleteStatus(i)} value={text}>Delete</button>
      </div>
    )
  }
}

export default Status