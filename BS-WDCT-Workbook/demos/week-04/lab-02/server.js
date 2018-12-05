const express = require('express')
const app = express()

app.set('view engine', 'ejs')

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

app.get('/', (req, res) => {
  const user = {
    firstName: 'Jonathan',
    lastName: 'Bluks',
    email: 'jbluks@brainstation.io'
  }

  res.render('index', {
    user
  })
})

app.get('/students', (req, res) => { 
  res.render('students', {
    students
  })
})

app.get('/students/:program', (req, res) => {
  let filteredStudents = []
  for(let i=0; i<students.length; i++) {
    if(students[i].program.toLowerCase() === req.params.program.toLowerCase()) {
      filteredStudents.push(students[i])
    }
  }
  res.render('students', {
    students: filteredStudents
  })
})

app.listen(8080)