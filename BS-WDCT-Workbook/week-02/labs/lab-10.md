[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md) | [8](./lab-08.md) | [9](./lab-09.md) | 10 | [11](./lab-11.md) | [12](./lab-12.md)

---

# Week 2 > Lab 10

### Functional Programming Concepts

Javascript is a multi-paradigm language, which means there are many concepts behind how JS works and what we can do with it as programmers. One of the paradigms JS uses is called "Functional Programming" which means that we can represent the solutions to our problems as functions. Functional programming languages treat functions as the building block of programs, so functions are considered "first class citizens", which means functions can go anywhere and aren't treated as special. Functions can be assigned to variables, passed as parameters, or even returned as values. *(By comparison, Object Oriented Programming languages focus on objects as the main paradigm for approaching problems, Event Driven Programming focuses on events as the main paradigm for approaching problems, etc. There are many programming paradigms and all have advantages or disadvantages for the problems they solve.)*

This lab will help you get familiar with a few basic aspects of functional programming within Javascript.

#### Objective

- Understand what higher order functions are and get comfortable passing functions to them
- Understand how to chain functions together to avoid using temporary variables
- Understand what a pure function is and what is required to make a function pure

#### Prerequisites

- In your `/brainstation/labs` folder, create a file called `fp.js`
- Put all of your solutions to the problems in the `fp.js` file

#### Part 1 - Higher Order Functions

1. Create an array of students that looks like this:

```JavaScript
const students = [
  { name: "John", grade: 87 },
  { name: "Sarah", grade: 80 },
  { name: "Tim", grade: 90 },
  { name: "Linda", grade: 63 },
  { name: "Jeremy", grade: 72 },
  { name: "Amy", grade: 76 },
  { name: "Meghan", grade: 82 },
]
```
- Use the [Array.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) function to print out the details of each student e.g.) `"John's grade is 87"`

- Use the [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function to create a new array where each item is a string with the student details as above. Assign the results of running `Array.map()` to a variable called `studentDetails`

- Use `Array.forEach()` similar to before to print out the strings in `studentDetails`

- Use the [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) function to find all the students with a grade higher than 80. Assign the results to a variable called `filteredStudents`

- Use the `Array.forEach()` function to print out the student details as we did in the previous exercises

2. Another useful higher order function is [Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce). `reduce` takes the contents of an array and 'reduces' it using a function called a 'reducer' to a single item called an 'accumulator'. Given an array of numbers as follows:
```
const nums = [4,7,8,2,4,1,8,9]
```
- Use `reduce` to calculate the sum of the numbers
- Given the following array, use `reduce` to calculate the average of sub arrays and print out the averages. 

```JavaScript
const nums = [
  [1,6,9,2,5,4],
  [50,67,3,80,24,17],
  [100,77,50,35,12,56]
]

// result:
// [4.5, 40.1666666667, 55]
```

#### Part 2 - Chaining Functions

Using temporary variables gets tiring and unnecessary after a while. In JS, we can chain functions together, passing the results directly to the next function which makes our code cleaner and more readable.

1. Using the same array we started with, call the `filter()` function from above to filter the students with a grade higher than 70.

2. Without using a temporary variable, chain the results of `filter()` to `map()` that converts the student info into a string as before.

3. Without using a temporary variable, chain the results of `map()` to a `forEach()` that prints out each of the student details.

#### Part 3 - Pure Functions

Pure functions are a special type of function that:
- Always returns the same result given the same parameters
- Has no side effects, like printing to the screen, changing global variables, or modifying the file system

1. Declare a global array of numbers like:

```Javascript
let nums = [2,3,7,9,3,5,3,5,6]
```

- Write a function called `noDupes` that returns an array with no duplicate numbers. Do not modify the original array. Print out the original array and the new array to ensure that the original array did not change.

---
[Week 2 Home](../ReadMe.md) | [Go to Lab 11 >>](./lab-11.md)
