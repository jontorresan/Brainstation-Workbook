import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

class TodoList extends Component {
    render() {

        let todosJSX = this.props.todos.map((todo) => {
            console.log(todo)
            return (
                <Todo 
                    key={todo._id} 
                    text={todo.text} 
                    done={todo.done} 
                    toggleDone={this.props.toggleDone}
                    id={todo._id} />
            )
        })

        return (
            <ul className="list-group">
                {todosJSX}
            </ul>
        )
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoList;