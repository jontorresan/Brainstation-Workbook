const express = require('express')
const router = express.Router()
const StudentController = require('../controllers/student')

router.get('/', (req, res) => {
  StudentController.getStudents().then(students => res.json(students))
})

router.post('/', (req, res) => {
  const { name, program, grade } = req.body
  StudentController
    .addStudent(name, program, grade)
    .then(student => res.json(student))
})

router.put('/', (req, res) => {
  const { studentInfo } = req.body
  StudentController
    .updateStudent(studentInfo)
    .then(student => res.json(student))
})

router.delete('/', (req, res) => {
  const { id } = req.body
  StudentController
    .deleteStudent(id)
    .then(student => res.json(student))
})

module.exports = router