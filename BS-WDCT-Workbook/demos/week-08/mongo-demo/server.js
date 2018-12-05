const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost:27017/school')

mongoose.Promise = global.Promise

const StudentSchema = new Schema({
  name: String,
  program: String,
  grade: Number 
})

const Student = mongoose.model('Student', StudentSchema)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log("Connected to db at /school")
});

// const newStudent = Student({
//   name: 'Tomy',
//   program: 'Web Dev',
//   grade: 90
// })

// newStudent
//   .save()
//   .then(student => console.log(student))
//   .catch(err => console.log(err))

app.get('/students', (req, res) => {
  Student
    .find({})
    .then(students => res.json(students))
})

app.listen(8080)