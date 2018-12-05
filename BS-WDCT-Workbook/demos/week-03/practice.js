// A function that creates an array of size n with random numbers
// from 0 - 9
function randomNums(n) {
  let arr = []
  for(let i=0; i<n; i++) {
    arr.push(Math.floor(Math.random()*10))
  }
  return arr
}

let numsArray = randomNums(20)

console.log(numsArray)


// Find the number that occurs the most in the above array
// track the max number that has the max count
let maxNum = 0
let maxCount = 0

// Loop through the entire array of numbers
for(let i=0; i<numsArray.length; i++) {
  // get a number to count
  let num = numsArray[i]
  // set count to the start: 1
  let count = 1
  // Loop through the rest of the array and look for num
  // if we find num, then we increment the count
  for(let j=i+1; j<numsArray.length; j++) {
    if(num === numsArray[j]) {
      count++
    }
  }
  // If the count for the current num is greater than
  // the maximum count we have found so far, replace
  // it.
  if(count > maxCount) {
    maxCount = count
    maxNum = num
  }
}

console.log('The winner is: ' + maxNum + ' with ' + maxCount + ' occurrences.')

// Remove the duplicates from the array

let arr = []
for(let i=0; i<numsArray.length; i++) {
  // Way 1: Starting with an empty array, push numbers onto the
  //        empty array if they don't exist in the array yet. The
  //        new array will contain 1 of every number
  if(arr.indexOf(numsArray[i]) === -1) {
    arr.push(numsArray[i])
  }
  
  // Way 2: Loop through the array and splice out all duplicates 
  //        The array will shrink as duplicate numbers are eliminated
  //        until all that is left is one occurrence of each number.
  // for(let j=i+1; j<numsArray.length; j++) {
  //   if(numsArray[i] === numsArray[j]) {
  //     numsArray.splice(j, 1)
  //   }
  // }
}
console.log(arr)
//console.log(numsArray)