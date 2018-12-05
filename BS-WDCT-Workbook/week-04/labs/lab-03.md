[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | 3 | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md)

---

# Week 4 > Lab 3

### EJS Partials

A useful way of organizing EJS templates is using partials. Partials are like HTML snippets that can be reused, and are an important stategy for keeping our dynamic web pages DRY.

#### Objective

- Get familiar with how to use partials in EJS

#### Prerequisites

Use the folder created in the previous lab called `ejs-lab`

#### Part 1 - Create Two EJS Partial Templates

1. Create a template called `header.ejs` and a template called `footer.ejs`. Put them in your `views/partials` directory inside of your project.
2. `header.ejs` should contain a title. You can also put all of your HTML starting code with the `<head>`
3. `footer.ejs` should contain a message like 'Created by: Joan Jackson'

#### Part 2 - Add the Partials to `index.ejs`

We want to use the partials in other template files for repetitive code. Use the following syntax to include the header to your index.ejs:

```JavaScript
<% include ./partials/header %>
```

When you load your index page in the browser you should see the header information at the top of your page.

Do the same with the footer.

#### Part 3 - Partials and Data

Data passed to an EJS template is available to all the partials in the same way. 

In your header partial, add a message on the right side that says `Welcome Jane!` where "Jane" is a username that is passed to the page by the client using one of the methods we have discussed in class (req.query, req.params, or req.body)

---
[Week 4 Home](../ReadMe.md) | [Go to Lab 4 >>](./lab-04.md)
