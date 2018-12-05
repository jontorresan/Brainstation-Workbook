const fs = require('fs')

const fileName = 'content.txt'

// Writing a Promise based function
function readFilePromise(fileName) {
  // Return a promise to the caller
  return new Promise((resolve, reject) => {
    // All code goes inside of this callback function.

    // Do some stuff like reading a file
    fs.readFile(fileName, 'utf8', (err, data) => {
      if(err) {
        // If an error occurs, use the reject function provided
        // in the parameters above
        reject(err)
      } else {
        // If everything is successful, resolve with whatever
        // data the user is expecting.
        resolve(data)
      }
    })
  })
}

// Promise using then/catch
readFilePromise(fileName)
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })

// Async function that uses async/await format
// Code is written in a more synchronous style.
const getData = async (fileName) => {
  // try block is where code needs to go, asynchronous
  // or synchronous code can go here.
  try {
    // Use the await keyword to indicate this function is an asynchronous
    // function
    const data = await readFilePromise(fileName)
    console.log(data)
  } catch(err) {
    // Catch block
    // All errors will end up here to be handled.
    console.log(err)
  }
}

getData(fileName)


