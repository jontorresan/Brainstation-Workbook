const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/login', function(request, response) {
  console.log(request.query)
  response.send('Logged In')
})

app.post('/login', function(request, response) {
  console.log(request.body)
  response.send('Logged In')
})


// app.get('/', function(request, response) {
//   console.log(__dirname)
//   response.sendFile(__dirname + '/index.html')
// })

app.get('/name', function (request, response) {
  response.send('Jonathan')
})

app.get('/sum', function(request, response) {
  const nums = request.query.nums.split(',')
  console.log(nums)

  let sum = 0
  for(let i=0; i<nums.length; i++) {
    sum += Number(nums[i])
  }

  response.send(`${sum}`)

  // const a = Number(request.query.a)
  // const b = Number(request.query.b)
  // const c = Number(request.query.c)

  //response.send(`${a + b + c}`)

})

app.get('/color', function(request, response) {
  const color = {
    name: 'red',
    rgb: {
      r: 127,
      g: 0,
      b: 0
    },
    hex: '#FF0000'
  }

  response.json(color)
})

app.listen(8080, () => {
  console.log('listening')
})