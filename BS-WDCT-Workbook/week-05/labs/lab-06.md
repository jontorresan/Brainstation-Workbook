[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | 6 | [7](./lab-07.md) | [8](./lab-08.md)

---

# Week 5 > Lab 6

### More React State

We will build a simple carousel style app that can change images based on pressing next/previous buttons.

#### Objective

- Practice using React State to update the user input
- Practice using Event Handler and `this.setState()` to update the state

#### Prerequisites

- start a new project using `create-react-app` called `carousel`

#### Introduction

- In `src/App.js`, add the following code:

```Javascript
/* List of image urls ------------------------------
'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif'
'https://media.giphy.com/media/wpoLqr5FT1sY0/giphy.gif'
'https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif'
'https://media.giphy.com/media/o7OChVtT1oqmk/giphy.gif'
-------------------------------------------------- */

class App extends Component {
  render() {
		return (
			<div className="App">
				<h1 >Image Carousel</h1>
			    <div>
			    	<button onClick>Previous</button>
			      	<span>1 of 4</span>
			      	<button onClick>Next</button>
			    </div>
				<div>
					<img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" />
				</div>
			</div>			
		)
	}
}

export default App;
```

You will use the provided image urls to change the 'src' of the image when the user clicks on the previous/next buttons.

1. Clicking either the "Previous" button or the "Next" button should change the displayed image
2. Total number of images and the index of current image should be displayed underneath
3. The navigation buttons must be disabled when there are no more images to display in that direction

#### Diving Deeper

How fast is your application? If you are using one img tag in your code, chances are there is a noticeable lag when changing from one image to another. Try to minimize this lag.

*Hint: Rendering an image from scratch is quite slow. Open up your network tab in Chrome Developer tools to see what's happening? Could you use another approach that would speed up the perceived performance for the user?* 

---
[Week 5 Home](../ReadMe.md) | [Go to Lab 7 >>](./lab-07.md)
