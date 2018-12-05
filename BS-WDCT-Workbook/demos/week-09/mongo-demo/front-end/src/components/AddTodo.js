import React from 'react'
import PropTypes from 'prop-types'

const AddTodo = ({ addTodo }) => (
  <form onSubmit={e => { 
    e.preventDefault()
    addTodo(e.target.text.value)
    e.target.text.value = ''
  }}>
    <div className='input-group'>
      <span className='input-group-btn'>
        <button className='btn btn-primary' type='submit'>Add</button>
      </span>
      <input className='form-control' placeholder='add a todo' name='text' />
    </div>
  </form>
)

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
