const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL || {
    user: 'jonathanbluks', // or other user if you made one
    password: '',
    database: 'postgres-demo'
  }
})

const bookshelf = require('bookshelf')(knex)

const Teacher = bookshelf.Model.extend({
  tableName: 'teachers',
  students: function() {
    return this.hasMany(Student)
  }
})

const Student = bookshelf.Model.extend({
  tableName: 'students',
  teacher: function() {
    return this.belongsTo(Teacher)
  }
})

app.use(cors())

app.get('/students', (req, res) => {
  Student
    .fetchAll()
    .then(students => {
      const studentData = students.models.map(
        student => student.attributes)
      res.json(studentData)
    })
})

app.get('/students/:id', (req, res) => {
  Student
    .where({ id: req.params.id })
    .fetch({ withRelated: 'teacher' })
    .then(student => {
      const teacher = student.related('teacher')
      console.log(teacher.attributes)
      res.json({ student: {
        ...student.attributes,
        teacher: {
          ...teacher.attributes
        }
      }})
    })
})

app.listen(8080)