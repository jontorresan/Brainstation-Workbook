// A function that prints a message given a name
function printName(name) {
  console.log('The name is: ' + name)
}

// Print a single name
var myName = 'Jonathan'
printName(myName) // Can use a variable
printName('Tim')  // Can use a primitive data type
printName('Tomy')


var names = ['Jonathan', 'Tomy', 'Tim']

// Print the names in an array
function printNames(arrayOfNames) {
  // Loop through the array to access each index
  for(var i=0; i<arrayOfNames.length; i++) {
    // Print the name for each position of the array
    printName(arrayOfNames[i])
  }
}

// Call the function
printNames(names)




var arr = [1, 2, 3, 4, 5]
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// => [2, 3, 4, 5, 1]

// Version 1: Rotate Array without using shift/push
function rotateArray(arrayToRotate) {
  var newArray = arrayToRotate.slice(0)
  first = newArray[0]
  for(var i=0; i<newArray.length; i++) {
    newArray[i] = newArray[i + 1]
  }
  newArray[newArray.length - 1] = first
  return newArray
}

// Version 2: Rotate Array using shift/push
// function rotateArray(arrayToRotate) {
//   var newArray = arrayToRotate.slice(0)
//   // Remove the first item, and store in a temporary variable
//   var item = newArray.shift()
//   // Push the item on to the back of the array 
//   newArray.push(item)
//   return newArray
// }

var newArray = rotateArray(arr)

console.log(newArray)
console.log(rotateArray(arr2))
console.log(arr)