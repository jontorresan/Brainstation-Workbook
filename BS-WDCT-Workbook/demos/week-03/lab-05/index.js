const request = require('request')
const readlineSync = require('readline-sync')

// A function that will ask the user for a url, and print 
// the contents of the body from that url
function showHtml() {
  const url = readlineSync.question("Please enter a url: ")
  // Look up the url, and get the body
  request(url, function (error, response, body) {
    //print the body
    console.log(body)
    //ask the user if they would like to enter another url
    if(readlineSync.keyInYNStrict('Would you like to see more HTML?')) {
      // If they do, we call ourselves again. This is called recursion
      // which is when a function calls it self. As long as the
      // user enters 'y', then we will call ourselves again, going through
      // the same steps. Recursion is another method of looping.
      showHtml()
    }
  })
}

showHtml()