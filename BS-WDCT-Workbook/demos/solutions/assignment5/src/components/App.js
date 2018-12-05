import React, { Component } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import FilterTodos from './FilterTodos'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todos: props.todos,
      filterStatus: ''
    }
  }

  toggleDone = index => {
    let todos = [...this.state.todos]
    todos[index].done = !todos[index].done
    this.setState({
      todos
    })
  }

  addTodo = text => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text,
          done: false
        }
      ]
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
        <h1 className='text-center'>My Todo App</h1>
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
