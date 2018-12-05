const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const saltRounds = 4
const secretKey = 'jwt-secret-key'

app.use(bodyParser.json())

let users = {}

app.post('/signup', (req, res) => {
  const { email, password } = req.body
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
        users[email] = hash
        console.log(users)
        res.json({ msg: `User ${email} Signed Up.`})
    });
  });
})

app.post('/login', (req, res) => {
  const { email, password } = req.body

  const hash = users[email]

  bcrypt.compare(password, hash, function(err, result) {
    if(result) {
      const payload = {
        email: email,
        iss: 'localhost:8080',
        role: 'Admin'
      }
      const token = jwt.sign(payload, secretKey)
      res.json({ token })
    } else {
      res.json({ token: null })
    }
  });
})

app.post('/private', (req, res) => {
  const { token } = req.body
  console.log(req.body)
  jwt.verify(token, secretKey, (err, decoded) => {
    if(err) {
      console.log(err)
      res.json({ msg: 'Invalid Token'})
    } else {
      console.log(decoded)
      res.json({ msg: 'All Good.'})
    }
  })
})

app.listen(8080)

