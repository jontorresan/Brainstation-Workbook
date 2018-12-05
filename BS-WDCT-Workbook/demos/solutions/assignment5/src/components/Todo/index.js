import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Todo = ({ done, index, text, toggleDone }) => (
  <li className='list-group-item'>
    <input
      type='checkbox'
      checked={done}
      onChange={() => {
        toggleDone(index)
      }}
    /><span className={done ? 'done' : ''}>{text}</span>
  </li>
)

Todo.propTypes = {
  done: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  toggleDone: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
}

export default Todo
