[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | 6 | [7](./lab-07.md) | [8](./lab-08.md) | [9](./lab-09.md) | [10](./lab-10.md) | [11](./lab-11.md) | [12](./lab-12.md)

---

# Week 2 > Lab 6

### JavaScript Restaurant

In this lab, you will create a program for a restaurant's ordering system. It will help develop your understanding of functions, parameters and control flow.

#### Objective
- Understand what functions are and how they are used
- Understand what parameters and return values are
- Understand how to declare functions and invoke functions

#### Prerequisites
- In your `/brainstation/labs` folder, create a file called `restaurant.js`
- Put all of your code in the `restaurant.js` file
- JS names are written in [camelCase](https://en.wikipedia.org/wiki/Camel_case). Using camelCase is a common programming practice, so make sure your variables and function names are using it.

#### Instructions

The starter code below contains a function that returns a menu array. This menu array contains the items that the restaurant can serve. Each menu item object will have a `name`, `price`, and a `time` property.

This exercise will require you to write 3 functions. These functions will accept a user's order, cook the specified meal, and then serve the meal. For this exercise, all meals will consist of 3 items, a main dish, a side dish, and a drink.

- The first function will be the `order` function, which should take in 3 parameters, the main, side, and drink. If these 3 arguments are provided by a user, then the order function will call the next function, the `cook` function, with the 3 items as arguments. If less than 3 arguments are provided, then the function should display an error and ask the user to order again.

- The second function will be the `cook` function, which again will take in the 3 meal parameters. This function will need to look through the restaurant's menu and determine the total time it will take to prepare the 3 items that were ordered. Once the total time has been determined, the function should tell the user how much time it will take to prepare the meal, and then wait that amount of time in seconds. After that, the `serve` function will be called with the 3 meal items as arguments.

- The final `serve` function will need to take in the 3 meal parameters, and loop through the menu to find out the total price of all 3 menu items. The function should log that the meal is ready to serve, and also inform the user what the price of the meal will be.

- *HINT: look up how to use the [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp) function to wait for a period of time.*

#### Starter

```JavaScript
//JavaScript restaurant
//use the generateMenu() function to get a menu object when you need it

// This is a test order. It should take 8 seconds and should cost $65.
// You can also test your restaurant functions with other menu items.
order('Lobster','Wild Rice','Wine')

// --- WRITE YOUR CODE BELOW ---
// Order Function Here:

// Cook Function Here:

// Serve Function Here:


// --- HELPER CODE ---

// function that returns a menu array, no need to modify this function
function generateMenu (){
    return [{
        name:'Steak',
        time:5,
        price:40
    },{
        name:'Burger',
        time:4,
        price:15
    },{
        name:'Shawarma',
        time:4,
        price:20
    },{
        name:'Pizza',
        time:3,
        price:10
    },{
        name:'Sushi',
        time:3,
        price:15
    },{
        name:'Lobster',
        time:5,
        price:50
    },{
        name:'Carpaccio',
        time:5,
        price:25
    },{
        name:'Chicken',
        time:4,
        price:10
    },{
        name:'Wild Rice',
        time:2,
        price:5
    },{
        name:'Fries',
        time:1,
        price:5
    },{
        name:'Baked Potato',
        time:1,
        price:5
    },{
        name:'Salad',
        time:1,
        price:5
    },{
        name:'Coffee',
        time:1,
        price:0
    },{
        name:'Tea',
        time:1,
        price:0
    },{
        name:'Pop',
        time:1,
        price:0
    },{
        name:'Beer',
        time:1,
        price:5
    },{
        name:'Wine',
        time:1,
        price:10
    }]
}
```

#### Diving Deeper
Modify the order function of your restaurant to check whether or not the user's ordered items are on the menu. If not, the function should reject the user's order and ask the user to order different items.

Then, modify all 3 functions so that a user can order any number of items from the restaurant, as long as they are on the menu. You may need to use JavaScript's [arguments object](https://www.w3schools.com/js/js_function_parameters.asp) to accomplish this.

---
[Week 2 Home](../ReadMe.md) | [Go to Lab 7 >>](./lab-07.md)
