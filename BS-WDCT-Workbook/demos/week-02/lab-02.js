var x = 50

// Check if a number is > 50, between 25 and 50, or less than 25
if(x > 50) {
  console.log('> 50')
} else if(x >= 25 && x <= 50) {
  console.log('>= 25 and =< 50')
} else {
  console.log('< 25')
}

// Check if a number is even or odd
var c = 2

// Version 1: Test explicitly for even/odd, if it
//            is not even/odd, assume it's not a number
if(c % 2 === 0) {
  console.log('even')
} else if(c % 2 === 1 ) {
  console.log('odd')
} else {
  console.log('Not a Number')
}

// Version 2: Test first for NaN, if the value is a number,
//            then test for even/odd
if(isNaN(c)) {
  console.log('Not a Number')
} else {
  if(c % 2 === 0) 
    console.log('even') 
  else 
    console.log('odd')
}

// Print a message for how well a golf player did based on
// how many strokes vs par for a hole
var par = 5
var strokes = 3

if(strokes === 1) console.log("Hole in 1")
else if(strokes = par - 1) console.log("birdie!")
else if(strokes <= par - 2) console.log("eagle!")
else if(strokes === par) console.log("par")
else if(strokes === par + 1) console.log("bogey")
else if(strokes === par + 2) console.log("double bogey")
else console.log("not good")

switch(strokes) {
  case 1:
    console.log('Hole in 1')
    break;
  case par - 1:
    console.log('birdie')
    break;
  case par - 2:
  case par - 3:
  case par - 4:
    // Eagle covers anything better than a birdie. This solution
    // may not be perfect, but it covers situations up to a par 6
    // which covers most courses, although a higher par would cause an
    // error
    console.log('eagle')
    break;
  case par:
    console.log('par')
    break;
  case par + 1:
    console.log('bogey')
    break;
  case par + 2:
    console.log('double bogey')
    break;
  default:
    console.log('not good')
}


// Ternary Statements
var a = 5
var b = 7

var result = a < b ? 'a is less than b' : 'a is not less than b'
console.log(result)

var str = 12

console.log(typeof str)
var isString = typeof str === 'string' ? 'it is a string' : 'it is not a string'
console.log(isString)



