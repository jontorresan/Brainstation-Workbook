const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  const name = req.query.name
  res.render('index', { name })
})

app.get('/:name', (req, res) => {
  const name = req.params.name
  res.render('index', { name })
})

app.listen(8080)