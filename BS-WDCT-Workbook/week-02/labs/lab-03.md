[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | 3 | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md) | [8](./lab-08.md) | [9](./lab-09.md) | [10](./lab-10.md) | [11](./lab-11.md) | [12](./lab-12.md)

---

# Week 2 > Lab 3

### JavaScript Loops
Another critical concept to understand about programming is loops. While conditional statements allow us to choose which code to execute depending on the conditions, loops allow us to execute the same code over and over, until we exit the loop. Using loops means we can write a piece of code once, and execute it as many times as we need.

#### Objective

- Practice using loops, both for loops, and while loops.
- You should be comfortable with how loops work and exit conditions.

#### Prerequisites
- In your `/brainstation/labs` folder, create a file called `loops.js`
- Put all of your code in the `loops.js` file

#### Part 1 - Basic Loops

1. Write a `for` loop that prints all numbers from `1` to a given number `n`, with each number printed out the number of times equal to the current loop index:

```
1 2 2 3 3 3 4 4 4 4 5 5 5 5 5
```

*Hint 1: You can convert a number to a string using String(num) and you can repeat a string using [repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)*

*Hint 2: `console.log` will print everything on a separate line. You can use a string to build up the output in the `for` loop, and then `console.log` the output after the loop. e.g.)*

```Javascript
var output = ''

//Concatenate some stuff to output
output += 'abc'
output += ' def'

console.log(output) // abc def
```

2. Modify the loop from exercise \#1 to print out only even numbers:
```
2 2 4 4 4 4 6 6 6 6 6 6
```

3. Modify the loop from exercise \#1 in the  to print the numbers in the form of a triangle. e.g):

```
1
22
333
4444
...
```

4. Modify the loop from exercise \#3 to print the numbers backwards in the form of an upside down triangle. e.g):

```
...
4444
333
22
1
```

5. Rewrite the exercises above as `while` loops

#### Part 2 - While loops and flags

For this section, we'll practice using while loops and the concept of a flag. While loops have the advantage that they can use any condition to exit, and don't have to be tied to indexing the way for loops are.

1. Use a while loop print the position of a letter in the alphabet
    - You can use a global variable that represents the alphabet as a string (e.g. `var alphabet = 'abcdef...xyz'`)
    - Use a variable called `letter` that is a single character (e.g. `var letter = 'h'`)
    - Use a while loop to test a variable called `found` as the exit condition for the loop (this is your 'flag'). If `found` is false, keep looping, otherwise stop
    - Strings have a method called [charAt()](https://www.w3schools.com/jsref/jsref_charat.asp) which allows you to access the individual characters. You can use a variable `pos` to track which position in the alphabet you are in
    - Once you have found the character you are looking for, set `found = true`
    - print out the position of the character

#### Part 3 - Nested Loops

It is possible to put loops inside of other loops. This is useful for displaying grids, or doing multiplication across a matrix/table for example (we'll look more at that in the next lab). Nested loops look like this:

```JavaScript
for(let i=0; i<10; i++) {
  for(let j=0; j<10; j++) {
    console.log(`i = ${i}, j = ${j}`)
  }
}
```

The code above will loop through outer loop using `i`, and the inner loop using `j`. `i` is available to the inner loop. The output would look like this:

```
i = 0, j = 0
i = 0, j = 1
i = 0, j = 2
i = 0, j = 3
...
i = 1, j = 0
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
...
```

1. Write a nested loop that will print out a matrix of the numbers from 1 to 10 multiplied together. e.g)

```
1  2  3  4  5
2  4  6  8 10
3  6  9 12 15
4  8 12 16 20
5 10 15 20 25
```

---
[Week 2 Home](../ReadMe.md) | [Go to Lab 4 >>](./lab-04.md)
