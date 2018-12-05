[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md) | [8](./lab-08.md) | [9](./lab-09.md) | [10](./lab-10.md) | 11 | [12](./lab-12.md)

---

# Week 2 > Lab 11

### Build a Javascript Blog

Write an application that will simulate a Blog Page in Javascript. A Blog Page is a single page that can contain several posts. This exercise will simulate the functionality of a blog using Javascript objects.

#### Objectives
- Understand how to use constructors to create objects
- Understand how to store objects inside of an array
- Understand how to retrieve the values of Objects
- Understand how to use your Javascript skills on a web page

#### Requirements

- You must use a Javascript constructor to create a BlogPost
- You must be able to display a list of blog posts on a web page
- You must be able to add new posts to the blog Page
- Each post must display a title, author, date, and the contents of blog
- You should use Bootstrap to layout your page and take advantage of UI components

##### Diving Deeper
- You may have a sidebar that lists the title of your blogs. Clicking on a title will display the corresponding blog in the main content area
- You may have individual comments for each blog post that can be added
- You may have blog categories so you can create different blogs on different topics
    - Switching topics displays different blog blogPosts
- You may have 1 or more tags on your blog posts and an area listing all of the tags. Clicking on a tag will display the blog posts with that tag

#### Prerequisites
- Create a new folder in `/brainstation/labs` called `jsBlog`
- Create a file called `blog.js` for your javascript code

#### Part 1 - Create the Necessary Javascript Objects

1. Create a constructor called `BlogPost` that will be used to create new Blog Post objects.
2. Create an empty array called `blogPosts` that will be used to hold all the new blog posts being created.
3. Use your `BlogPost` constructor to create some dummy blog posts and add them to your array.

#### Part 2 - Create an HTML Blog Page

1. In your `jsBlog` folder, create a new file called `blog.html`.
2. Include jQuery files from the [jQuery CDN](https://code.jquery.com/)
3. Include the necessary Bootstrap files
4. Build your page to have a `<div>` that you can append posts to as they get added. A post could be contained in a `<article>`.
5. Add a form at the bottom of the page that can be used for adding new blog posts. The form should have an input for title, author, and content, and a submit button.

#### Part 3 - Use jQuery to link your HTML and Javascript

1. Link your `blog.js` file to your web page using the `<script>` tag.
2. You can add your jQuery code to `blog.js`, but since jQuery is manipulating the DOM on our web page, let's keep it with our `blog.html` inside of `<script>` tags in the `<head>`. `blog.js` can be for the behind the scenes logic for our blog Post.
3. Use jQuery to get the user's input from the "Add New Blog" form. Pressing "Submit" should do 3 things:
    - Create a new `BlogPost` object with the user's input, including the date (Hint: [Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now))
    - Add the new `BlogPost` to your array of blog posts
    - use jQuery to append the new `BlogPost` details to the `<div>` used to display all the blog posts.

---
[Week 2 Home](../ReadMe.md) | [Go to Lab 12 >>](./lab-12.md)
