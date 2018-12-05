[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: 1 | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md) | [8](./lab-08.md)

---

# Week 5 > Lab 1

### Intro to  React

#### Objective

- Understand how to use create-react-app
- Understand the basic structure of a React component
- Know how to add a component to a web page

#### Prerequisites

- Install 'create-react-app' using `npm -g install create-react-app`. You may need to use `sudo` to properly install create create app.

#### Part 1 - Creating Your First React Application

1. Go to `brainstation/labs` and run:

```
> create-react-app lab-01
```

This will create a directory with the React Boilerplate inside.

2. `cd` into `lab-01` and type `npm start`

3. Your browser should open up and you'll see a message that says "Welcome to React"

Using tools like `create-react-app` makes the job of starting react projects a lot easier since it generates 'boilerplate' for us so we can build our app, without worrying about all the details about setting up the project

#### Part 2 - Create a Component

Components are the heart of the React philosophy. By creating independent components, we can assemble them together into a larger components that create a fully functioning app.

1. In the `src/App.js` file, modify the render function to  return some html that prints out your name. e.g)

```html
<h1>Hi! My name is Sara Peterson!</h1>
```

2. React should re-render in your browser showing the change that you made.

#### Part 3 - Adding state to the Component

Having static components can be useful, but components can also manage many things using something called `state`. This allows each component to change it's internal properties based on events.

1. Add a constructor to your React component

2. Inside of your constructor add:

```JavaScript
this.state = {

}
```

3. Inside of the state add a key called `name` and give it the value of your name.

4. In your component, replace the hardcoded value of your name using `this.state.name`

5. Go to your browser and you should see that your name is displayed as in Part 3

#### Part 4 - Updating state

1. Add a new key to your state called `counter` and set the initial value to 0.

2. Add the following in the render() of your component:

```JavaScript
<p>Counter: {this.state.counter}</p>
```

Go to your browser and you should see 'Counter: 0'

3. Add a button to your component as follows.

```JavaScript
<button onClick={this.clickHandler}>Click me!</button>
```

4. Write a function in your class called `clickHandler`

5. In the function, add the following code:

```
this.setState({ counter: this.state.counter+1 })
```

setState is a special method that is part of React. It tells react that our component is updating it's state and that the render() function should be called to re-render the component on the screen.

6. Go to the browser and click the button. What happens?

---
[Week 5 Home](../ReadMe.md) | [Go to Lab 2 >>](./lab-02.md)