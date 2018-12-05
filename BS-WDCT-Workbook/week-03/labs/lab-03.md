[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | 3 | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md) | [8](./lab-08.md) | [9](./lab-09.md)

---

# Week 3 > Lab 3

### Asynchronous Node

We have already been using asynchronous code, both in the front-end and now in our node programs. If you recall, we used jQuery to handle events from the user:

```Javascript
$('#button').click(() => {
  alert('Clicked!')
})
```

This is an example of an asynchronous function that won't execute until the user does something, and we provide a *callback* that will run when the button is clicked. *readline-sync* is also an example of an asynchronous function, because it waits for the user to type in some input.

This lab will explore specifically using asynchronous functions

#### Objective

- Understand the "look and feel" of asynchronous functions
- Understand how to use callbacks with asynchronous functions

#### Prerequisites

- Create a file in the `node-lab` folder called `async-lab.js`
- Create a file in the `node-lab` folder called `readme.txt` and put your name in the file.

#### Part 1 - Getting input from the user

1. Install 'readline-sync'.
2. Write a simple node program that asks the user for their name and prints out `Hello ${name}`

#### Part 2 - Reading Files from the File System

We will use reading and writing files from the file system to explore the idea of asynchronous functions. File system access is a classic example of asynchronous use case since accessing the file system can be quite slow in computer time.

1. In `async-lab` require the [fs](https://nodejs.org/api/fs.html) library. Note that `fs` is a core library and you don't need to install it using npm.
2. Use the [readFile()](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback) method to open your `readme.txt` file and print out the contents.
    - Note: If you don't tell read file the type of data you want, it will just give you something called a `<Buffer>` which is like the raw data in binary form. See if you can figure out from the documentation what you can do to make readFile show you the characters of your text file.
3. Modify your program to open any file provided by the user by adding 'readline-sync'.

#### Part 3 - Writing Data to a file on the File System

Writing a file to the file system works the exact same way as writing, but instead we take some data in javascript and write it out to a file.

1. Take the contents that you got from Part \#1, and use [writeFile](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback) to write the contents to `readme2.txt`. Check the file system to see if it's there.

2. Modify the code from the previous step to convert all of the text you read in from the file to uppercase, and then write it out to the file `readme2.txt`.

3. Modify your code to 'duplicate' a file. Using 'readline-sync', ask the user for the name of the file they want to duplicate, then read that file and copy the contents to a file with `-copy` added to it. (e.g. `readme.txt` -> `readme-copy.txt`)

#### Part 4 - Diving Deeper: Streams

One last concept that we will look at that can be useful is *streams*. You can think of programming as plumbing - we are moving data around from one place to another and connecting it all together through 'pipes'. These pipes are functions that do different things to the data until it gets stored on the file system or displayed to the user. With those concepts in mind, we can think of all of our data as a stream, and it doesn't really matter what kind of data it is.

1. Modify your code from Part \#2/\#3 to use streams. Create a [readable file stream](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options) and a [writeable file stream](https://nodejs.org/api/fs.html#fs_fs_createwritestream_path_options) for each of your files.

2. Write a function called `upperify()` and use it with a `pipe()` to connect your read and write streams for your files so that the second file is all in uppercase. You should see the exact same behaviour as we saw in Part \#1, but using streams.

---
[Week 3 Home](../ReadMe.md) | [Go to Lab 4 >>](./lab-04.md)
