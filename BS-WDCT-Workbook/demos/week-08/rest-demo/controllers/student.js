const Student = require('../models/student')

module.exports = {
  getStudents: () => {
    return new Promise((resolve, reject) => {
      Student
        .fetchAll()
        .then(students => {
          resolve(students.models.map(student => student.attributes))
        })
    })
  },
  addStudent: (name, program, grade) => {
    return new Promise((resolve, reject) => {
      new Student({
          name,
          program,
          grade
        }).save()
        .then(student => {
          resolve(student.attributes)
        })
    })
  },
  deleteStudent: (id) => {
    return new Promise((resolve, reject) => {
      new Student({
          id
        })
        .destroy()
        .then(student => resolve(student))
    })
  },
  updateStudent: (studentInfo) => {
    return new Promise((resolve, reject) => {
      const attributesToUpdate = {
        name: studentInfo.name,
        program: studentInfo.program,
        grade: studentInfo.grade
      }
      new Student({
          id: studentInfo.id
        })
        .save(attributesToUpdate, {
          patch: true
        })
        .then(student => {
          resolve(student.attributes)
        })
    })
  }
}