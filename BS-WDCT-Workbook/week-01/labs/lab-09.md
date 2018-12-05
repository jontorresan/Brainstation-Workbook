[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md) | [8](./lab-08.md) | 9

---

# Week 1 > Lab 9

### Git Collaboration: Startup Company Website
In this lab, you will create a simple directory structure and a multi-page company website. It will test your knowledge of relative and absolute paths, but more importantly, will provide you with an experience collaborating with other developers using git.

#### Objective

In your groups, you will work together to create your own start up website similar to [this example](https://www.teamupturn.org/).

Since this will be the first time all of you are doing this, make sure to keep backups of your files in case mistakes happen and you need to re create the repository (conflicts are bound to occur so don't be afraid to restart from a back up, this is a learning process).

The team should then set out to plan and develop the website, You can manage your own team structure however you wish.

The Website will have a Home Page, a Services Page, and Employees Page, and a Contact page, plus any other pages that you want for fun or practice.

#### Prerequisites
- Decide who will be the *'Git Master'*. The *'Git Master'* will be responsible for creating a git repository and getting everyone on the same code base. Throughout the exercise they will be responsible for managing the code base and making sure that there are no issues with conflicting code.
- Create a repository on the Git Master's GitHub Account.
- Add everyone on the team as a collaborator with 'Write' access (Do this under 'Settings' for the repository)

#### Part 1 - Plan The Project

- Come up with a Start Up Company Name and a Company Purpose (E.g 'Pear' - Technology for Hipsters). 
- Come up with 2 - 3 products or services that the company sells. (E.g Ultra Slim Laptops in Pear Yellow, Oversized SmartPhones in Retro Beige, Phat Smart-Watches with velcro straps) 

Have fun with it, but don't take too much time. We just want an example we can work with.

For filler, feel free to use ['Lorem Ipsum'](https://www.lipsum.com/) or ['Hipster Ipsum'](https://hipsum.co/)

#### Part 2 - Responsibilities

Your website will need:
- A Homepage
- A Prouct or Services Page
- An About page
- A Contact Page
- A Founders Page. Every Member of the group needs their own page with their name, a title, a picture, and a bio.

Decide who will be responsible for which pages. How will you keep the styling consistent across the site? Is someone in charge of the overall structure, and someone else in charge if the styling? Everyone must at least make their own employee page, and all other responsibilities can be divided in any way you want.

Below is an example Founder page you can use to get started:

```HTML
<!doctype html>

<html lang="en">
  <head>
    <!-- Load Bootstrap -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
  </head>

  <body>
    <div style="padding:50px;"class="container">
      <!-- Back to index.html -->
      <a href="" class="btn btn-info">back</a>
      <!-- Employee Name -->
      <h2>Johnny Football</h2>

      <div class="media">
        <div class="media-left">
          <img class="img-circle" style="border:2px solid #DDD;width:100px;display:inline;" src="https://randomuser.me/api/portraits/lego/1.jpg"/>
        </div>
        <div class="media-body">
          <!-- Employee Position -->
          <h4 class="media-heading">Senior Manager</h4>
          <div>
            <!-- Employee Bio -->
            <h5>Age</h5>
            <p>
              32
            </p>
            <h5>Email</h5>
            <p>
              jfootball@branstation.io
            </p>
            <h5>Bio</h5>
            <p>
              Storyfinder, Accountant, Truck Driver, Han Solo's College Roommate. I yell at inanimate objects.
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

#### Part 3 - Directory Structure

Plan out the directory structure for your site. Remember that it will be easiest to separate out CSS and Javascript into their own directories/files. An example directory structure could look like this:

```
/css
/js
/assets
  /images
/pages
  /founders
index.html
```

`index.html` can be your home page, and you can put relevant files in the appropriate directories. Remember, when working in a group, organization is the key to getting things done with minimal mishaps.

#### Part 4 - Collaboration

Once the responsibilities are clear, everyone can begin working on their local repositories.

- Everyone needs to clone the repository from GitHub:

```
  git clone <github url>
```
- When you want to add your code to the GitHub Repository:

```
  > git add .
  > git commit -m 'Reason for Commit'
  > git pull
  > git push
```

Make sure you are clear on what files everyone is working on to minimize overwriting each other's changes. If you get a conflict, you will need to merge changes so that everything is in sync before you push your code to the repository.

Merge conflicts can be annoying and frustrating. For information on working with merge conflicts in VSCode, [click here](https://code.visualstudio.com/docs/editor/versioncontrol#_merge-conflicts).

Note that while in general you should be familiar with how to use `git` on the command line, there are visual tools that are commonly used, and VSCode has built in support for using `git`.

#### Part 5 - Requirements

- Every page should have company information such as the company name or logo at the top
- There should be a navigation bar that allows navigation of the entire site
- There should be a footer with some copyright information
- Each page should have some content like headings, paragraphs, images, lists, etc
- You should use Bootstrap to help with responsiveness and overall page structure
- The site should have a consistent look-and-feel across the pages.
- You add any other features using Bootstrap, Javascript, or jQuery if you want to, but it is not required.

#### Part 6 - Completion

- Set up the project to use GitHub pages.
- Your project should be complete enough to be demoed for the class.

---
[Week 1 Home](../ReadMe.md)
