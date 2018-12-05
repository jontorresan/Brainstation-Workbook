[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | 5 | [6](./lab-06.md) | [7](./lab-07.md) | [8](./lab-08.md) | [9](./lab-09.md)

---

# Week 3 > Lab 5

### HTTP Clients

This lab will look at how to use JavaScript to make HTTP requests from websites.

#### Objective

- Understand how to use JavaScript to make HTTP requests
- Use the npm library *request* to make JavaScript requests in node.

#### Prerequisites

Create a file called `http-client.js` in `brainstation\labs\node-labs`

#### Part 1 - Using an HTTP client in the browser

In the browser, we can access websites behind the scenes using JavaScript. There are some security issues around doing that, but we will learn more about that later. For now:

1. Go to [http://jquery.com](http://jquery.com) using your web browser

2. Open up your web developer tools and go to the console

3. Enter the following command:

```JavaScript
$.get('http://jquery.com', (data) => { console.log(data) })
```  
- What happens? Change the url to 'http://jquery.com/browser-support'. What happens now?
- In plain english, what is `.get()` doing?

#### Part 2 - Using an HTTP client in Node

While it is often useful for us to interact with web servers using javascript in the browser, we can do the same in Node. This will allow us to create server-side programs that use data from other web servers.

1. Create a file in your `node-lab` folder called `http-client.js`

2. We'll use a library called *request* to help us talk to other web sites. Install *request* following the instructions [here](https://github.com/request/request)

3. Use *request* to print out the contents of `http://www.google.com`. What prints out?

4. Use *readline-sync* to prompt the user for a url. Print out the contents of retrieving the url, or an error. Ask the user if they would like to get another url. If they type 'y' ask for the URL and repeat the process. If they type 'n' print 'Good Bye' and exit your program.

#### Part 3 - request and fs

For more practice with aysnchronous program control, let's use two asynchronous functions together.

1. In your file `http-client.js`, require the `request` library if you haven't already.
2. Using `request` open up *https://brainstation.io*
3. Save the response data received from `request` to a file called `brainstation.html`
4. Open up the file in a browser to see if it worked.

---
[Week 3 Home](../ReadMe.md) | [Go to Lab 6 >>](./lab-06.md)
