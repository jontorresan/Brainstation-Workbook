import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos: this.props.todos,
    text: ''
  }

  addTodo = text => {
    this.setState({
      todos: this.state.todos.concat({
        text,
        done: false
      }),
      text: ''
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    })
  }

  updateText = text => {
    this.setState({
      text
    })
  }
  
  componentDidMount = () => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if(todos) {
      this.setState({
        todos
      })
    }
  }

  render() {

    const todoList = this.state.todos.map((todo, i) => (
      <li key={i}><input type="checkbox" checked={todo.done} />{todo.text}</li>
    ))

    return (
      <div className="App">
        <h1>Todos</h1>
        <div>
          Enter a Todo: 
          <input 
            type="text" 
            onChange={e => this.updateText(e.target.value)}
            value={this.state.text}
          />
          <button onClick={() => this.addTodo(this.state.text)}>Add</button>
        </div>
        <ul>
          {todoList}
        </ul>
      </div>
    );
  }
}

export default App;
