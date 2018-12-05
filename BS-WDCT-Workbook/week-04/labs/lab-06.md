[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | 6 | [7](./lab-07.md)

---

# Week 4 > Lab 6

### Express Routing and Middleware

Express is very flexible in how we define our routes. We can use a special object called a 'router' that we can use to define routes, and use it with our app. This allows us to group routes together and even define routes in different files for better organization. We can also define 'middleware' that can be run for every request before reaching out end points.

#### Objective

- Understand how to use the `express.Router()` objects
- Separate routes into different files for organization
- Add middleware to an express server

#### Prerequisites

- Create a directory in `brainstation/labs` called `routing-lab`
- Set up a simple express server as we have done before

#### Part 1 - Using Express router

1. Get a router from express using:

```JavaScript
const router = express.Router()
```

2. The router can be used in a similar way to `app`. Sometimes the router is referred to as a 'mini-app'. Add a couple of end points to your router (e.g. /about and /contacts). Send back some simple text so when your end point runs you can verify it works.

3. Add the router to the app by using:

```JavaScript
app.use('/', router)
```

4. Your simple web site should work as expected.

#### Part 2 - Putting Routes in a separate files

It is often useful for us to keep logic and configuration in separate files for maintenance and organization. Let's move our router

1. Create a file called `routes.js`. At the top of the file:

```JavaScript
const express = require('express')
const router = express.Router()
```

2. Copy the router code from `server.js` to `routes.js`

3. At the bottom of `routes.js` add the following code:

```Javascript
module.exports = router
```

This will export our router so that we can *require* it in our `server.js`

4. In `server.js`, add the following line with our requires:

```Javascript
const router = require('./router')
```

5. Now, set the router on the app or the `/` endpoint:

```Javascript
app.use('/', router)
```

#### Part 3 - Middleware

Let's add some custom middleware that provides some logging functionality for every request that is received.

1. Let's create a logger that prints out the following to the console:

```
TIMESTAMP METHOD URL USER-AGENT
```

2. Add your middleware to express:

```JavaScript
app.use((req, res, next) => {
  //Middleware code goes here
})
```

3. Create your logging text by generating a date using `new Date()`, and retrieving the method and url from the `req` parameter. You can get the user agent from `req.headers`.

4. Once you have output your logging text, you will need to complete your middleware function by called `next()`. Remember that middleware is like a chain of functions. Once a function has done it's part, it needs to pass the request and response on to the next function, eventually, reaching our end-point.

5. Modify your anonymous function from steps 1 - 4 to be a named function called 'expressLogger'.

```JavaScript
const expressLogger = (req, res, next) => {
  //middleware code here
}
```

6. Create a new folder called `middleware` with a file called `express-logger.js`. Move the function you created in step 5 to this file.

7. At the bottom of the `express-logger.js` file, add the following export statement:

```Javascript
module.exports = expressLogger
```

8. In `server.js`, include your middleware:

```Javascript
const expressLogger = require('./middleware/express-logger')
```

9. Replace the anonymous function you used with your own middleware:

```Javascript
app.use(expressLogger)
```
You have now created your very own express middleware!

---
[Week 4 Home](../ReadMe.md) | [Go to Lab 7 >>](./lab-07.md)
