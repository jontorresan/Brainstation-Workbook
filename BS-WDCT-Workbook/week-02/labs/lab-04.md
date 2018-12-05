[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | 4 | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md) | [8](./lab-08.md) | [9](./lab-09.md) | [10](./lab-10.md) | [11](./lab-11.md) | [12](./lab-12.md)

---

# Week 2 > Lab 4

### JavaScript Arrays
Arrays are a fundamental data structure in most programming languages and are the way that computers store things sequentially that we want to access in our programs. This lab will help you get comfortable interacting with arrays, and using loops to access the contents of an array.

#### Objective
- Understand what an array is and how to access it's values using an indexing
- Understand how to use loops to iterate over an arrays
- Understand basic array operations that allow you to manipulate or modify an array

#### Prerequisites
- In your `/brainstation/labs` folder, create a file called `arrays.js`
- Put all of your code in the `arrays.js` file

#### Part 1 - Array Fundamentals

1. Create an Array that has the names of all the students in our class and store it in a variable called `students`.

2. Print out the very first student in your array, the middle student in your array, and the very last student. Do not use a hardcoded index for the middle or last student. (Hint: try using [.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length))

3. Use the [.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) method on your array. Print the result of using `.pop()`, as well as your array. Did your array change?

4. Add a new student name to your array using the [.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method. Print the result of using `.push()` and your array. What did `.push()` return?

5. Add a new student name to your array using the [.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) method. Print the result of using `.contact()` and your array. What's the difference between `.push()` and `.concat()`

#### Part 2 - Using Loops to Iterate Over Arrays

Loops are a natural way of accessing the contents of arrays since loops, especially `for` loops, work great for indexing. e.g.)

```JavaScript
for(let i=0; i<myArray.length; i++) {
  console.log(myArray[i])
}
```

1. Create an array of random numbers. Write a loop that goes through the array and prints out only the even numbers. e.g)

```JavaScript
const arr = [1,3,6,8,10,9,2]; //==> 6,8,10,2
```

2. Using the array you created in the previous exercise, print the largest number to the console.

3. Using the student array `students` that you created in Part 1, write a loop that will look up a student based on a name in a variable called `name`. Print the name of the student and the position in the students array if found, otherwise print the message `"${name} not found."`.

#### Part 3 - Multidimensional Arrays

Arrays can contain anything - numbers, strings, booleans, objects (which we will learn about soon), or even other arrays. When an array contains arrays inside of it, is called a multi-dimensional array. Multi-dimensional arrays look like this:

```
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```

You could consider a multi-dimensional array as a list of lists.

1. Create an array that contains an array of numbers. Write a nested loop (a loop inside of another loop) that will calculate the sum of the numbers in each sub-array, e.g)

```JavaScript
[[1,2,3],[4,5,6],[7,8,9]] //==> [6, 15, 24]
```

2. Using the array created in the previous exercise, update the loop to calculate and return the average of the numbers in the sub-arrays.

3. Create a multi-dimensional array called `studentGroups` by grouping the students in your `students` array from Part 1 into sub-arrays of 3 or 4 names.
    - Print the name of the second student in the second group. Print the name of the first student in the third group.
    - We can also use array indexes to assign values to existing positions of an array. In your student group array, swap the order of 2 of the groups. Use a temporary variable to hold the value of one of the arrays while swapping the positions.


4. Using the `students` array, create a new array that also has student grades. e.g)

```Javascript
[["Jim", 75], ["Sally", 83], ["Linda", 90], ["Scott", 60]]
```

- Write a loop that will use a variable called `minGrade` for filter for students that have a grade higher than the `minGrade`. The loop should print out all the students whose grade is higher than the minimum grade. For example, given the number 80:

```
Sally: 83
Linda: 90
```

###### Further Practice

5. Create a shopping cart array that is a multi-dimensional containing several items with the item name, item price, and item quantity. e.g.)

```JavaScript
["Apples", 0.75, 5] //[name, price, quantity]
```
- Write a loop that prints out the name of everything in your `shoppingCart`

- Write a loop that prints out a receipt for the items in the shopping cart, based on the quantity and price. e.g.)
```
Apples $3.75
Oranges $4.50
Strawberries $6
```

- Write a loop that uses a variable called `item` to look up the item in the shopping cart and print out the price of that item.

---
[Week 2 Home](../ReadMe.md) | [Go to Lab 5 >>](./lab-05.md)
