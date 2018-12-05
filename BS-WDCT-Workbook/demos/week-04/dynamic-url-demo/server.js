const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const users = {
  jonathan: {
    firstName: 'Jonathan',
    lastName: 'Bluks',
    email: 'jbluks@brainstation.io',
    statuses: ['I\'m happy', 'Today is a good day', 'bla bla blah'],
    friends: ['tomy']
  },
  tomy: {
    firstName: 'Tomy',
    lastName: 'Reyes',
    email: 'treyes@brainstation.io',
    statuses: ['I\'m happy', 'Today is a good day', 'bla bla blah'],
    friends: ['jonathan']
  }
}

app.get('/:username/statuses', (req, res) => {
  const username = req.params.username
  const user = users[username]

  res.render('statuses', { 
    currentPage: 'statuses',
    username, user })
})

app.get('/:username/friends', (req, res) => {
  const username = req.params.username
  const user = users[username]
  console.log(req.path)

  res.render('friends', { 
    currentPage: 'friends',
    username, 
    user 
  })
})



app.listen(8080)