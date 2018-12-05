const Schema = require('mongoose').Schema

const TodoSchema = new Schema({
  text: String,
  done: Boolean
})

module.exports = TodoSchema