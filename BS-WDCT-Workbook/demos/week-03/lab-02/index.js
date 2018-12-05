const knockKnock = require('knock-knock-jokes')
const readlineSync = require('readline-sync')

do {
  console.log(knockKnock())
} while(readlineSync.keyInYNStrict('Do you want to hear another joke?'))

console.log('Guess you didn\'t like my jokes.')

