const readlineSync = require('readline-sync')

const name = readlineSync.question('Please enter your name: ')

console.log('Hello', name)