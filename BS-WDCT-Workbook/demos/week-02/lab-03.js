var alphabet = 'abcdefghijklmnopqrstuvwxyz'
var letter = 'z'
var found = false
var pos = 0

// Version 1: Using a boolean as a flag to indicate when found
while(!found) {
  if(alphabet.charAt(pos) === letter) {
    found = true
  } else {
    pos++
  }
}
// Version 2: Using the condition itself to exit the while loop
while(alphabet.charAt(pos) !== letter) {
  pos++
}

console.log('The letter ' + letter + ' is at position ' + (pos + 1))

// ========================================

var output = ''

// Output a list of numbers, repeating each number the amount of the number
// Version 1: for loop
for(var i = 5; i >= 1; i--) {
  output += String(i).repeat(i) + '\n'
}
console.log(output)

// Output a list of numbers, repeating each number the amount of the number
// Version 2: while loop
var i=5
while(i>=1) {  
  output += String(i).repeat(i) + '\n'
  i--
}
console.log(output)

// Output only even numbers
for(var i = 1; i <= 5; i++) {
  if(i % 2 === 0) {
    output += (i + ' ').repeat(i)
  }
}
console.log(output)