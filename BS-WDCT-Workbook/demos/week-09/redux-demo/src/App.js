import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { increment, decrement, setCounter, fetchCounter } from './store'

const CounterButtons = (props) => (
  <div>
    <button onClick={props.increment}>Increment</button>
    <button onClick={props.decrement}>Decrement</button> 
  </div>
)

class App extends Component {
  render() {
    return (
      <div>
        { this.props.loading && <h3>Loading...</h3>}
        Counter: {this.props.counter}
        <br/>
        <CounterButtons 
          increment={this.props.increment}
          decrement={this.props.decrement}
          />
        <br/>
        <input type="text" ref={self => this.number = self}/><button onClick={() => {
          this.props.setNumber(this.number.value)
        }}>Set Number</button>
        <br/>
        <button onClick={this.props.fetchCounter}>Fetch Counter</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    setNumber: number => dispatch(setCounter(Number(number))),
    fetchCounter: () => fetchCounter()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
