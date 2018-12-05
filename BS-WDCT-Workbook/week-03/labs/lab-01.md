[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: 1 | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md) | [8](./lab-08.md) | [9](./lab-09.md)

---

# Week 3 > Lab 1

### Node Basics

Node is a program that we can use to run Javascript on the command line - without a browser. This allows us to write server-side/back-end services in Javascript! Which means that the skills we have been learning for the browser, can be applied to the server as well. This lab will help you get familiar with writing and running Javascript programs with node.

#### Objective

- Understand how to use node on the command-line
- Understand how to write Javascript programs for node

#### Prerequisites

- In your `/brainstation/labs` directory create a file called `node-lab.js`

#### Part 1 - Running Node: 'Hello World'

1. Put a `console.log('Hello World')` in your `node-lab.js` file.
2. Run the file in your terminal using node

#### Part 2 - Passing Command Line Arguments to Node

You can run your own javascript files just like many of the command line tools we have been using. That means that we can pass in arguments from the command line that we will be able to access inside of our javascript.

1. Modify your `node-lab.js` file to have the following line:
```JavaScript
console.log(process.argv)
```
- Run your program as follows:
```code
> node node-lab.js 1 2 3
```
- What prints out? What does that tell you about what `process.argv` is? Read about Node's [process](https://nodejs.org/api/process.html) to understand more about what is going on. It is very common to use *process* to configure our Node applications from the outside without having to modify code.
2. Write a loop in `node-lab.js` that prints out all of the command-line arguments that you entered, but ignore the node command, and the file name.
- Modify your program to print out the sum of the numbers that are provided on the command line. There can be any amount of numbers provided. *Hint: Remember what kind of thing `process.argv` is.*
- Add some error handling to your program:
    - Add all numbers provided together and print out the sum, but if any argument is not a number is, print out an additional message listing the arguments that aren't numbers

---
[Week 3 Home](../ReadMe.md) | [Go to Lab 2 >>](./lab-02.md)
