[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | 2 | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md)

---

# Week 6 > Lab 2

### Client-Side Routing

Take your portfolio site from week 1 and try converting it into a Single Page Application using your state to manage which page it is on.

#### Objective

- Practice using React state to mount/unmount compnents

#### Prerequisites

#### Part 1 - Transfer Your Portfolio to React

1. For each page of your portfolio website, create a React component (e.g. Home, About, Contact, etc)

2. Take the needed HTML from your original pages and put them in the `render()` of the corresponding components. (Hint: It will be the HTML in the `<body>`

#### Part 2 - Add Navigation

1. Add a 'page' property to the state of your App.

2. Add an event handler called `goToPage()` to App that receives a parameter that is the name of the page that you want to see.

3. Add some html to your App that will be a nav bar. The links could be `<a>` or `<button>` or even `<span>`. Add an `onClick` handler to each using `goToPage()` passing a string that represents the page to be displayed. e.g.) `goToPage('Home')`

4. In the App `render()` use conditionals or a switch to check for which page is in state, and to render out the corresponding component. E.g.) If `this.state.page === 'Home'` then show the `<Home>` component.

*Note: This demonstrates an example of how we can use state to determine which components are displayed, but in practice, we need a more powerful library to truly handle linking to pages, and will use React Router to help us going forward.*

---
[Week 6 Home](../ReadMe.md) | [Go to Lab 3 >>](./lab-03.md)