/**
 * @file  guessing-game.js
 * 
 * Implements a simple game where the user is asked to guess a number between
 * 1 and n where n is as maximum provided by the user. The game will track
 * the number of wins and losses, and the user can select the difficulty level
 * (number of guesses they are allowed).
 * 
 *  JSDoc: http://usejsdoc.org/index.html
 */

/**
 * @function      getDifficultyFromUser
 * @description   Ask the user for the number 1 - 5 to indicate difficulty level of the game.
 * @returns       {number} The difficulty level of the game representing the number of guesses
 *                before game over
 */
function getDifficultyFromUser() {
  // number of guesses the user gets (e.g. 1 -> 7 guesses, 5 -> 3 guesses)
  return 8 - getNumberFromUser(1, 5, 'What difficulty level would you like [1 - 5]? ', `Please guess a number between 1 and 5`)
}

/**
 * @function      generateRandomNumber
 * @description   Generate a random number between 1 and max
 * @param         max {number} The ceiling of the random number generated
 * @returns       {number} The random number
 */
function generateRandomNumber(max){
  return Math.floor(Math.random()*max) + 1
}

function getNumberFromUser(min, max, msg, errorMsg) {
  let num = min
  let valid = false
  do {
    // Ensure a valid number is entered
    num = Number(prompt(msg))
    if(!isNaN(num)) {
      num = Math.abs(num)
      if(max === null || num <= max) valid = true
      else if(num > max) printMessage(errorMsg)
    } else {
      printMessage(errorMsg)
    }
  } while(!valid)
  return num
}

/**
 * @function      getGuessFromUser
 * @description   Prompt user for a guess between 1 and the max, and returns the user's guess
 * @param         max {number} The ceiling of the guess
 * @returns       {number} The number the user guesses
 */
function getGuessFromUser(max){
  return getNumberFromUser(1, max, 'Enter a guess: ', `Please guess a number between 1 and ${max}`)
}

/**
 * @function      getMaxFromUser
 * @description   Prompt user for a number that will be the maximum number for the guessing game
 * @returns       {number} The number to be used as a maximum for the game
 */
function getMaxFromUser(){
  return getNumberFromUser(1, null, 'Please enter a number: ')
}

/**
 * @function      isGuessCorrect
 * @description   Check the guess of the user to see if it's correct. If it's not, will check how
 *                close the guess is
 * @returns       {string} Indicates how close the guess is. 
 *                'correct' when there is a match,
 *                'high' or 'low' when guess is less than 10 off
 *                'very high' or 'very low' when guess is greater than 10 off
 *                'very close' when the guess is less than 5 off
 */
function isGuessCorrect(goal, guess){
  if(guess === goal) return 'correct'
  else if(Math.abs(goal - guess) < 5) return 'very close'
  else if(goal - guess > 10) return 'very low'
  else if(guess < goal) return 'low'
  else if(guess - goal > 10) return 'very high' 
  else return 'high'
}

/**
 * @function      printMessage
 * @description   Output messages to the user, beings with a new line for spacing.
 */
function printMessage(msg) {
  alert(`${msg}`)
}

/**
 * @function      guessResultMessage
 * @description   Print message based on the accuracy of the user guess
 */
function guessResultMessage(correct) {
  switch(correct) {
    case 'very close':
      return 'You\'re really close!'
    case 'high':
      return 'Close, but your guess was a bit too high. Try again....'
    case 'very high':
      return 'Your guess way too high! Try again...'
    case 'low':
      return 'Close, but your guess was a bit too low. Try again...'
    case 'very low':
      return 'Your guess way too low! Try again...'
  }
}

function getEndGameFromUser() {
  return confirm('Would you like to play again?')
}

/**
 * @function      startGame
 * @description   Start game loop. Will not exit until user quits by typing 0, or selecting 'n' when 
 *                asked if they would like to play again.
 */
function startGame() {
  // Get the user's name
  let name = prompt('Please enter your name: ')
  printMessage(`Hi ${name}! Welcome to the Number Guessing Game!`)
  
  // Get the difficulty level
  let difficulty = getDifficultyFromUser()
  
  printMessage(`Excellent. You will have ${difficulty} tries to guess the number.`)

  // Intialize the game state
  let round = 0
  let wins = 0
  
  do {
    round++
    printMessage(`Round ${round}`)

    //Get the maximum number for this round
    let max = getMaxFromUser()

    printMessage(`I'm going to pick a number between 1 and ${max}. Can you guess what it is?`)

    // Initialize the state for this round
    let goal = generateRandomNumber(max)
    let correct = ''
    let guess = 0
    let turns = 0

    // Ask the user for a guess until they either guess the correct number
    // or use up all their guesses
    do {
      turns++

      guess = getGuessFromUser(max)

      //If the user input's 0, end the game
      if(guess === 0) break

      // Check the user's guess
      correct = isGuessCorrect(goal, guess)
      printGuessResult(correct)
      printMessage(`You have ${difficulty - turns} ${difficulty - turns === 1 ? 'try' : 'tries' } left`)

    } while(correct !== 'correct' && turns < difficulty)
    
    //Print out a message for this round
    if(guess === 0) {
      printMessage(`Finished so soon...?`)
      break
    } else if(correct === 'correct') {
      printMessage(`Great job ${name}! You guessed right!`)
      wins++
    } else {
      printMessage(`Sorry ${name}, you lose.`)
    }

    
    // Keep looping until user selects 'cancel'
  } while(getEndGameFromUser())

  // Print end game message
  printMessage(`Your final score is: ${wins} ${wins === 1 ? 'Win' : 'Wins' } and ${round - wins} ${round - wins === 1 ? 'Loss' : 'Losses' }.`)
  printMessage(`Thanks for playing ${name}!`)
}