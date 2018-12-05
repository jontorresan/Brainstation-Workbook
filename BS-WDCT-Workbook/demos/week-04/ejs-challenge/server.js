const express = require('express')
const app = express()
const request = require('request')
const cheerio = require('cheerio')

app.set('view engine', 'ejs')

app.get('/search', (req, res) => {
  const query = req.query.q
  searchGoogle(query, res)
})

app.get('/search/:q', (req, res) => {
  const q = req.params.q
  searchGoogle(q, res)
})

function searchGoogle(query, res) {
  request(`https://www.google.ca/search?q=${query}`, (error, response, body) => {
    $ = cheerio.load(body)

    const titles = []

    $('h3').each((i, elem) => {
      titles.push($(elem).text())
    })
    res.render('search', { query, titles })
  })
}

app.listen(8080)