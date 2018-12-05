[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | 2 | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md)

---

# Week 4 > Lab 2

### Simple EJS

EJS is a server-side template language that allows us to combine HTML with Javacript in order to allow us to merge data with HTML. The result are dynamic web pages that can display different data using the same structure.

#### Objective

- Get a simple template running in EJS
- Know how to configure express to serve HTML generated from ejs
- Understand how to pass data using `res.render()`

#### Prerequisites

Create a new folder called `ejs-lab` in `brainstation\labs`

#### Part 1 - Install EJS

1. Initialize your project to use npm as we have done before.
2. Install express and ejs as we have done for libraries before.
3. Create a `server.js` file and setup the express boilerplate.
4. Configure express to use EJS

#### Part 2 - Create an EJS template

1. Create a template called `index.ejs`. Put it in a `views` directory inside of your project.
2. Create a GET endpoint for `/`
3. Using `res.render()` return the contents of `index.ejs` to ensure everything is properly linked up.

#### Part 3 - Pass data to render

1. Create an object that has your first name, last name, and email
2. Pass the object to `res.render()` with a key called 'user'
3. Use the data in the template to display the information in the rendered web page.

#### Part 4 - Filtering Data

Using the student data from last week's lab:

```JavaScript
const students = [
  {
    name: 'Brynhildr Sadler',
    program: 'Web Dev',
    grade: 75
  },
  {
    name: 'Joan Leon',
    program: 'UX',
    grade: 72
  },
  {
    name: 'Mark Summers',
    program: 'Web Dev',
    grade: 87
  },
  {
    name: 'Tanja Zawisza',
    program: 'Web Dev',
    grade: 92
  },
  {
    name: 'Slavomir Amato',
    program: 'UX',
    grade: 78
  },
  {
    name: 'Tihana Anand',
    program: 'UX',
    grade: 60
  },
  {
    name: 'Reima Ivov',
    program: 'Web Dev',
    grade: 95
  },
  {
    name: 'Demokritos Shafir',
    program: 'UX',
    grade: 83
  }
]
```

1. Create a template called `students.ejs`
2. Add the `students` array as a global variable in `server.js`
3. Create an endpoint called `/students` that renders the student data to HTML using `students.ejs`.
4. Create an endpoint called `/students/:program` that will filter the students based on the given program and render the filtered students using the `students.ejs` template.

---
[Week 4 Home](../ReadMe.md) | [Go to Lab 3 >>](./lab-03.md)
