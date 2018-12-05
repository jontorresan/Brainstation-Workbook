[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md) | 8

---

# Week 5 > Lab 8

### React Tic-Tac-Toe

- We will build a two player Tic-Tac-Toe game

#### Objective

- Integrate and develop React knowledge and skills so that you can have a strong foundation in the fundamental React Concepts including components, state and props, unidirectional data flow, and inverse data flow

#### Prerequisites

- Start a new project using `create-react-app` called `tic-tac-toe`
- The game board will look like this:

![Tic Tac Toe Board](/public/img/tictactoe.png)

- You can get X's and O's images in the following directory: [/public/resources/week-05/tictactoe](/public/resources/week-05/tictactoe)

#### Introduction

This will be a simple 2 player game of tic tac toe. Your game will indicate which player's turn it is, respond to clicking on a square by filling it in with an X or O, tracking whether the game is over, and declaring a winner or a tie.

#### Instructions

#### Part 1 - Mock up the Tic Tac Toe Board

Create a rough draft of what the UI should look like. You might want to use a table for the board.

#### Part 2 - Static React App

Determine what components you need to build your game.

#### Part 3 - Identify the Minimal State

What things do you need to keep track of in your game? This will be your state, and for this exercise, you can keep all of the state in the App.

*Hint: There are a few different ways you could represent the gameboard. What JavaScript data structure could you use to represent the gameboard?*

Link your state up to your UI. Your gameboard, and any other UI information should get it's values from state. You can test this by manually changing your state and refreshing the browser to see if the UI is what you expect.

#### Part 4 - Identify Inverse Data Flow

Now, you need to make your app work. Add the functions that you need to change the state based on User input, and pass the function(s) to any child components that need to use them.

---
[Week 5 Home](../ReadMe.md)