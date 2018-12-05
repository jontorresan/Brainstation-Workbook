[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md) | 8 | [9](./lab-09.md)

---

# Week 3 > Lab 8

### Express Web Server

Understanding what a web server is and how it works is vital to your path of becoming a web developer. In this assignment, we will create a web server in Node using the Express framework. In particular, this assignment focuses on two different ways to serve static files using Express. We will also see how to set the caching behaviour for each of these methods.

#### Instructions

##### Part 1 - Express Get Requests

1. Create an express server that has 3 routes: `/name`, `/sum`, `/colour`
2. For the `/name` route, return your name to the client
3. For the `/sum` route, accept 3 numbers as part of the query string and return the sum of those numbers. e.g.) http://localhost:8080/sum?a=1&b=2&c=3 would return 6. Hint: Use [req.query](https://expressjs.com/en/api.html#req.query)
4. For the `/colour` route, return the following object to the client:

```JavaScript
{
  red: 0,
  green: 79,
  blue: 255
}
```

##### Part 2 - Express Send File

1. In your labs folder, create a directory called `server-lab` with a file called `server.js`

2. In your server, require express, listen on port 8080, and set up an endpoint at the path `/nasa` that will respond to GET requests. When a GET request is received to this endpoint, your server should use the `res.sendFile()` method to send back a static html file that displays your html file with the Nasa Picture Of the Day from Lab 7.

##### Part 3 - Express Static Web Server

1. Create a sub-directory in the same folder as your main server file called `public` to hold your static files.

2. Create a simple HTML file called `index.html` that displays 3 images - each one a gif from [giphy.com](https://giphy.com/). You can use the urls from giphy to display the images.

3. Use `express.static` to instruct your web server to serve all static files from the sub-directory that was just created.

4. Create a directory inside of public called `img`. Download the 3 gifs from step \#4 and save them to the `img` directory. Change the `index.html` file to get the gifs from the `img` directory.

##### Part 4 - Serving your Portfolio / Assignment

Go back to your portfolio or fansite assignment from week 1 and convert it to be served from a Node Express web server.

1. Create a `public` folder in your `portfolio` directory.
2. Create a `server.js` file `portfolio` directory.
3. Using the `express.static` method as in Part 1, make it so that you can get your portfolio by going to  `http://localhost:8080` in your browser.

*Hint - you may want to look at organizing your portfolio with files in related folders (e.g. js/css/img/etc) and update your pages to use your folders.*

##### Part 5 - Tunnelling

When you run a server on your computer, no one can access it because your server isn't accessible on the the web. Typically, you will take your code and install it on a server that is publicly accessible on the web. For testing purposes, we can create a tunnel that will use a server on the internet to tunnel to our computer, allowing access to our web programs through the tunnel.

Try making your portfolio accessible on the internet using the npm tool [localtunnel](https://www.npmjs.com/package/localtunnel). Follow the instructions and send your tunnelled URL to other classmates to test out the tunnelling.

*Note: When you stop node or turn off your laptop, your program will no longer be running so the URL will not work.*

---
[Week 3 Home](../ReadMe.md) | [Go to Lab 9 >>](./lab-09.md)
