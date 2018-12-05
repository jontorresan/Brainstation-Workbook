[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | 2 | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md) | [8](./lab-08.md) | [9](./lab-09.md) 

---

# Week 3 > Lab 2

### NPM Fundamentals

NPM is the *Node Package Manager* that allows developers to install libraries their programs can use to enhance the functionality by taking advantage of the expertise and work of others. In working with Node you will be using NPM a lot.

*Note: Another package manager is called ['Yarn'](https://yarnpkg.com/en/) and developed by Facebook. It is npm-compatible and can be used interchangeably with npm. Yarn tends to be faster than npm.*

#### Objective

- Get comfortable working with npm
- How to use npm to initialize a project.
- Understanding what package.json is
- How to install and use libraries with npm

#### Prerequisites

- Create a folder in `/brainstation/labs` called `node-lab`

#### Part 1 - npm init and package.json

NPM is used to manage the libraries (or packages) that our program needs. In order to do that we need to initialize our project to use npm. We do that using the `npm init` command.

1. In your `node-lab` folder, run the `npm init` Command

2. Run the `ls` command on your folder. What did `npm init` do?

3. Open up `package.json` to see it's contents

#### Part 2 - Installing NPM tools

We can install whatever tools and libraries we want from [npm](https://www.npmjs.com). In fact, if you want to do something in your program, there's a good chance that there is already an npm tool or library available to help.

1. Using npm, we can install tools that can make our jobs easier as developers. Once such tool is called [nodemon](https://github.com/remy/nodemon). Follow the instructions on the previous link to install `nodemon`.
    - Hint: `-g` is an option that we can include with the `install` command. Using `-g` will make what we are installing available *globally* on our computer, so we can use the command anywhere.

2. Create a file in your `node-lab` folder called `hello-world.js`
    - Print out 'Hello World'
    - Add a line with setTimeout(()=> { console.log('Done')}, 1000*60*2)
    - Run your program from the command line with `nodemon hello-world.js`
    - Notice that `nodemon` prints out some messages about watching files.
    - Go back to `hello-world.js` and change your program to print out 'Goodbye World'
    - What happens in the terminal?

#### Part 3 - Installing and using NPM libraries

Libraries are like mini-programs that our programs can use and are made up of functions and objects. We can include libraries in our projects that we want to use.

1. We're going to create a simple program that uses a library to print out random knock-knock jokes. Go to [knock-knock-joke](https://www.npmjs.com/package/knock-knock-jokes) and follow the instructions to install the knock-knock-joke library.

2. Create a file called `knock-knock.js` in your `node-lab` directory. Using the example in the *Usage* section of the knock-knock-joke npm documentation, write a program that print's out a joke. *(Hint: In order to use npm libraries in our Javascript code, we need to 'require' them. That will assign the contents of the library files to a variable that we can use.)*

3. Use a loop and the `readline-sync` library to ask the user if they would like to hear another joke. If they respond 'y', print another joke, if they respond 'n' exit your program. Keep printing a random joke until they respond 'n'.

---
[Week 3 Home](../ReadMe.md) | [Go to Lab 3 >>](./lab-03.md)
