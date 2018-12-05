# Programming Practice

These exercises are weekly programming challenges you can use to help practice develop your programming competency. They are unmarked and optional, but excellent for practicing evenings or weekends when you have extra time.

#### Objectives

These exercises help you get familiar with functions and loops. They also help you learn to think like a programmer and break down a problem to a algorithm that solves the problem. None of the exercises are necessarily tricky, but there can be many approaches to solving a problem. Practice and experience help you to get comfortable choosing the approaches that are best.

#### Prerequisites
- In your `/brainstation/practice` folder, create new files for the following exercises in their own individual files. You should name the files as below.
- You can run these functions inside VSCode by 'Right-clicking' and clicking 'Run Code' (assuming you have installed the [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)) VSCode Package.
- Create a `practice` folder inside of your brainstation assignments folder that you forked from GitHub.
- For each exercise below, create a file, commit your solution and push it to GitHub to help practice getting comfortable with Git.

---
### 1: `counting.js`
- Create a javascript function that console.logs exactly the numbers 1-100

---
### 2: `cubed.js`
- Create a function that takes 1 number as a parameter and returns that number cubed
- Hint: You can `console.log()` the result of running your function to see if it worked

---
### 3: `multiply.js`
- Create a function that takes in 2 numbers and logs the result
- Hint: 'returning' and 'logging' or 'printing' are different. In this case, we want the result *printed*, in the previous exercise, we wanted the result *returned*

---
### 4: `oddOrEven.js`
- Create a function that takes a number as a parameter and returns a statement if the number is even or odd
- **Bonus:** add in logic to return an error statement if if the parameter is not a number

---
### 5: `makeNegative.js`
- Create a function that takes in a number, and returns the negative value for it.
- **Bonus:** write a function called `invertNum()` that will take positive or negative numbers and invert them

---
### 6: jQuery Practice
- Create a file called jQuery.html and paste the code below into it
- Create a file called app.js in the same directory as the jQuery.html file. Add all of your jQuery/JavaScript to the app.js file.
- For each of the instructions, use jQuery to make the changes

```html
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style>
		html,body{
			margin:0;
			background:#d8d8d8;
		}
		div{
			box-sizing:border-box;
		}
		section{
			margin:20px 0px;
			box-sizing:border-box;
		}

		.main-container{
			width:920px;
			background:white;
			padding:40px;
			margin:0 auto;
		}

		.style-box{
			display: inline-block;
			vertical-align: top;
			width:270px;
			padding:15px;
		}
		.box1,.box2,.box3,.box4{
			height:100px;
			width:100px;
			background:red;
		}

		.para1{
			margin:10px;
			font-weight:200;
			font-size:12px;
		}
		.box4{
			position: absolute;
			top:0;
			left:0;
		}
		.boundaries{
			width:500px;
			height:250px;
			background: whitesmoke;
			border:1px solid #d8d8d8;
			position: relative;
		}
		.spin{
			background-color:blue;
			animation:spin 3s linear infinite;
		}
		@keyframes spin { 100% { transform:rotate(360deg); } }
	</style>
</head>
<body>

	<div class="main-container">
		<section>
			<h1 id="edit-header">Teh jQury Chalengee</h1>

			<p>
				You will use the JQuery techniques you have learned to add events,animations, and manipulate the DOM Content with JQuery. You will need to inspect the code in the html to find the names of the ID's you need to target. Just follow the instructions in each section to complete this Challenge. You can start off by fixing the spelling in the Title.
			</p>
		</section>

		<section>
			<h1>Playing With Styles</h1>

			<div class="style-box">
				<p>
					Change the colour of this box from red to green.
				</p>

				<div id="box1" class="box1">
				</div>
			</div>

			<div class="style-box">
				<p>
					Change both the font-weight and the font-size of this text.
				</p>

				<p id="para1">
					I wish I was big and bold.
				</p>
			</div>

			<div class="style-box">
				<p>
					Make this box spin by adding the spin class
				</p>

				<div class="box2">
				</div>
			</div>

		</section>


		<section>
			<h1>Are You Listening?</h1>

			<div class="style-box">
				<p>
					Alert the user when this button is clicked
				</p>

				<button id="button1">Click Me!</button>
			</div>

			<div class="style-box">
				<p>
					Change the colour of this box to green when the cursor is over it.
				</p>

				<div id="box3" class="box3">
				</div>
			</div>

			<div class="style-box">
				<p>
					Console log the value of this input box every time a new character is added.
				</p>

				<input id="input1" type="text">
			</div>
		</section>


		<section>
			<h1>Push It</h1>

			<p>
				Move the box from the top left corner to the bottom right corner over 2 seconds.
			</p>

			<div class="boundaries">
				<div id="box4" class="box4">
				</div>
			</div>
		</section>

	</div>

	<script type="text/javascript" src="js/vendor/jquery-1.12.2.js"></script>
	<script type="text/javascript" src="js/app.js"></script>

</body>
</html>
```
