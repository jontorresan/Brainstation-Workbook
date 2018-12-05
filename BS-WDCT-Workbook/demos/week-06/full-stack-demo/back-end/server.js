const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

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

app.get('/students', (req, res) => {
  res.json(students)
})

app.listen(8080)