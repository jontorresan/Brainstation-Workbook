[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | 3 | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md) | [8](./lab-08.md)

---

# Week 5 > Lab 3

### React Props

Props are how React moves information from one component to another. This lab will introduce
the concept of props and help you practice using them

#### Objective

- Practice working with the `render()` to create a view for a component
- Accessing props inside of render
- Create Nested Components

#### Prerequisites

- Use `create-react-app` to create a new react project in `brainstation\labs`
- Add your code to the `App.js` file

#### Part 1 - Create Component Called `Greet` That Receives a prop

1. Create a component called `Greet` in the `App.js` file. You can add this below the already defined App component.

```JavaScript
class Greet extends Component {
    render() {
        return (
            // HTML goes here
        )
    }
}
```

2. Inside of the render, add some HTML the prints out the message 'Hello World!'

3. Modify the message to use a prop called 'name' that will print out 'Hello Jamie!' where 'Jamie' could be any name specified by the prop.

4. In `App.js` add the `Greet` component as part of the `render()` function, and provide a name. e.g.)

```JavaScript
    <Greet name="Jamie" />
```

5. Try adding mulple `Greet` components to the `render()` with different names. What happens?

#### Part 2 - Pass State to the Greet Component

1. Update your state to include both a name and a greeting. e.g)

```JavaScript
constructor() {
    super()
    this.state = {
        name: '',
        greeting: ''
    }
}
```

2. Add two input fields to your app, one for the name, and one for the greeting. As in Lab 1, add the appropriate event handlers to update the `name` and `greeting` in `state`. *Hint: Add `onChange` events to the input fields and update the state based on `event.target.name` and `event.target.value`*

3. Modify your `Greet` Component to receive the greeting in addition to the name e.g.)

```JavaScript
    <Greet name="John" greeting="Hello" />
```

4. Update the `render()` function in `Greet` to use the name and greeting to display a message to the user.

5. In your `App`, update where you are using the `Greet` component to receive it's props as the values for `name` and `greeting` that are in the App's `state`.

---
[Week 5 Home](../ReadMe.md) | [Go to Lab 4 >>](./lab-04.md)
