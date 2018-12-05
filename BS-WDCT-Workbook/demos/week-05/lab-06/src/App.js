import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor () {
    super()

    this.state = {
      index: 0
    }
  }

  next = () => {
    this.setState({
      index: this.state.index + 1
    })
  }

  previous = () => {
    this.setState({
      index: this.state.index - 1
    })
  }

  render () {
    const imageList = this.props.images.map((image, i) => {
      return (
        <div>
          <img
            src={image}
            alt=''
            style={{
              display: this.state.index === i ? 'block' : 'none'
            }}
          />
        </div>
      )
    })

    return (
      <div className='App'>
        <h1>Image Carousel</h1>
        <div>
          <button onClick={this.previous} disabled={this.state.index === 0}>
            Previous
          </button>
          <span>{this.state.index + 1} of {this.props.images.length}</span>
          <button
            onClick={this.next}
            disabled={this.state.index === this.props.images.length - 1}
          >
            Next
          </button>
        </div>
        <div>
          {imageList}
        </div>
      </div>
    )
  }
}

export default App


