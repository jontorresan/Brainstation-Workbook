import React, { Component } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import FilterTodos from './FilterTodos'
import axios from 'axios'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todos: [],
      filterStatus: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/todos')
      .then(response => {
        const { todos } = response.data
        this.setState({
          todos
        })
      })
  }

  toggleDone = id => {
    let todos = [...this.state.todos]
    const index = todos.findIndex(todo => {
      return todo._id === id
    })
    console.log(index)
    todos[index].done = !todos[index].done
    axios.put('http://localhost:8080/todos', {
      done: todos[index].done,
      id
    }).then(() => {
      this.setState({
        todos
      })
    })
  }

  addTodo = text => {
    axios.post('http://localhost:8080/todos', {
      text,
      done: false
    }).then(response => {
      const todo = response.data
      this.setState({
        todos: [
          ...this.state.todos,
          {
            ...todo
          }
        ]
      })
    })
  }

  filterTodos = status => {
    this.setState({
      filterStatus: status
    })
  }

  clearComplete = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.done)
    })
  }

  render () {
    const { filterStatus } = this.state
    let todos = this.state.todos.filter(todo => {
      switch (filterStatus) {
        case 'complete':
          return todo.done
        case 'active':
          return !todo.done
        default:
          return true
      }
    })

    return (
      <div className='container'>
        <h1 className='text-center'>Todos</h1>
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={todos} toggleDone={this.toggleDone} />
        <FilterTodos filterTodos={this.filterTodos} />
        <button
          className='btn btn-secondary'
          onClick={this.clearComplete}
        >
          Clear Complete
        </button>
      </div>
    )
  }
}

export default App
