[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | 2 | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md) | [8](./lab-08.md) | [9](./lab-09.md) | [10](./lab-10.md) | [11](./lab-11.md) | [12](./lab-12.md)

---

# Week 2 > Lab 2

### JavaScript Conditionals
This lab will introduce you to using conditions to create different flows in your code. Understanding conditions and logic (truthy and falsey statements) is a fundamental part of programming that you'll need to understand.

#### Objective

- Understand how to use if/else if/else statements
- Understand how to use switch statements
- Understand what ternary statements are and how to use them

#### Prerequisites
- In your `/brainstation/labs` folder, create a file called `conditionals.js`
- Put all of your code in the `conditionals.js` file

#### Part 1 - Basic Conditionals

1. Create a variable called `isTruthy` and set it's value to a Javascript expression (e.g.` var isTruthy = 'abc'`). Write an `if` statement that uses the `isTruthy` variable as the conditional. If isTruthy is *truthy* print out `isTruthy + ' is truthy.'`, otherwise print out `isTruthy + ' is falsey.'` Try changing the value of `isTruthy` to test different values. 
2. Create two variables, one called `a`, and one called `b` and set each one to a different number. Write an `if` statement that prints out whether `a` is greater than `b`.
3. Create another variable called `c` and set it's value to a number. Write an `if` statement that prints out `c + ' is even'` if `c` is even, `c + ' is odd'` if `c` is odd, and `c + ' is not a number'` if `c` is not a number. Test your code

#### Part 2 - Chaining and Nesting Conditionals

1. Write a conditional statement that will check a variable `x` and will print out one of several statements about the number. You can assume that x is a number and not a string/boolean:
    - `x + " is greater than 50"`
    - `x + " is greater than 25, but less than 50"`
    - `z + " is less than 25"`
2. In the game of golf, you try to hit a ball towards a hole in the distance. The average number of strokes that a hole takes for a decent golfer is called *par*. Different amounts of a stroke have different names, for example if a golfer took 3 strokes on when the par for a hole is 5, they got an *eagle*. Write a conditional statement that will use the variable `strokes` and `par` to print out the golf score for a hole as follows:
    - 1	: "Hole-in-one!"
    - <= par - 2 : "Eagle"
    - par - 1 :	"Birdie"
    - par	: "Par"
    - par + 1	: "Bogey"
    - par + 2	: "Double Bogey"
    - \>= par + 3	: "Time to hit the driving range!"
3. Create two variables called `player1` and `player2`. These variables will represent the hand of each player in a game of Rock, Paper, Scissors. The values of `player1` or `player2` will be one of `'rock'`, `'paper'`, `'scissors'`
    - If the values of `player1` and `player2` are the same, print out "It's a Tie!".
    - Otherwise, 'rock' beats 'scissors', 'scissors' beat 'paper', and 'paper' beats 'rock'
    - Print out which player won based on their values

#### Part 3 - Switch Statements

1. Rewrite the golf score statement from the last exercise, but this time use a switch statement


#### Part 4 - Ternary Statements

There is a short-hand way of writing conditional statements called a Ternary operator.

```
let day = true;

console.log(day ? 'It is day-time' : 'It is night-time');
```

Read more about it [here](https://www.w3schools.com/js/js_comparisons.asp) and [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

1. Assign a variable `isString` the value of true or false, based on whether another variable `someVar` is a string or not. Use the ternary operator to do the assignment

2. Using 2 variables, a and b, use a ternary statement to assign the following strings to a variable called `output`: `${a} is less than ${b}` if `a` is less than `b`, `${a} is greater than ${b}` otherwise. You should be able to do this in one single line.

---
[Week 2 Home](../ReadMe.md) | [Go to Lab 3 >>](./lab-03.md)
