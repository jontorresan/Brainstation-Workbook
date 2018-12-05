const express = require('express')
const app = express()

const goodbyeMsg = 'Goodbye!'
const helloMsg = 'Hello!'

const greetings = [
  'Hello',
  'Bonjour',
  'Hola'
]

app.get('/hello', function(request, response) {
  const name = request.query.name

  let htmlOutput = '<h1>Some Greetings:</h1>'
  htmlOutput += '<ul>'
  for(let i=0; i<greetings.length; i++) {
    htmlOutput += `<li>${greetings[i]} ${name}</li>`
  }
  htmlOutput += '</ul>'
  console.log(htmlOutput)
  response.send(htmlOutput)
})

app.get('/goodbye', function(request, response) {
  response.send(`<h1>Get: ${goodbyeMsg}</h1>`)
})

app.post('/goodbye', function(request, response) {
  response.send(`<h1>Post: ${goodbyeMsg}</h1>`)
})

app.listen(8080, function() {
  console.log('Listening on port 8080')
})