[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | 6 | [7](./lab-07.md) | [8](./lab-08.md) | [9](./lab-09.md)

---

# Week 3 > Lab 6

### Web Scraping

In this lab, we will use the NodeJS HTTP client to scrape information from other websites.

#### Part 1 - Web Scraping the Reddit Homepage

It is the job of the browser to create a DOM from the HTML text that it receives from the server (so far, we have simply loaded our web pages from our own file systems). However, on Node, we don't have a DOM because we are not rendering the content for the user. But, we can use an npm library that can be used to create a DOM for us.

1. Look up the library [cheerio](https://github.com/cheeriojs/cheerio) and add it to your `http-client.js` file. You can use this [article](https://www.smashingmagazine.com/2015/04/web-scraping-with-nodejs/) to help understand how to use 'cheerio'

2. Use *request* to get the front page of [Reddit](https://www.reddit.com/) and print out what you get back from the server. *Note: Reddit changed it's layout so to scrape the page as described here, use [https://old.reddit.com](https://old.reddit.com). This is a good example of a problem that occurs when using webscraping. Any changes to the layout of the page can break your code!*

3. In the callback function for *request*, use *cheerio* to print out all the titles of the links on the page. Notice from the *cheerio* documentation that you can use *cheerio* like jQuery with the `$('selector')` to look up DOM nodes.

4. *BONUS*: Use *cheerio* and *request* together to print out the titles of the first 3 pages of reddit. It should print something like:

```
Page 1:
When You gotta roll you gotta roll
Prevent Carpal tunnel
Sleeping during a live taping.
etc

Page 2:
Hologram Nova - The most versatile cellular modem built for single board computers
This sink
Dad reflex kicks in when child is in danger
etc

Page 3:
Interface Design
Cat.
The luckiest man in China.
etc
```

Which result returned first? Run your code again -- did your results return in the same order?

4. *Diving Deeper:* Can you think of a way to write your webscraper to that it always returns the pages in the correct order?

### Part 2 - Diving Deeper

Study the structure of this [website](http://www.boxofficemojo.com/alltime/world/) and scrape over the list of movies and output the top grossing movies (their titles and grossings) of *2013* from most to least.

Hints:

- Look at how the URL changes when you click to view the next set of movies.
- A good place to start with DOM manipulation is ``$('table[cellpadding="5"] tr')``. (There could be better ways)
- Once you are able to output the full list of top grossing movies, try to out the following:

    - Movies that start with 'a'. e.g., 'Avatar', 'Avengers'
    - The sum of all grossings of all the movies
    - *Hint: Try using the higher order functions map, filter and reduce.*

---
[Week 3 Home](../ReadMe.md) | [Go to Lab 7 >>](./lab-07.md)
