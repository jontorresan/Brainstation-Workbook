import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/products/shoes">Shoes</Link>
          <Link to="/products/bags">Bags</Link>
          <Link to="/products/bananas">Bananas</Link>
        </nav>
        <Switch>
          <Route path='/products/:type' component={Products} />
        </Switch>
      </div>
    );
  }
}

const Products = props => (
  <div>
    <h1>Products</h1>
    Product Type: {props.match.params.type}
  </div>
)

export default App;
