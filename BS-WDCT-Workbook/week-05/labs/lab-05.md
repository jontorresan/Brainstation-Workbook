[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | 5 | [6](./lab-06.md) | [7](./lab-07.md) | [8](./lab-08.md)

---

# Week 5 > Lab 5

### React Components

#### Objective

#### Prerequisites

- start a new project using `create-react-app` called `image-gallery`
- copy the images from [/public/resources/week-05/image-gallery](/public/resources/week-05/image-gallery/images) into a directory called `images` in the `public` directory of your project

#### Introduction

In this exercise, we will solidify our understanding of React components by creating a static webpage that mimics the look of Instagram. Example [here](/public/resources/week-05/image-gallery/markup.html).

#### Instructions

Make a web page that mimics an instagram style gallery page using Bootstrap and React:

- Paste the following code in `src/App.js` to start:

```JavaScript
const cards = [
  {
    imgSrc: 'images/square1.jpg',
    title: 'Card 1'
  }, {
    imgSrc: 'images/square2.jpg',
    title: 'Card 2'
  }, {
    imgSrc: 'images/square3.jpg',
    title: 'Card 3'
  }, {
    imgSrc: 'images/square4.jpg',
    title: 'Card 4'
  }, {
    imgSrc: 'images/square5.jpg',
    title: 'Card 5'
  }, {
    imgSrc: 'images/square6.jpg',
    title: 'Card 6'
  }
]

class App extends Component {

  render() {

    return (
      <div className="container">
          Your Code here
      </div>

    );
  }
}

class Card extends Component {
  render () {
    return (
      //your code here
    )
  }
}
```

- run `npm start` in your command line to start a local server to view your application
- You can use Bootstrap (or a similar framework) to make your page responsive. Remember to include the required classes in the `<head>` of the `index.html` file

---
[Week 5 Home](../ReadMe.md) | [Go to Lab 6 >>](./lab-06.md)