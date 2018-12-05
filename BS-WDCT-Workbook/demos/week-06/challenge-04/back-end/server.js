const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

let name = ''

app.get('/name', (req, res) => {
  res.json({ name })
})

app.post('/name', (req, res) => {
  name = req.body.name
  res.json({ name })
})

app.listen(8080)