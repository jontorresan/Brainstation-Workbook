import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      groceryList: [],
      grocery: ''
    }
  }

  updateGrocery = (e) => {
    this.setState({
      grocery: e.target.value
    })
    
  }

  addGroceryItem = () => {
    this.setState({
      groceryList: this.state.groceryList.concat(this.state.grocery),
      grocery: ''
    })
  }

  clearGroceries = () => {
    this.setState({
      groceryList: [] 
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Groceries</h1>
        <input type="text" onChange={this.updateGrocery} value={this.state.grocery} />
        <button onClick={this.addGroceryItem} type="button">Add</button>
        <GroceryList groceryList={this.state.groceryList} />
        <button 
          onClick={this.clearGroceries} 
          type="button" 
          className={this.state.groceryList.length === 0 ? 'hide' : ''}
        >Clear</button>
      </div>
    );
  }
}

class GroceryList extends Component {
  render() {

    const groceryList = this.props.groceryList.map((newGrocery) => {
      return <GroceryItem item={newGrocery} />
    })
    return (
    <ul>
      {groceryList}
    </ul>
    )
  }
}

class GroceryItem extends Component {
    render() {
      return (
        <li>{this.props.item}</li>
      )
    }
}

export default App;
