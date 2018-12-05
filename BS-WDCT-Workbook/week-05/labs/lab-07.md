[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | 7 | [8](./lab-08.md)

---

# Week 5 > Lab 7

### React Components

- We will build out the simple product search component that can search a list of products, and display the resulting products and their prices.

#### Objective

- Practice React skills learned so far including creating components, passing props between components, displaying lists, and getting user input.

#### Prerequisites

- Start a new project using `create-react-app` called `product-search`
- The user interface should look something like this:

![React Search](/public/img/react-search.png)

- The data we will use will look like this:

```JavaScript
[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]
```

#### Introduction

We will break down building a working React product search component into different sub-components.

#### Instructions

#### Part 1 - Mock Up

1. In the `App` component, add a mock up of the search screen above. It doesn't need any styling necessarily, just enough that you can have some structure for the User Interface.

2. Identify the different parts that you think make a react component (This part is already done for you - each component is identified by a colour). Using JSX Comments `{/* */}` label the parts of the HTML with component names that you will convert into components in the next step.

#### Part 2 - Static React

1. Break the Mock up from Part 1 into components.

2. Each component should be in it's own file, and exported so that it's available to other components. Component file names should match the same name as the Component (e.g. `ProductList` => `ProductList.jsx`) *Note: It is common to name component files with the `.jsx` extension. This is similar to how we named EJS files with `.ejs`*

3. Copy the different parts of the HTML that is in the `App` into each of the corresponding components.

4. Starting at the `App` component, `import` any of the components that are needed for it's `render`. For each component that is used by `App`, identify the child components they need, and also import them. This will create a 'tree' of components that make up the entire app.

#### Part 3 - Identify the Minimal but complete representation of State

1. What parts of the UI does this 'app' have to keep track of? *Hint: Anything that the user can change should be part of your state*

2. Identify the best place (or places) for that state to live in your app (i.e which component(s) should own which state). The state could exist at the top level in the `App`, but it could also exist in lower level components. State should be as low as possible in the component hierarchy to be shared by any child components that need it.

#### Part 4 - Add 'Inverse Data Flow'

Inverse Data Flow refers to the the process of notifiying parent components that some data has changed from lower level children components. Remember that data flow is 'Unidirectional' in React and flows *downwards* using props. We can use functions that are passed down as props to notify parent components of changes. These are similar to 'callback functions' - our child components can call back to the parent components notifying them of some change.

1. We will need a way of notifying our `App` component if the user performs a search. When the user presses 'Enter' or a 'Search' button, The SearchComponent will have to either perform a search, and tell the parent what the results are, OR, it could tell the parent what the user wants to search for, and the `App` component can perform the search.

***This lab references the [Thinking In React](https://reactjs.org/docs/thinking-in-react.html) guide on the ReactJS site. If you need further help or want to deepen your understanding, this guide breaks down several of these concepts.***

---
[Week 5 Home](../ReadMe.md) | [Go to Lab 8 >>](./lab-08.md)