var username = ''

do {
  alert('Please enter your username')
  username = prompt('Enter Username: ')
} while(!username)


// while(!username) {
//   alert('Please enter your username')
//   username = prompt('Enter Username: ')
// }
console.log('Thanks ' + username)
