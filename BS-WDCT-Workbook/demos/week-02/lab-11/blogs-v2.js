/*
Example Blog Post Structure
var blogPost = {
  title: 'Title',
  author: 'Jonathan',
  content: 'Some content',
  created: new Date()
}
*/

// BlogPost constructor
function BlogPost(title, author, content) {
  this.title = title
  this.author = author
  this.content = content
  this.created = new Date()
}

//Blogs constructor
function Blogs() {
  this.blogs = []

  //addBlogPost handles adding a new BlogPost to the blog list
  this.addBlogPost = function(title, author, content) {
    this.blogs.push(new BlogPost(title, author, content))
    this.outputBlogPosts()
  }

  // outputBlogPosts will loop through the array of blog posts
  // and update the DOM so that it shows the blogs in the
  // array. Run this function anytime the array gets changed.
  this.outputBlogPosts = function() {
    var htmlOutput = ""
    for(let i=0; i<this.blogs.length; i++) {
      htmlOutput += "<div id=\"test\"><h2>" + this.blogs[i].title + "</h2><div>"  + this.blogs[i].author +  "/" + this.blogs[i].created + "</div><div>"  + this.blogs[i].content + "</div><button onClick=\"blogs.deleteBlogPost(" + i + ")\">Delete</button></div>" 
    }
    $("#blogs").html(htmlOutput)
  }

  this.deleteBlogPost = function(index) {
    this.blogs.splice(index, 1)
    this.outputBlogPosts()
  }
}

// Object that holds all of the blogs
let blogs = new Blogs()

// Wait for the document to be ready before trying to access the DOM
$(document).ready(function() {
  // Set up all of the necessary event handlers

  // Adds a new Blog Post when the user clicks the submit button
  $('#submit').click(function(event) {
    event.preventDefault()
    var title = $('#title').val()
    var author = $('#author').val()
    var content = $('#content').val()
    blogs.addBlogPost(title, author, content)
  })
})

