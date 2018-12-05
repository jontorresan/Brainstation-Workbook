const request = require('request')
const fs = require('fs')

request('https://brainstation.io', function (error, response, body) {
  fs.writeFile('brainstation.html', body, () => {
    console.log('done')
  })
});