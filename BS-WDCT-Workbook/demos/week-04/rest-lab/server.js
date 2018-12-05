const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

const students = [
  {
    name: 'Brynhildr Sadler',
    program: 'Web Dev',
    grade: 75
  },
  {
    name: 'Joan Leon',
    program: 'UX',
    grade: 72
  },
  {
    name: 'Mark Summers',
    program: 'Web Dev',
    grade: 87
  },
  {
    name: 'Mark Smith',
    program: 'Web Dev',
    grade: 87
  },
  {
    name: 'Jim Markson',
    program: 'Web Dev',
    grade: 87
  },
  {
    name: 'Tanja Zawisza',
    program: 'Web Dev',
    grade: 92
  },
  {
    name: 'Slavomir Amato',
    program: 'UX',
    grade: 78
  },
  {
    name: 'Tihana Anand',
    program: 'UX',
    grade: 60
  },
  {
    name: 'Reima Ivov',
    program: 'Web Dev',
    grade: 95
  },
  {
    name: 'Demokritos Shafir',
    program: 'UX',
    grade: 83
  }
]

app.get('/students', (req, res) => {
  const { name } = req.query
  if(name) {
    let matchedStudents = []
    for(let i=0; i<students.length; i++) {
      if(students[i].name.includes(name)) {
        matchedStudents.push(students[i])
      }
    }
    res.json(matchedStudents)
  } else {
    res.json(students)
  }
})

app.get('/students/:program', (req, res) => {
  const { program } = req.params
  let filteredStudents = []
  for(let i=0; i<students.length; i++) {
    if(program.toLowerCase() === students[i].program.toLowerCase()) {
      filteredStudents.push(students[i])
    }
  }
  res.json(filteredStudents)
})

app.post('/students', (req, res) => {
  const { name, program, grade } = req.body
  students.push({
    name,
    program,
    grade
  })

  const data = {
    student: {
      name,
      program,
      grade
    }
  }

  res.render('addStudent', data)
})

app.listen(8080)