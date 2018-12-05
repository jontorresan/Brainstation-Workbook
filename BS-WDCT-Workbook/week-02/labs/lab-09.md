[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md) | [8](./lab-08.md) | 9 | [10](./lab-10.md) | [11](./lab-11.md) | [12](./lab-12.md)

---

# Week 2 > Lab 9

### More Practice with Javascript Objects

#### Objectives
- Understand how to use constructors to create objects
- Understand how to use `this`
- Understand how to add methods to objects

#### Prerequisites
- Create a new folder in `/brainstation/labs/week02` called `advancedObjects`
- Create a file called `advancedObjects.js` for your javascript code

#### Part 1 - Creating a Constructor

We can use constructor functions to create objects for us. This allows us to describe what an object is generically, and we can provide the data for our objects as we receive it.

1. Create a constructor called `Student` (remember that constructors are designated with a capital letter to show that it is a constructor function). Students should have a name, phone number, and an array of subjects. *Note: we'll use 'subject' instead of 'classes' to avoid confusion with JavaScript 'classes'.* You should be able to create a new student object using your function as follows:

```JavaScript
var aStudent = new Student('John Smith', '555-123-4567', ['Science', 'Math', 'History', 'English'])
/*
  aStudent ==> {
    name: 'John Smith',
    phone: '555-123-4567'
    subjects: ['Science', 'Math', 'History', 'English']
  }
 */
```

2. Add a method to your constructor that will print out a message as follows: `${name} is enrolled in: ${subjects}`. e.g)

```
  John is enrolled in: Science, Math, History, English
```

3. Create another constructor function called `Subject`. The Subject constructor will create an object that has a name, a teacher, and a period (assume there are 4 periods in one day), as follows:

```JavaScript
var english = new Subject('English', 'Mr. Jones', 1)
/*
  english ==> {
    name: 'English',
    teacher: 'Mr. Jones',
    period: 1
  }
*/
```

4. Add a method to your `Student` constructor called `addSubject` that takes a `Subject` as a parameter and adds it to the student's list of subjects.

5. Add a method called `dropSubject()` to the `Student` that takes the name of a subject, and removes that subject from a student's list of subjects.

6. Add a method called `printSchedule()` to the `Student` that prints out the student's schedule by period showing the period, subject, and the teacher. e.g)

```
> aStudent.printSchedule()
John Smith's schedule is:

Period 1: English, Ms. Jones
Period 2: Science, Mr. Tan
Period 3: Math, Mr. Catrell
Period 4: History, Ms. Baker
```

---
[Week 2 Home](../ReadMe.md) | [Go to Lab 10 >>](./lab-10.md)
