[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md) | 8 | [9](./lab-09.md) | [10](./lab-10.md) | [11](./lab-11.md) | [12](./lab-12.md)

---

# Week 2 > Lab 8

### JavaScript Objects

#### Objective
- Understand what object literals are and the structure of objects as key/value pairs
- Understand how to create constructors that can be used to create objects with different Values
- Understand how to add methods to objects

#### Prerequisites
- In your `/brainstation/labs` folder, create a file called `objects.js`
- Put all of your code in the `objects.js` file

#### Part 1 - Object Fundamentals

1. Create an object literal that represents yourself as a BrainStation student that has:
    - the student name (your name)
    - the program they are studying (e.g. WDFT, UXFT)
    - their grade (any grade you want!)

2. Using the object from step \#1, create a constructor called `Student` that can be used to create new students.

3. Create an empty array called `students`. Use your constructor from step \#2 to push 3 or 4 students onto the array.

4. Write a loop to go through the array, and print out all of the student names. e.g.)

```
Jim
Sally
Steve
Jane
```

5. Objects can be complex and can contain anything, even other objects. The objects we've looked at so far are simple, but in real life, objects are more complex. To access different parts of an object, we use the `.` notation. Given the following object:

```JavaScript
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
```
- Print out the first and last name of the student
- Print out the Birth Date of the Student in the form of 'MM/DD/YYYY'
- Print out the name of each course the student is taking
- Calculate the student's GPA for the year. You can find out how to calculate a GPA [here](https://blog.prepscholar.com/how-do-you-calculate-gpa)

#### Part 2 - Adding Methods to Objects

Methods are just functions, but they are special because they are attached to objects. You can use "method" and "function" interchangeably when talking about functions on objects, although method is more technically correct. *(Aside: Regular functions are actually methods as well, behind the scenes, they are just attached to the global Window object in the browser.)*

1. Using the `Student` constructor from the previous section, add a method for updating the student's grade called `updateGrade()` that takes a parameter `grade`. Test it by calling your method and printing out the value on the object.

2. Using the `Student` constructor, add a method called `average()` that returns the average of all of the students grades.

---
[Week 2 Home](../ReadMe.md) | [Go to Lab 9 >>](./lab-09.md)
