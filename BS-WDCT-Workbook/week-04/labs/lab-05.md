[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | 5 | [6](./lab-06.md) | [7](./lab-07.md)

---

# Week 4 > Lab 5

## Javascript Blog with EJS

In this lab, we will focus on building a full-stack Blog Site that will persistently store blog posts on an Express Web Server.

### Objective

- Gain a thorough understanding of using EJS templates
- Get comfortable manipulating data and passing it to EJS templates
- Practice developing end points using Express
- Practice using asynchronous functions for reading/writing files

### Prerequisites

1. Create a project called `ejs-blog` in `brainstation/labs`
2. Create an express server configured to use EJS.
3. Create a `views` directory for all of your EJS template files

### When Working In Groups

1. Setup a GitHub repository that can be used to share the code under one person's account.
2. Add each person in the group as a collaborator
3. To get the initial code up and running, try working in a [pair programming model](http://www.extremeprogramming.org/rules/pair.html), where you share the laptop with a partner and both focus on the code together.
4. Once you have a working skeleton, you can continue in the pair programming model, or, you can divide responsibilities and check in with each other on progress. 

#### Part 1 - Create Blog endpoints

Your server should have the following endpoints:

1. GET /blog → Retrieve all blog posts for the blog page
2. GET /blog/:blogid → Retrieve a blog post for an individual blog page
3. GET /addPost → Displays a form that the user can use to enter post contents
3. POST /addPost → Create a new Blog Post from the user's input and add to the existing blog posts
4. DELETE /blog/:blogid → Delete an existing Blog Post

Remember that for any static files like css, javascript or images, you can configure express using:

```JavaScript
app.use(express.static('public'))
```

#### Part 2 - Blog data

You can hold blog data on your server in the form of an array of objects. It will look like this, as an example:

```JavaScript
let blogs = [
  {
    id: 'blog-title-1',
    title: 'Blog Title 1',
    summary: 'This is a blog summary.',
    content: 'This is the blog content',
    author: 'John Smith',
    created: 'February 5, 2018'
  },
  {
    id: 'blog-title-2',
    title: 'Blog Title 2',
    summary: 'This is a blog summary.',
    content: 'This is the blog content',
    author: 'John Smith',
    created: 'February 6, 2018'
  },
  ...
]
```

Use this as a global variable to hold your blogs so your endpoints will be able to access the blogs.

1. For now, start with a sample blog array that has 2 or 3 sample blog posts like above. 

2. Create an ejs template called `blog.ejs`. When the user goes to the `/blog` endpoint using the GET method, they should see a web page that has the blogs listed out with the Title, the summary, and a link that says "Read More".

3. Clicking on the link "Read More" should link to the individual blog page for that blog post using the endpoint `/blog/:blogId` and a template file called `post.ejs` for displaying individual blog posts. The post should have the blog title, author, date and contents.

#### Part 3 - Adding New Blog Posts

1. Create a template called `addPost.ejs`. This will be used for adding new blogs to your blog site. You can access the template from the endpoint `/addPost`.

2. Similar to the jQuery Blog from Week 2, add a form to `addPost.ejs` that will send a POST request to the `/blog` end point. You will need to add `method="POST"` and `action="/addPost"` to the form.

3. In your server file, create a constructor called `BlogPost` you can use for creating new blog post objects. The objects can above be an example of what your constructor should do.

4. The POST `/addBlog` end point will handle the form request from step 2 and get the blog post details from `req.body` (remember that you will need to install the [body-parser](https://www.npmjs.com/package/body-parser) middleware).  

5. Create a new blog post using your constructor and add it to your `blogPosts` array. The blog `id` should be created from the title entered by the user - it should be all lower case and spaces should be turned into dashes. (e.g. "My Blog Post" would become "my-blog-post") You can assume that titles only have letters.

3. Your end point should re-use the `blog.ejs` template to render the blog posts, including the blog post that was just added. Nothing needs to change - you just need to pass the updated blogs array as data.


### Diving Deeper

#### Part 4 - Deleting a Blog Post

1. Create a DELETE end point `blog/:blogId`. This end point will delete a blog from the array using the `blogId`.

2. You will need to use [$.ajax()](http://api.jquery.com/jquery.ajax/) to set the http method to 'DELETE'. Connect your ajax call to a button that can be used to delete the post.

3. Use the `blog.ejs` template to return the updated list of blogs.

#### Part 5 - Persisting Blog posts

Currently, if you stop your express server, you will use all the blog post data because the blog info is all held in memory as your server runs. In order to persist our blogs so that they are never lost, even if the server is stopped (or crashes), we could write our blog data to a file, and load it from a file every time our server starts.

1. Recall that we can use `JSON.parse()` and `JSON.stringify()` in order to convert strings to objects, and vice versa.

2. After your global constant containing your blog data, add some code to write you're `blogPosts` array out to a file called `blog-data.json`. Use `JSON.stringify()` and `fs.writeFile()`

3. Start your server and verify that the `blogPosts` array has been written to `blog-data.json`. If it's been successful, delete the code from part 2. Now that we have some data in a file, we won't need it any more, and can just update the file as we go.

4. For your POST `/blog` end point, add some code using `JSON.stringify()` and `fs.writeFile()` to store your updated `blogPosts` array to `blog-data.json`.

5. For your DELETE `/blog/:blogId` end point, add some code like in the previous step that updates the file.

6. Add code that will load the contents of `blog-data.json` and turn it into a global variable called `blogPosts`. Use `fs.readFileSync()` and `JSON.parse()`. Add this code before you call `app.listen()` so that your server is initialized with the required data before it starts listening.

*Hint: Notice that we have basically duplicated our code for updating the file. Let's keep our code DRY by writing a function that we can call any time we want to update our file*

#### Part 6 - EJS Partials

1. Add Header/Footer Partials to your blog. The header should have the title of your blog, the footer could have a copyright message, as an example.

    - Create a directory in `views` called `partials`
    - Create two template files `header.ejs` and `footer.ejs` in the `partials` directory
    - Add the appropriate HTML to the partials

2. Every page on your site should use the Header/Footer Partials. Partials can be included using `<% include partials/header %>` for example.

3. Add a search bar to the header partial.

    - The search bar should be a form with text input and a submit button
    - The form should post to /blog and use the 'GET' method
    - Update your GET /blog endpoint to check for a query string in the following form:

    ```
    /blog?search=javascript
    ```

    - If there is no search on the query string, return all the blog posts as normal, but if there is a search key given, perform the search using `Array.filter` and pass the filtered search results to `blog.ejs`

4. You can pass data to partials, just like you can with `res.render()` using `<% include('partialTemplate', data) %>` where `partialTemplate` is the name of the partial, and `data` is an object with key/value pairs that the partial template needs. *Note: This is only necessary if you have data in a template that was not provided using res.render()*

    - Can you separate out some parts of your code into files you 'include' to make your template pages simpler and more modular? *Hint: Any places where you are using loops could be places where we could put the code inside of the loop into an included partial template.*

#### Diving Even Deeper

Now that you have a simple, but functioning blog site that persists blog posts, are there other features that you can add?

- At the end of the blog post, there should be “next” and “previous” links that will link to the next blog post (the next oldest blog post) and “previous” links (the next newest blog post). Include the title of the next/previous post. If you use `push()` to add blog posts to your array, then the posts will be in chronological order.

- Tags or categories for your blog posts

- An Edit feature that allows you to update a blog post. *Hint: Try using the PUT method with `/blog/:blogId` for updating the post, and GET `blog/:blogId` to retrieve the contents of the blog post you want to edit.*

- A simple administration system where if the url has a user named 'admin' in it, you will show the editting functions, otherwise, keep them hidden. e.g.)

```
    /blog/blog-title-1?user=admin
```

---
[Week 4 Home](../ReadMe.md) | [Go to Lab 6 >>](./lab-06.md)
