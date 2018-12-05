const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

const users = [
  {
  email: 'jbluks@brainstation.io',
  name: 'Jonathan',
  password: '123456'
  },
  {
  email: 'treyes@brainstation.io',
  name: 'Tomy',
  password: 'qwerty'
  },
  {
  email: 'twernke@brainstation.io',
  name: 'Tim',
  password: 'abcdef'
  }
  ]

app.post('/login', (req, res) => {
  const { email, password } = req.body
  const loggedInUser = users.find(user => {
    if(user.email === email && user.password === password) {
      return true
    }
  })
  if(loggedInUser) {
    res.json({ status: `${loggedInUser.name} logged in`})
  } else {
    res.json({ status: 'Login Failed'})
  }
})

app.post('/signup', (req, res) => {
  const { email, name, password } = req.body
  users.push({
    name,
    email,
    password
  })
  res.json({ status: `${name} signed up` })
})

app.listen(8080)