const request = require('request')
const readlineSync = require('readline-sync')
const cheerio = require('cheerio')
const fs = require('fs')

const searchTerm = readlineSync.question('What would you like to search for? ')

request('http://www.google.com/search?q=' + searchTerm, function(err,response, body) {
  const $ = cheerio.load(body)

  fs.writeFile('google.html', body, () => {})

  // console.log($('div#resultStats').text())

  let titles = []

  $('.r').each(function(i, elem) {
    titles.push($(elem).text())
    console.log($(elem).text())
  });

  // $('span.st').each(function(i, elem) {
  //   console.log($(elem).text())
  // });

})