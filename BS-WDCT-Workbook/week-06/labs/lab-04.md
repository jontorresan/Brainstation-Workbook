[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | 4 | [5](./lab-05.md)

---

# Week 6 > Lab 4

### Client-side Data Storage

#### Objective

- Understand how to use localstorage to save/retrieve information from the browser.

#### Prerequisites

- We'll use a list of Todo's like we did last week with our Todo App 
- You can use last week's assignment if you wish. If you use the Todo App assignment, skip to Part 2

#### Part 1 - Todo App

- Build a simple component that outputs the following Todos as a list with checkboxes indicating done/not done:

```JavaScript
[
  { 
    text: 'Go to Dentist',
    done: false
  },
  {
    text: 'Do taxes',
    done: false
  },
  {
    text: 'Clean the Apartment',
    done: false
  },
  {
    text: 'Finish BrainStation Assignment',
    done: true
  }
  
]
```

- Add a form with a button that will add new todos.
- Don't worry about any other functionality

#### Part 2 - Save Todos to localStorage

Whenever a user updates the todo's, that's a good time for us to save it to state. We can think of our storage as a backup or snapshot of our current state, in case something unexpected happens.

1. Add a `componentDidUpdate()` function for your `App` component in your todo assignment (or wherever state is for your todos).

2. In `componentDidUpdate()` use local storage to save the `todos` array to a key in local storage. Don't forget to use `JSON.stringify()` to turn your todos into a string. e.g)

```Javascript
localStorage.setItem('TODOS', JSON.stringify(todos))  
```

#### Part 3 - Load the Todos from localstorage

When our Todo app loads, we should check if there are any todos in localStorage that we can use to initialize our list.

1. Add the `componentDidMount()` function to your component

2. In the `componentDidMount()`, add some code to look up the todos in the localStorage. Remember to use `JSON.parse()` to get convert the string into javascript todos.

```Javascript
let todos = JSON.parse(localStorage.getItem('TODOS'))
```   

3. If you haven't stored any todos yet, then you will get back `null` when you try to retrieve them. Make sure you check for the value of todos, and update your state appropriately, whether todos is null or an array of todos.

---
[Week 6 Home](../ReadMe.md) | [Go to Lab 5 >>](./lab-05.md)
