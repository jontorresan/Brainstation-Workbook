[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | 5 | [6](./lab-06.md) | [7](./lab-07.md) | [8](./lab-08.md) | [9](./lab-09.md) | [10](./lab-10.md) | [11](./lab-11.md) | [12](./lab-12.md)

---

# Week 2 > Lab 5

### JavaScript Functions
Functions are another fundamental aspect of programming. We have already been using functions, but now we will look at functions more closely and understand what they really are. Functions encapsulate some code that we can run whenever we want to, without having to rewrite that code.

#### Objective
- Understand what functions are and how they are used
- Understand what parameters and return values are
- Understand how to declare functions and invoke functions

#### Prerequisites
- In your `/brainstation/labs` folder, create a file called `functions.js`
- Put all of your code in the `functions.js` file

#### Part 1 - Parameters

1. Write a function called `printName` that prints out your name. Call the function to make sure it works.

2. Modify the function from exercise \#1 to take one parameter, `name` and print out that parameter. Call the function 2 - 3 times with different names to ensure that it works.

3. Create an array of strings called `names` with several names in it. Loop through the array using a `for` loop and print out the names using your function.

#### Part 2 - Return Values

Functions always return a value. If you don't specify a return value, the function will return `undefined`. In order to make our functions return useful values, we need to tell the function what we want to have returned.

1. Write a function called `sum` that takes two parameters `a` and `b` and returns the sum of the numbers. Assign the return value of your function to a variable called `num` and print it out.

2. Using the nested loops from the previous lab that calculated the average of arrays of numbers, create a function that takes an multi-dimensional array, and returns the average of the numbers for each array.

3. Write a function called `rotateArray()` that takes one parameter `arr`, rotates the entire array by one position and returns the result. e.g)

```JavaScript
rotateArray([1,2,3]) //==> [2,3,1]
```
- Modify `rotateArray()` to take a second parameter called `times`. The provided array should be rotated as many times as `times` and returned. You could use a loop to actually modify the array, but that would be really inefficient. Is there a way that you can determine what the rotated array is supposed to be without rotating more than the length of the array. e.g)

```Javascript
rotateArray([1,2,3], 10) //==>[2,3,1]
rotateArray([1,2,3], 8)  //==>[3,1,2]
rotateArray([1,2,3], 15) //==>[1,2,3]
```

---
[Week 2 Home](../ReadMe.md) | [Go to Lab 6 >>](./lab-06.md)
