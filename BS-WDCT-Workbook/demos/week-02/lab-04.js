var students = [ 
  'Michael', 
  'Ryan', 
  'Sina', 
  'Munifa',
  'Woo Jae',
  'Mathew',
  'Kary',
  'Anita'
]

var name = 'Michael'
var studentFound = false

for(var i=0; i<students.length; i++) {
  if(name === students[i]) {
    studentFound = true
    break
  }
}

if(studentFound) {
  console.log('Student ' + name + '\'s position is ' + i)
} else {
  console.log(name + ' not found.')
}

var student = students.pop()
console.log(student)

students.push('Jonny')

var firstIndex = 0
var lastIndex = students.length - 1
var middleIndex = Math.ceil((students.length - 1) / 2)

console.log(students)
console.log(students[firstIndex])
console.log(students[lastIndex])
console.log(students[middleIndex])

// Adding new students
var newStudents = [
  'Tim',
  'Bonnie'
]

// Returns a new array, original array is not modified
var newList = students.concat(newStudents)
console.log(newList)

// Modifies the students array
students.push('Tim')
students.push('Bonnie')


// Calculate the average of each array of numbers
var nums = [
  [1, 2, 3, 27, 43, 16],
  [4, 5, 6],
  [7, 8, 9, 10],
  [1, 8, 9, 10, 22]
]

var average = []
for(var i=0; i<nums.length; i++) {
  var arr = nums[i]
  var sum = 0
  for(var j=0; j<arr.length; j++) {
    sum = sum + arr[j]
  }
  average.push(sum / arr.length)
}

console.log(average)

var nums = [ -1, 5, -6, 8, -9, 3, 10]

// Print largest number in array 'nums'
var largestNum = nums[0]
for(var i=1; i<nums.length; i++) {
  if(nums[i] > largestNum) {
    largestNum = nums[i]
  }
}
console.log(largestNum)

// Print only even numbers in array 'nums
for(var i=0; i<nums.length; i++) {
  if(nums[i] % 2 === 0) {
    console.log(nums[i])
  }
}


