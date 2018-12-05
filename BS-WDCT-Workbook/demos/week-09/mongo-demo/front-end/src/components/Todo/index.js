import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Todo = ({ done, id, text, toggleDone }) => (
  <li className='list-group-item'>
    <input
      type='checkbox'
      checked={done}
      onChange={() => {
        toggleDone(id)
      }}
    /><span className={done ? 'done' : ''}>{text}</span>
  </li>
)

Todo.propTypes = {
  done: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  toggleDone: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

export default Todo
