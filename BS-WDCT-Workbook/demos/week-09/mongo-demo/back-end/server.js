const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const Todo = require('./models/Todo')

app.use(cors())
app.use(bodyParser.json())

app.get('/todos', (req, res) => {
  Todo.find({})
    .then(todos => {
      res.json({ todos })
    })
})

app.post('/todos', (req, res) => {
  const { text, done } = req.body
  new Todo({
    text,
    done
  }).save()
    .then(todo => {
      res.json(todo)
    })
})

app.put('/todos', (req, res) => {
  const { id, done } = req.body
  Todo.findOneAndUpdate({ _id: id }, {
    done
  }).then(todo => {
    res.json(todo)
  })
})

app.listen(8080)

mongoose.connect('mongodb://localhost/TodoApp', { useNewUrlParser: true })
mongoose.Promise = global.Promise

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log("Connected to db at TodoApp")
});