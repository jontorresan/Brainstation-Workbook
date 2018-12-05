[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | 4 | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md) | [8](./lab-08.md)

---

# Week 5 > Lab 4

### React Lists

#### Objective

- Practice working with outputing lists of data from a React Component

#### Prerequisites

- Use `create-react-app` to create a new react project in `brainstation\labs`
- Add your code to the `App.js` file
- We will use the student data from last week: 

```JavaScript
const students = [
  {
    name: 'Brynhildr Sadler',
    program: 'Web Dev',
    grade: 75
  },
  {
    name: 'Joan Leon',
    program: 'UX',
    grade: 72
  },
  {
    name: 'Mark Summers',
    program: 'Web Dev',
    grade: 87
  },
  {
    name: 'Tanja Zawisza',
    program: 'Web Dev',
    grade: 92
  },
  {
    name: 'Slavomir Amato',
    program: 'UX',
    grade: 78
  },
  {
    name: 'Tihana Anand',
    program: 'UX',
    grade: 60
  },
  {
    name: 'Reima Ivov',
    program: 'Web Dev',
    grade: 95
  },
  {
    name: 'Demokritos Shafir',
    program: 'UX',
    grade: 83
  }
]
```


#### Part 1 - Set Up the Data

Whenever our app receives data, it is always better that we set up our App to receive the data from 'the outside'. We can do this using props.

1. In the `index.js` file in the root of your project source, add the above data as a constant.

2. Pass the variable to the `App` component as a prop. e.g)

```JavaScript
<App students={students} />
```

3. Print out the student array to the console in your render function:

```JavaScript
    console.log(this.props.students)
``` 

#### Part 2 - Display the Students

We will now output the student data to the browser for the user. In order to do that, we will need to convert, or map, the JavaScript data to HTML (just like we did with EJS). This puts the JavaScript into a form that can be used by the browser.

1. In the `render()` function of the app, create a new array that will `map` the student array into an array of HTML to be displayed to the user. e.g)

```JavaScript
    const studentsList = students.map((student) => {
        return <li>Name: {student.name}</li>
    })
```

2. In the return section of your render function, add the following to output the list of student names:

```JavaScript
    <ul>{studentsList}</ul>
``` 

React will automatically use the array that was created in Step 1, and output all of the students.

3. Add the student's Program and Mark to the list as well.

#### Part 3 - Create a Student Component

1. In the `App.js` file, add a new React Component called `Student`. The `Student` only needs a `render` function that outputs some html.

2. Copy the HTML that you have in your `map` function from Step 2 and put it in the return part of the `Student` component.

3. Change the parts where you are using `student` to use props instead. e.g. `this.props.name`

4. In the `map` function of your `App` component, replace the HTML with the `Student` component and pass the needed props. e.g

```JavaScript
    <Student name={student.name} />
```

5. Check your output in the browser. It should be exactly the same as in Part 2.

---
[Week 5 Home](../ReadMe.md) | [Go to Lab 5 >>](./lab-05.md)
