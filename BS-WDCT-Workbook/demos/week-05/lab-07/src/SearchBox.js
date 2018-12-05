import React, { Component } from 'react'

class SearchBox extends Component {
  constructor() {
    super()

    this.state = {
      searchInput: ''
    }
  }

  getSearchInput = e => {
    this.setState({
      searchInput: e.target.value
    })
  }

  submit = e => {
    e.preventDefault()
    this.props.updateSearchInput(this.state.searchInput)
  }

  render() {
    return (
      <div>
      <form onSubmit={this.submit}>
        <input type="text" placeholder="Search..." onChange={this.getSearchInput} value={this.state.searchInput}/><br/>
        <input type="checkbox"/> Only show products in stock
      </form>
      </div>
    )
  }
}

export default SearchBox