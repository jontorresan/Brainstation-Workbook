const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || process.argv[2] || 8080

const studentRouter = require('./routes/students')

app.use(bodyParser.json())
app.use('/students', studentRouter)

app.listen(port, () => {
  console.log(`Listening on ${port}...`)
})