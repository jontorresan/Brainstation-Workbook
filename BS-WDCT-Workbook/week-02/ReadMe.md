[Home](/README.MD) | [Week 1](../week-01/ReadMe.md) | Week 2 | [Week 3](../week-03/ReadMe.md) | [Week 4](../week-04/ReadMe.md) | [Week 5](../week-05/ReadMe.md) | [Week 6](../week-06/ReadMe.md) | [Week 7](../week-07/ReadMe.md) | [Week 8](../week-08/ReadMe.md) | [Week 9/10](../week-09_10/ReadMe.md)

---

# Week 2 Overview

This week we will focus exclusively on Javascript. It is critical that you get comfortable with programming this week and learn as much as you can to establish a good foundation for all future learning. Programming takes practice, and this week we will be learning the "ABC's" of programming through Javascript.

## Prerequisites

## This Week's Labs

- [Lab 1: Javascript Basics](./labs/lab-01.md) - Javascript syntax, variables
- [Lab 2: Conditionals](./labs/lab-02.md) - if/else, switch, and the ternary operator
- [Lab 3: Loops](./labs/lab-03.md) - for and while loops, nested loops
- [Lab 4: Arrays](./labs/lab-04.md) - Array methods and iterating over arrays
- [Lab 5: Functions](./labs/lab-05.md) - Parameters and Return values
- [Lab 6: Functions Practice](./labs/lab-06.md) - Create a Javascript Simulated Restaurant ordering system
- [Lab 7: Advanced Functions](./labs/lab-07.md) - Understanding scope, and using functions as parameters
- [Lab 8: Objects ](./labs/lab-08.md) - Creating object literals, nested objects and object methods
- [Lab 9: Functional Programming](./labs/lab-09.md) - Higher Order functions, chaining functions, and pure functions
- [Lab 10: Object Oriented Programming in Javascript](./labs/lab-10.md) - Creating object constructors and writing methods to access object properties
- [Lab 11: Objects Review](./labs/lab-11.md) - Build a Javascript Blog
- [Lab 12: ES6](./labs/lab-12.md) - Get familiar with several ES6 notations and features

## Programming Practice

- [1: Random Numbers](./practice.md#1-randomnumsjs)
- [2: Most Recurring Number](./practice.md#2-mostrecurringjs)
- [3: Remove Duplicates](./practice.md#3-removeduplicatesjs)
- [4: Random Winner](./practice.md#4-randomwinnerjs)
- [5: Merge Arrays](./practice.md#5-mergearraysjs)

## Resources

#### Review Questions

1. What is the javascript interpreter? When does it run?
2. What is a function?
3. What is the difference between function declaration and function invocation?
4. What is hoisting? How does it work?
Do variables get hoisted as well? Explain the process.
5. What is the difference between function scope and block scope?
6. Explain the difference between `const`, `var`, and `let`.
7. In what order will these print? Why?
```JavaScript
console.log('a');

setTimeout(function() {
  console.log('b');
}, 0);

console.log('c');

setTimeout(function() {
  console.log('d');
}, 0);

console.log('e');
```
8. If you have the following constructor function, what does `this` refer to?
To the best of your knowledge, is `this` in javascript always the same?
```JavaScript
function Sandwich(bread, meat, topping, condiment) {
    this.bread = bread;
    this.meat = meat;
    this.topping = topping;
    this.condiment = condiment;
}

let mySandwich = new Sandwich(“whole wheat”, “bologna”, “none”, “ketchup”);
```
9. What will the following print? Why?
```JavaScript
let warning = "Don't eat my food."

function trick() {
  console.log(warning);
  if (true) {
    let warning = "If you eat my sandwich, you better make me a new one.";
    console.log(warning);
  }
  console.log(warning);
}

warning = "If you steal my things, there will be trouble.";

trick();
```

10. What is a loop and how does it work? What are the different loops in Javascript?
11. What is an object? What is an array? What is the difference?
12. What are the Primitive data types in Javascript?
13. What does 'truthy'/'falsey' mean? What is an example of a 'truthy'/falsey' statement?

#### Cheatsheets

- [Javascript Quick Reference](http://overapi.com/static/cs/jsquick.pdf)
- [Javascript in one page](http://www.cheat-sheets.org/sites/javascript.su/)

#### Documentation
- [MDN Web Docs (Javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


#### Further Reading

##### General Programming
- [How to Think Like a Programmer](https://medium.freecodecamp.org/how-to-think-like-a-programmer-3ae955d414cd)

##### Javascript Fundamentals
- [Is Vanilla JavaScript worth learning? Absolutely.](https://medium.freecodecamp.org/is-vanilla-javascript-worth-learning-absolutely-c2c67140ac34)
- [Eloquent Javascript](http://eloquentjavascript.net/)
- [The Javascript Programming Language - Douglas Crawford](https://www.youtube.com/watch?v=v2ifWcnQs6M)
- [Javascript Functions](https://www.tutorialspoint.com/javascript/javascript_functions.htm)

##### Important Javascript Concepts
- [Understanding Hoisting in Javascript](https://scotch.io/tutorials/understanding-hoisting-in-javascript)
- [Inheritance and the Prototype Chain - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [this - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [Basic Inheritance with Javascript Constructors](http://adripofjavascript.com/blog/drips/basic-inheritance-with-javascript-constructors.html)
- [Introducing Javascript Objects - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)

##### Javascript Tips
- [Buggy JavaScript Code: The 10 Most Common Mistakes JavaScript Developers Make](https://www.toptal.com/javascript/10-most-common-javascript-mistakes)
- [16 Common JavaScript Gotchas](http://www.standardista.com/javascript/15-common-javascript-gotchas/)
