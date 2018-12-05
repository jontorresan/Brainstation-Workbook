import React from 'react'
import PropTypes from 'prop-types'

const FilterTodos = ({ filterTodos }) => (
  <select onChange={e => filterTodos(e.target.value)}>
    <option value='all'>all</option>
    <option value='active'>active</option>
    <option value='complete'>complete</option>
  </select>
)

FilterTodos.propTypes = {
  filterTodos: PropTypes.func.isRequired
}

export default FilterTodos
