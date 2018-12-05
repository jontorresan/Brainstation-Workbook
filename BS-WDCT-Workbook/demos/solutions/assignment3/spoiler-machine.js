// Import the required Node Libraries
const request = require('request')
const readlineSync = require('readline-sync')
const cheerio = require('cheerio')

// Get the movie title and spoiler time from the command line
const movieTitle = process.argv[2]
const spoilerTime = Number(process.argv[3])

const apiKey = 'YOUR API KEY HERE'
const getMovieUrl = movie => `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movie}`

// Call the spoil movie function
spoilMovie(movieTitle, spoilerTime)

/**
 * @function    spoilMovie
 * @description Will use a movie api to look up a movie and get a spoiler about the movie.
 * @param       {string} title
 * @param       {number} time
 */
function spoilMovie (title, time) {
  // Figure out what the user provided on the command line and ensure that
  // they have provided valid input
  const userInput = validateInput(title, time)
  if (userInput) {
    // Get the movie and timeout from the userInput
    const { movie, timeout } = userInput

    // Get the movie info using the Movie API
    request(getMovieUrl(movie), (error, response, data) => {
      // If an error occurred, print a message and return
      if (error) {
        printError(error)
        return
      }

      // Get the movies from the data. The data must first be turned
      // into an actual JavaScript object, then we can get the results
      // from the data
      const movies = JSON.parse(data).results

      // If movies were found that matched, we'll have at least one object
      // in the array.
      if (movies && movies.length > 0) {
        printHeading(
          `*** The ${movie} spoiler is going to appear in ${timeout} seconds...`
        )

        // Pass the movie title to the Google scraping function
        // while the user waits for the spoiler
        // Use a callback function so that once we have the google results,
        // we can print set the timer and then print the results.
        // If the time is really short, than the spoiler could print before the
        // google results
        searchGoogle(movie, () => {
          // Wait for the amount of seconds provided by the user
          // before printing out the spoiler
          setTimeout(() => {
            printHeading(`*** Time's up! The ${spoilerTitle} spoiler is:`)
            printText(`${spoilerContent}\n`)
          }, timeout * 1000)
        })

        // Get the spoiler content
        const spoilerTitle = movies[0].title
        const spoilerContent = movies[0].overview


      } else {
        // If no results came back, then that movie doesn't exist
        printHeading(
          `Unfortunately, ${movie} is not in our database. Try again with a different movie!`
        )
      }
    })
  }
}

/**
 * @function     validateInput
 * @description  Checks for valid user input. If no input provided, will prompt the user
 *               for input.
 * @param        {string} movie - name of movie
 * @param        {number} timeout - timeout for the spoiler
 */
function validateInput (movie, timeout) {
  // Set the userInput to initially be null.
  // If the input is invalid we will return null (falsey)
  let userInput = null

  // If a movie has been provided and a timeout has been provided
  // that is a valid number, everything is good.
  if (movie && (timeout && !Number.isNaN(timeout))) {
    userInput = { movie, timeout: Number(timeout) }
  } else if (!movie && !timeout) {
    // If no movie or timeout provided, prompt the user for input
    const movieTitle = readlineSync.question('\nPlease enter a movie title: ')
    const spoilerTimeout = readlineSync.questionInt(
      'Please enter a timeout in seconds: '
    )
    userInput = { movie: movieTitle, timeout: Number(spoilerTimeout) }
  } else {
    // The provided arguments were incorrect in some way, inform the user
    printHeading(
      'Spoiler Machine Usage: <movie title> <spoiler timeout in seconds>'
    )
  }

  // If null, there was an error, otherwise it will be an object with
  // the movie and the timeout
  return userInput
}

/**
 * @function    searchGoogle
 * @description Use the movie title to search Google and prints out the search
 *              results from the first page.
 * @param       {string} movie - title of the movie to be spoiled
 * @param       {function} callback - a function that will be called to display the spoiler once
 *                                    the google results are returned
 */
function searchGoogle (movie, callback) {
  const googleURL = `https://www.google.ca/search?q=${movie}`
  request(googleURL, (error, response, body) => {
    // Print error and return if something went wrong
    if (error) {
      printError(error.msg)
      return
    }

    // Convert the body into a DOM that we can traverse using Cheerio
    const $ = cheerio.load(body)

    // Now that we have the google results loaded, call the callback function
    // for the spoiler. The spoiler will always print after the google results,
    // no matter how short the timeout is.
    callback()

    printHeading(
      `While you wait, here's the top Google Results about ${movie}:`
    )

    // For each search result found, print out the text
    $('h3').each((i, elem) => {
      printText($(elem).text())
    })
  })
}

/**
 * @function    printHeading
 * @description Helper function that prints out a line surrounded
 *              by newlines before and after.
 * @param       {string} text - text to be printed
 */
function printHeading (text) {
  printText(`\n${text}\n`)
}

/**
 * @function    printText
 * @description Helper function that prints out a line of text
 * @param       {string} text - text to be printed
 */
function printText (text) {
  console.log(text)
}

/**
 * @function    printError
 * @description Helper function that prints out an error
 * @param       {string} msg - error message to be printed
 */
function printError (msg) {
  console.error(msg)
}
