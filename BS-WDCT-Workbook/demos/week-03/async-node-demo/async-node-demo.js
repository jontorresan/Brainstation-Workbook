// Require Libraries. These libraries are built into node, so
// we don't need to NPM install them
const https = require('https')
const fs = require('fs')

// https is an object
// it has a method (aka function) that will send a HTTP GET request
// to a url
// First parameter - the url
// Second parameter - a function that will handle the response
https.get('https://brainstation.io', function(response) {
    //We will use this to accumulate the chunks
    let body = ''

    // Everytime a chunk arrives, we are notified through the
    // data event. We will add the chunks onto the body
    response.on('data', function(chunk) {
      body += chunk
    })

    // Once all chunks have been received, we are notified
    // through the end event. We can use a callback function
    // to print out the entire body of text that we received
    response.on('end', function() {
      console.log(body)
    })
})

// Read a file asynchronously
fs.readFile('file.txt', 'utf8', function(error, data) {
  // Once the file is opened, this function will run
  // and data will have the contents of the file
  console.log('Async:', data)
})

// Read a file synchronously. This will finish before
// the above readFile because this will block the code and not
// allow anything to happen until the file is read.
const contents = fs.readFileSync('file.txt', 'utf8')
console.log('Sync:', contents)

// This will print when the code is finished running, but
// before the Async readFile
console.log('done')