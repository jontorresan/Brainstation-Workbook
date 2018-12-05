const request = require('request')

const fetchData = (url, callback) => {
  request(url, (error, response, body) => {
    console.log(JSON.parse(body))
    callback(JSON.parse(body))
  })
}

module.exports = { fetchData }