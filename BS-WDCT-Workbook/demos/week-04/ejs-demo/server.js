const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const greetings = [
  'Hello',
  'Bonjour',
  'Hola'
]

function printHello() {
  return 'Good Day'
}

app.get('/test', (req, res) => {
  const name = req.query.name
  const data = {
    user: name,
    greetings: greetings,
    printHello: printHello
  }
  res.render('test', data)
})

app.listen(8080)