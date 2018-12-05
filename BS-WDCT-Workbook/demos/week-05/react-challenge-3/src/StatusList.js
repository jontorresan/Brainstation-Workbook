import React, { Component } from 'react'
import Status from './Status'

class StatusList extends Component {
  render() {
    const statuses = this.props.statuses.map((status, i) => {
      return <Status status={status} i={i} key={i} deleteStatus={this.props.deleteStatus}/>
    })

    return (
      <div>{statuses}</div>
    )
  }
}

export default StatusList