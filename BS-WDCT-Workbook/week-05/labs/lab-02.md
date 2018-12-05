[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | 2 | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md) | [8](./lab-08.md)

---

# Week 5 > Lab 2

### React State

Today we will build a simple calculator that will add/subtract/multiply/divide two numbers.

#### Objective

- Practice working with the `render()` to create a view for a component
- Understand what state is and how to use it in a component
- Add functions to our components that update state using `this.setState()`
- Add event handlers to input fields to change the state based on user interaction.

#### Prerequisites

- Use `create-react-app` to create a new react project in `brainstation\labs`
- Add your code to the `App.js` file

#### Part 1 - Create a Basic Component

1. Create a react component with a `render()` function
2. In the `render()`, add:
    - Add two text input fields for numbers.
    - Add a select list with the symbols for add/subtract/multiply/divide between the numbers. The first value should be blank for no operator selected.
    - Add an "=" sign after the numbers to indicate the result
    - Add a button that says calculate

#### Part 2 - Add State to a constructor

1. Add a constructor to your component with state:

```JavaScript
constructor() {
    super()
    this.state = {
        //state goes here
    }
}
```
3. Add the following properties to your state: `num1`, `num2`, `result`, and `operator`. The numbers should all be 0, operator should be `""`

#### Part 3 - Add the event handlers

1. Add two functions to your component, `updateNum1` and `updateNum2`. The functions each take one parameter `event` which is a Javascript event object. We can use the event object to get the value of the input. Each function will update the appropriate value in state using the `this.setState()` method:

```JavaScript
updateNum1 = (event) => {
    this.setState({
      num1: event.target.value
    })
}
```

*Note: For now, always use the ES6 syntax with the arrow notation, otherwise you will get an error when you try to use `this.setState()`*

2. On the input boxes, we can add event handlers using any Javascript events. For the numbers, let's use `onChange`. For the `num1` input, it would look like:

```
<input type='text' value={this.state.num1} onChange={this.updateNum1} />
```

Do the same for the `num2` field. Notice that the functions `updateNum1` and `updateNum2` are basically the same, can you think of a way to change your code so there is only one update function for the numbers? *Hint: Try adding a `name` to your inputs that you can reference through `e.target.name`. Then, remember that there are two ways that you can reference keys in an object, `.` notation and `[]` notation. Try using the `[]` notation when updating the state.*

3. For the operator field, you can use also `onChange`. Add a function that will update the state of the operator when the user changes the dropdown field.

4. For the calculate button, you can use `onClick`. Add a function that will use `num1` and `num2` and `operator` that is in your state to calculate the `result`, and then update the state of `result` using `this.setState()`. You should see the result displayed in the browser.

5. Test your calculator by typing different numbers and using different operators.

*BONUS: Add a `Clear` button that resets all the values.*

---
[Week 5 Home](../ReadMe.md) | [Go to Lab 3 >>](./lab-03.md)
