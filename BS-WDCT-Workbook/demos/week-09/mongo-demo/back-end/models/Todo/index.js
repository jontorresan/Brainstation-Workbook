const mongoose = require('mongoose')
const TodoSchema = require('./Schema')

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo