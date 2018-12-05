[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: 1 | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md) | [8](./lab-08.md) | [9](./lab-09.md) | [10](./lab-10.md) | [11](./lab-11.md) | [12](./lab-12.md)

---

# Week 2 > Lab 1

### Javascript Basics
Let's practice and get familiar with Javascript fundamentals.

#### Objective

This lab introduces you to the very basic concepts of Javascript, and get's you comfortable 'running' Javascript code. We can run Javascript in the browser using the web developer tools, but we can also run Javascript in VSCode using the integrated terminal. You will understand how to write and run basic Javascript programs by the end of this lab.

#### Prerequisites
- JS names are written in [camelCase](https://en.wikipedia.org/wiki/Camel_case). Using camelCase is a common programming practice, so make sure your variables and function names are using it.

#### Part 1 - console.log() and Expressions
Create a file called `jsBasics1.js` in your `brainstation/labs` folder. Whenever you want to run the code, you can 'Right-click' and select 'Run Code' if you install the VSCode extension [code runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner). You can always use [console.log()](https://www.w3schools.com/js/js_output.asp) with any expression to see what it evaluates to.

- Write a multi-line comment to describe what Javascript is
- Use `console.log()` to print out the string `Hello World`
- Create a variable called `adding`
- Check the type of `adding` with `typeof()` and use `console.log()` to print out the value.
- Add a single line comment on the same line as the `console.log()` above describing the the type of `adding`
- Assign an expression `10+20` to `adding`
- How can we check the value of the variable?
- Check the type of `adding` with `typeof()`. Add another single line comment describing the type of `adding`
- Use `console.log()` to calculate an expression using `remainder`. What's the difference from using `divide`?
- Use `console.log()` to compare a *truthy* expression and a *falsey* expression with `||`
- Use `console.log()` to compare the same expression with `&&`. What's the difference between `&&` and `||`?
- Use `console.log()` to compare 6 to 66 and make it output `true`

#### Part 2 - Comparison and Types
Create a file called `jsBasics2.js` for this part of the lab.

- Using a multi-line comment, list some things that are `truthy`
- Using a multi-line comment, list some things that are `falsey`
- Use `console.log()` to `==` compare `10` to `"10"`
- Use `console.log()` to `===` compare `10` to `"10"`
- Use a multi-line comment to describe the difference between the above two outputs.
- Can you guess the output of: `typeof("hello world")`
- Can you guess the output of: `typeof(!"goodbye world")`
- Can you guess the output of: `!!!'false' === false`
- Can you guess the output of: `Boolean('false') !== false`

#### Completion
Understanding how to read and write computer programs is the most important skill you need to develop during this bootcamp. Just like reading or writing in another language, the more you do it, the more fluent you will become. Any resources or practice that you can do will help you learn faster. We will be using Javascript exclusively for every part of this program, so the more you can strengthen your Javascript skills early on, the easier later weeks will be. And, areas that are still cloudy can be cleared up in the coming weeks as we keep applying Javascript in new ways.

There are many online resources that you can use for practice, in addition to the in-class labs/assignments and [Programming Practice](../practice.md) that we provide. Feel free to use any that you find helpful. For further practice of the Javascript fundamentals, try working through [Codecademy's Intro to Javascript](https://www.codecademy.com/learn/introduction-to-javascript)
from chapters 1 - 6, or [Udacity's Introduction to Javascript](https://www.udacity.com/course/intro-to-javascript--ud803). We will be reviewing and practicing these concepts over the next few days.

---
[Week 2 Home](../ReadMe.md) | [Go to Lab 2 >>](./lab-02.md)
