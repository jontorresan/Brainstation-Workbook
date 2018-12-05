/* 
A User constructor. Creates uses that look like:

{
  name: 'Jonathan',
  email: 'jbluks@brainstation.io',
  printUser: Function(),
  editEmail: Function(email)
}
*/
function User(name, email) {
  this.name = name
  this.email = email
  this.printUser = function() {
    console.log('Name: ' + name + ' Email: ' + email)
  }
  this.editEmail = function(newEmail) {
    this.email = newEmail
  }
}

// An array of users
var users = []

// A function to add new users to the array
function addNewUser(name, email) {
  // Create a new user with our User constructor
  var newUser = new User(name, email)

  // Add the new user to the array
  users.push(newUser)
}

console.log(users)
addNewUser('Jonathan', 'j@gmail.com')
addNewUser('Tomy', 't@gmail.com')
console.log(users)
users[0].printUser()  // Call a method on an object
users[1].printUser()  

//===================================

const student = {
  fullName : {
    firstName : "Tim",
    lastName : "Johnstone"
  },
  grade: 12,
  birthDate: new Date("October 13, 2000"),
  courses : [
    {
      subject : "English",
      teacher : "Mr Smith",
      grade: 70
    },
    {
      subject : "Math",
      teacher : "Ms Jones",
      grade: 65
    },
    {
      subject : "Science",
      teacher : "Mr Gutenberg",
      grade: 67.5
    },
    {
      subject : "Gym",
      teacher : "Mr Sweeney",
      grade: 90
    },
    {
      subject : "History",
      teacher : "Ms Walters",
      grade: 82.5
    }
  ]
}

// Print the First Name and Last Name
console.log(student.fullName.firstName)
console.log(student.fullName.lastName)

// Print the birth date in DD/MM/YYYY format
var year = student.birthDate.getFullYear()
var date = student.birthDate.getDate()
var month = student.birthDate.getMonth() + 1

console.log(date + '/' + month + '/' + year)

// Print a list of the courses the student is taking
for(var i=0; i<student.courses.length - 1; i++) {
  console.log(student.courses[i].subject)
}

// Print the student average
var sum = 0
console.log(student.courses.length)
for(var i=0; i<student.courses.length; i++) {
  sum += student.courses[i].grade
}

console.log(sum / student.courses.length)


//=========================

// Example Student:
// var student = {
//   name: "Jonathan",
//   program: "Web Dev",
//   grade: 85
// }

// Student Constructor creates a new student
function Student(name, program) {
  this.name = name
  this.program = program
  this.courses = []
  this.grade = 0
  this.updateGrade = function(grade) {
    this.grade = grade
  } 
}

// Course Constructor creates a new course
function Course(name, teacher) {
  this.name = name,
  this.teacher = teacher
}

// Create some new courses
const webDev = new Course('Web Dev', 'Jonathan')
const ux = new Course('UX', 'Brad')

// Create a new student with the constructor
var jon = new Student('Jonathan', 'WDFT')
console.log(jon)
jon.updateGrade(80)  // Use the updateGrade method
jon.courses.push(webDev)  // A course for the student
console.log(jon)

// Create an array of students
let students = []
students.push(new Student('Tim', "WDFT"))
students.push(new Student('Brad', "UXFT"))
students.push(new Student('Stan', "UXFT"))

console.log(students)

for(var i=0; i<students.length; i++) {
  const student = students[i]
  console.log(student.name)
}