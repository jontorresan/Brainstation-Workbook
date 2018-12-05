[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md) | [8](./lab-08.md) | [9](./lab-09.md) | [10](./lab-10.md) | [11](./lab-11.md) | 12

---

# Week 2 > Lab 12

### Intro JavaScript ES6

There are some notations that are part of what can be considered 'modern' JavaScript. These notations have been around since 2015 and are commonly used and should be considered a standard way for you to write your JavaScript once you understand them. They are generally considered improvements that make JavaScript easier to use and more powerful. We'll look at 3 notations here, but there are numerous improvements to JavaScript that have been added, and we will look at more throughout this program.

#### Objective

- Get comfortable with some commonly used ES6 notation including:
    - `let`/`const`
    - Arrow notation (`=>`) for Functions
    - template literals

#### Prerequisites

- Create a file in `brainstation/labs` called `es6.js`

#### Part 1 - let / const

1. Recall that `let` and `const` are "block scoped". Write a `for` loop that prints out the numbers 1 - 5. Initialize the `i` using `var`. After the for loop `console.log(i)`.

2. Copy the `for` loop and the `console.log`, but this time use `let` to initialize the `i`. What's the difference?

3. Declare a global variable using `const`. Write a function that changes the global variable and prints out the new value. What happens?

#### Part 2 - Arrow Notation

The arrow notation (`=>`) is an abbreviated way of writing functions. There are also some differences in how `this` is handled for function calls, but for now, we can treat `function` and `=>` as the same, just different syntax

1. Write a function that prints out your name using the `function` keyword.

2. Rewrite the function using the arrow notation

3. Create a simple html page with a button. Using jQuery and alert, print the message 'Hello World' when the user clicks the button. Use the arrow notation for your "callback" function.

#### Part 3 - Template literals

Another really nice feature in Javascript is the ability to put variables inside of strings instead of using `+` to concatenate variables and strings.

1. Create a variable called `name` with the value being your name. Using a template literal, `console.log` the message "Hello my name is X" where X is your name.

2. Using the student object from [Lab 7](./lab-07.md), print out the following transcript using template literals:

```
Student Name: Tim Johnstone
Grade: 12
Birth Date: October, 13, 2000

COURSES
=======

Subject: English
Teacher: Mr Smith
Grade: 70

Subject: Math
Teacher: Ms Jones
Grade: 65

etc...
```

3. **Bonus #1:** Try using higher order functions when you can to make your code cleaner and more declarative.

4. **Bonus #2:** Try putting this javascript code into an html page and converting the student information into html fragments that you can display on the web page using jQuery

---
[Week 2 Home](../ReadMe.md)
