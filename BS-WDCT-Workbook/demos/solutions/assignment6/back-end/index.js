const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())

let carts = {}

const products = {
  hats: [
    {
      name: 'Regular Hat',
      price: 15,
      picture: '/imgs/hats/hat.jpg',
      type: 'shoe'
    },
    {
      name: 'Baseball Hat',
      price: 15,
      picture: '/imgs/hats/hat.jpg',
      type: 'shoe'
    },
    {
      name: 'Fedora',
      price: 15,
      picture: '/imgs/hats/hat.jpg',
      type: 'shoe'
    }
  ],
  shoes: [
    {
      name: 'High Top Sneaker',
      price: 15,
      picture: '/imgs/shoes/hightop.jpg',
      type: 'shoe'
    },
    {
      name: 'Running Shoe',
      price: 15,
      picture: '/imgs/shoes/hightop.jpg',
      type: 'shoe'
    },
    {
      name: 'Boots',
      price: 15,
      picture: '/imgs/shoes/hightop.jpg',
      type: 'shoe'
    }
  ]
}

try {
  console.log('Loading Carts...')
  carts = JSON.parse(fs.readFileSync('carts.json', 'utf8'))
} catch(e) {
  console.log(e.message)
  console.log('Continuing...')
}

app.post('/cart', (req, res) => {
  const { username, cart } = req.body
  carts[username] = cart
  fs.writeFile('carts.json', JSON.stringify(carts), 'utf8', (err) => {
    if(err) console.log(err)
  })
  console.log(carts)
  res.json(cart)
})

app.get('/cart', (req, res) => {
  const { username } = req.query
  if(carts[username]) {
    res.json(carts[username])
  } else {
    res.send({ success: false, message: `No user with name ${username}`})
  }
})

app.get('/products', (req, res) => {
  res.json(products)
})

app.listen(8080, () => {
  console.log('Listening on 8080')
})