[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | 4 | [5](./lab-05.md) | [6](./lab-06.md)  | [7](./lab-07.md)

---

# Week 4 > Lab 4

### SASS and BEM

SASS and BEM are two strategies that can be used to help make CSS more powerful, and easier to maintain

#### Objective

- Get familiar with SASS
- Get familiar with BEM

#### Prerequisites

We will use the porfolio project that we started in week 1.

#### Part 1 - SASS

1. Using the styles in your current `css` files, create `scss` files that use SASS variables, or nested classes, or anything else that you find interesting about sass. Use the styling from your original css files.
2. Use the `node-sass` command to generate a `css` file from the `scss` file. e.g.)

```
> node-sass styles.scss > styles.css
```

#### Part 2 - BEM

Look at your css class names and see if you can convert them to use the BEM methodology. Remember, B = Block (e.g. header, footer, body, etc), E = Element (e.g. button, paragraph, image, etc), M = Modifier (e.g. hover, bold, emphasis, etc)

For example:

```StyleSheet
.header__loginButton--hover {}
.header__loginButton--click {}
.header__logoutButton--hover {}
.header__logoutButton--click {}
.header__logo {}
.header__navbar {}
.header__navlinks {}
```

---
[Week 4 Home](../ReadMe.md) | [Go to Lab 5 >>](./lab-05.md)
