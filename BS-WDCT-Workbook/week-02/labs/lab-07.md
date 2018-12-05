[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | 7 | [8](./lab-08.md) | [9](./lab-09.md) | [10](./lab-10.md) | [11](./lab-11.md) | [12](./lab-12.md)

---

# Week 2 > Lab 7

### Advanced Functions

#### Objective
- Understand what scope is and using `let` to create block level scoping
- Understanding that functions can be passed to other functions as Parameters
- Understanding the difference between named functions and anonymous inline functions

#### Part 1 - Scope

An important concept to understand is function and variable scoping. Many times when you get `undefined` errors, it's because you are trying to reference something that isn't in scope.

1. Declare a global variable called `num` with a value of 0. Write a function called `addOne()` that increments the value of `num` by 1. Print out the value of `num` after running your function.

2. Declare a variable inside of `addOne()` called `num`. What prints out after you run your function now?

3. Remove the variable inside of `addOne()` and add a parameter instead called `num`. Call `addOne()` with a value of 2. What prints out after you run your function now? Print out the value of `num` inside of `addOne()`. How would you describe the scoping rules that Javascript is using when it sees parameters/variables of the same name?

4. Create a function called `myFunc()`
    - Declare a variable inside of `myFunc` using `let` called `a` with a value of 1
    - Create an `if` block that will always be true (e.g. `if(true) { //do something }`)
    - Declare a variable inside of the `if` block using `let` called `a` with a value of 2.
    - Print out the value of a inside of the `if` block, and outside of the `if` block
    - Declare another variable `b` with a value of 3 inside of the `if` block
    - Print out the value of `b` outside of the `if` block   

#### Part 2 - Passing functions as arguments

A critical part of understanding Javascript is recognizing that functions can go anywhere, and it is common to pass functions as parameters. We have already seen this with jQuery. Let's look at bit more closely.

1. Passing named functions as parameters:

    - Modify your `addOne()` function to take a parameter `num` and return `num` incremented by 1.
    - Write a second function called `double()` that takes a parameter `num` and returns `num` multiplied by 2.
    - Write a third function called `square()` that takes a parameter `num` and returns `num` squared
    - Create another function called `modifyNum()` that takes two parameters: `num` and `modFunc`.
    - `modifyNum()` must call the `modFunc` with `num` and print the result. You should be able to use `modifyNum()` with one of your functions above and print out the result.
    - Hint: `modFunc` is a function and can be called with a parameter.

2. Passing anonymous inline functions as parameters:

    - Update `modifyNum` to take a 3rd parameter called `cb` (short for 'callback').
    - Replace the line where you print out the result of calling `modFunc()` by passing `modFunc()` to `cb`. Remember that `cb` will be a function. The idea here is that we want to use the result of calling `modFunc()` by passing it to `cb()`
    - Update how you call `modifyNum` to take a third parameter as an inline function that given a parameter `num` prints out `num` modified by `modFunc`. e.g.

```JavaScript
modifyNum(1, addOne, function(num) { console.log(num)})
//==> 2
```


---
[Week 2 Home](../ReadMe.md) | [Go to Lab 8 >>](./lab-08.md)
