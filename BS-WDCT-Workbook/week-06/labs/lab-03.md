[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | 3 | [4](./lab-04.md) | [5](./lab-05.md)

---

# Week 6 > Lab 3

### React Router

#### Objective

- Get familiar with the basics of using ReactRouter

#### Prerequisites

- We will use what we started in Lab 2 and modify it to use React Router

#### Part 1 - Install and Import React Router

1. Run `npm install react-router-dom` to install React Router.
2. In your `index.js` file, use the following import statement to import React Router:

```JavaScript
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
```

3. Replace `<App />` with `<Router></Router>` in the `ReactDOM.render()`

#### Part 2 - Add A Route

1. Add a `<Route>` that loads your `<Home />` component for the path `/`. See if it works.

#### Part 3 - Add a Switch

1. Wrap your Home Route in a `<Switch>`
2. Add routes for `/about`, `/contact`, etc.
3. For the Home route add the prop `exact`. This is because Router matches characters and `/` will match before `/about` because React Router sees the `/`, finds a match and doesn't look further.

#### Part 4 - Use links

1. Move the `<Switch>` logic into your `<App />` component

1. replace the routes in the `<Switch>` with the your `<App />` component:

```
  <Router>
    <App />
  </Router>
```

1. In `App.js` (or wherever you have your nav bar), import `Link` from React router

```Javascript
import { Link } from 'react-router-dom'
```

2. Change the links that were implemented with onClick handlers to use Link. e.g.)

```JavaScript
<Link to='/'>Home</Link>
```

#### Part 5 - Nested routes

1. On one of your pages (e.g, Portfolio), add two nested routes, for examples 'Front-end' and 'Back-end' that will show different projects. Use `<Switch>` like we did before. e.g.

```JavaScript
<Route path={match.path + '/front-end'} component={FrontEnd} />
```

2. Add Links to your Portfolio page that link to each of the pages:

```JavaScript
<Link to={match.url + '/front-end'}>Front End</Link>
```

---
[Week 6 Home](../ReadMe.md) | [Go to Lab 4 >>](./lab-04.md)
