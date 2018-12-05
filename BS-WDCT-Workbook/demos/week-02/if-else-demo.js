var timeOfDay = 'afternoon'

// Printing a greeting using if/else structure
if(timeOfDay === 'morning') {
  console.log('Good Morning!')
} else if(timeOfDay === 'afternoon') {
  console.log('Good Afternoon!')
} else if(timeOfDay === 'evening') {
  console.log('Good Evening!')
} else {
  console.log('Good Night!')
}

// Printing a greeting using switch
switch(timeOfDay) {
  case 'morning':
    console.log('Good Morning!')
    // Don't forget that break is required to break out of switch
    // once match is found.
    break;  
  case 'afternoon':
    console.log('Good Afternoon!')
    break
  case 'evening':
    console.log('Good Evening!')
    break
  default:
    // This will run if no previous cases matched
    console.log('Good Night!')
}

var username = 'jonathan'
var password = ''

// Simple if/else statement that checks if a username/password have been provided
if(username && password) {
  console.log('Logged In!')
} else {
  console.log('Please provide your username/password.')
}