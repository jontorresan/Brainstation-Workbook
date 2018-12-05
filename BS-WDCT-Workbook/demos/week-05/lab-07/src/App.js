import React, { Component } from 'react';
import './App.css';
import SearchBox from './SearchBox'
import ProductList from './ProductList'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput: ''
    }
  }

  updateSearchInput = (text) => {
    this.setState({
      searchInput: text
    })
  }

  render() {

    console.log(this.props.products)
    const filteredProducts = this.props.products.filter(product => {
      return product.name.toLowerCase() === this.state.searchInput.toLowerCase()
    })
    console.log(filteredProducts)

    return (
      <div className="App">
        <h1>Product List</h1>
        <SearchBox updateSearchInput={this.updateSearchInput}/>
        <ProductList products={filteredProducts} />
      </div>
    );
  }
}

export default App;
