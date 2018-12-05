[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: 1 | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md)

---

# Week 6 > Lab 1

### React Component Lifecycle

#### Objective

- Review React and React state
- Understand how to use the Component Lifecycle

#### Prerequisites

1. Using `create-react-app`, start a new lab in `brainstation/labs`.
2. This lab will use the `request` library. Use `npm install` to install the library
3. We will use the [NASA APOD API](https://api.nasa.gov/) and you will need an API key, if you haven't gotten one before.

#### Part 1 - Display an Image in a Component

This lab will be similar to the lab we did in Week 3. We will display Nasa's APOD, but instead of doing it the jQuery way, we will do it the React way using the Component Lifecycle

1. In `App.js`, Add an `img` tag to the render and have it render an image. You can have the image hardcoded. Any image will work.

2. Move the url of the image into state, and update your `img` to change based on state.

#### Part 2 - Connect to the NASA APOD API

1. Add a function to your component called `componentDidMount()`

2. In `componentDidMount()`, use `request` to connect to the NASA APOD API. `console.log` the response to ensure you can connect properly.

3. Update your state to use the URL that you got back from the NASA APOD API using `this.setState()`

*Note: You may encounter an issue trying to connect to the NASA website with a 'Cross Origin Script Not Allowed Error'. If you see this error, install the [CORS Toggle](https://chrome.google.com/webstore/detail/cors-toggle/jioikioepegflmdnbocfhgmpmopmjkim?hl=en) Chrome extension. It will allow you to enable CORS for your React Page. We will discuss more about CORs when we do more API development.*

#### Part 3 - Loading...

When our component loads, the `render()` will be called before our request to the NASA API APOD has returned. Let's add some code that can handle cleanly the first render.

1. Add a property to your state called `loading` and set it to `true`

2. In the render, add a conditional statement that will check `this.state.loading`, and if it's false, display a message that says `Loading...` otherwise, display the images

3. Modify the request, to update `loading` as well as the image url when the response from the NASA APOD API is received.  

---
[Week 6 Home](../ReadMe.md) | [Go to Lab 2 >>](./lab-02.md)
