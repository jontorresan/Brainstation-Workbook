const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

const users = [
  {
    id:'0',
    name: 'Jonathan',
    email: 'jbluks@brainstation.io'
  },
  {
    id: '1',
    name: 'Tim',
    email: 'tim@brainstation.io'
  },
  {
    id: '2',
    name: 'Tomy',
    email: 'tomy@brainstation.io'
  }
]

function User(id, name, email) {
  this.id = id
  this.name = name
  this.email = email
}

app.get('/users', (req, res) => {
  res.json(users)
})

app.get('/users/:userId', (req, res) => {
  const { userId } = req.params

  // With the higher order function find
  const user = users.find(user => userId === user.id)
  if(user) res.json(user)
  else res.json({ error: `User ${userId} not found`})

  // Without the higher order function find
  // let user = {}
  // for(let i=0; i<users.length; i++) {
  //   if(userId === users[i].id) {
  //     user = users[i]
  //     break;
  //   }
  // }
  // res.json(user)
})

app.post('/users', (req, res) => {
  const { id, name, email } = req.body
  users.push(new User(id, name, email))
  res.json(users)
})

app.put('/users', (req, res) => {
  const { id, name, email } = req.body
  const user = users.find(user => id === user.id)
  if(name) user.name = name
  if(email) user.email = email
  res.json(user)
})

app.delete('/users', (req, res) => {
  const { id } = req.body
  const index = users.findIndex(user => id === user.id)
  users.splice(index, 1)
  res.json(users)
})

app.listen(8080, () => {
  console.log('listening')
})