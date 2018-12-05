const a = 100
const b = 101

function myFunc() {
  let a = 1
  b = 5
  if(true) {
    let a = 2
    b = 3
    console.log(a)  // Prints 2 - block scoped, shadows the a at line 5
  }
  console.log(a)  // Prints 1 - block scoped to the function
  console.log(b)  // Prints 3 - without var/let/const, overrides the global b
}

myFunc()
console.log(a)  // Prints 100
console.log(b)  // Prints 3 - was overwritten at line 13


// ========================================

// Function that adds 1 to a number
function addOne(num) {
  return num + 1
}

// Function that multiplies a number by 2
const double = (num) => {
  return num * 2
}

// Function that squares a number
const square = num => {
  return num * num
}

/*
 * num:       number - to be modified in some way
 * modFunc:   function - provided a number, this function will modify it 
 * callback:  function - can be used to perform additional operations on the 
 *                       result, for example printing the result
 */
const modifyNum = (num, modFunc, callback) => {
  // calculate the result using modFunc
  const result = modFunc(num)

  // use the callback function to do something with the result
  // if no callback is provided (will be undefined), then skip
  if(callback) callback(result)

  // return the result in case the calling function wants
  // to use it
  return result
}

console.log(modifyNum(2, addOne, (num) => {
  console.log(num)
}))
console.log(modifyNum(2, double))
console.log(modifyNum(2, square))