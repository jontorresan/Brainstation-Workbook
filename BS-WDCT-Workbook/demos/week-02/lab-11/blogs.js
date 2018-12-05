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

// Array for holding all of the blog posts
let blogs = []

// Push some example blogs on to start
blogs.push(new BlogPost('Test 1', 'Jonathan', 'Some cool info.'))
blogs.push(new BlogPost('Test 2', 'Jonathan', 'Some cool info.'))
blogs.push(new BlogPost('Test 3', 'Jonathan', 'Some cool info.'))


// outputBlogPosts will loop through the array of blog posts
// and update the DOM so that it shows the blogs in the
// array. Run this function anytime the array gets changed.
function outputBlogPosts() {
  var htmlOutput = ""
  for(let i=0; i<blogs.length; i++) {
    htmlOutput += "<div id=\"test\"><h2>" + blogs[i].title + "</h2><div>"  + blogs[i].author +  "/" + blogs[i].created + "</div><div>"  + blogs[i].content + "</div></div>" 
  }
  $("#blogs").html(htmlOutput)
}

// Wait for the document to be ready before trying to access the DOM
$(document).ready(function() {
  // Output any initial blog posts in the array
  outputBlogPosts()

  // Set up all of the necessary event handlers

  // Adds a new Blog Post when the user clicks the submit button
  $('#submit').click(function(event) {
    event.preventDefault()
    var title = $('#title').val()
    var author = $('#author').val()
    var content = $('#content').val()
    blogs.push(new BlogPost(title, author, content))
    outputBlogPosts()
  })
})