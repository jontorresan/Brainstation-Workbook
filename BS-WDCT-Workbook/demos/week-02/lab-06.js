//JavaScript restaurant
//use the generateMenu() function to get a menu object when you need it

// This is a test order. It should take 8 seconds and should cost $65.
// You can also test your restaurant functions with other menu items.
order('Lobster','Wild Rice','Wine')

// --- WRITE YOUR CODE BELOW ---
// Order Function Here:
function order(main, side, drink) {
  if(main && side && drink) {
    cook(main, side, drink)
  } else {
    console.log('You need to order 3 things')
  }
}

// Cook Function Here:
function cook(main, side, drink) {
  var menu = generateMenu()
  var cookTime = 0
  var mainItem = {}
  var sideItem = {}
  var drinkItem = {}
  for(var i=0; i<menu.length; i++) {
    var menuItem = menu[i]
    if(main === menuItem.name) {
      mainItem = menuItem
    } else if(side === menuItem.name) {
      sideItem = menuItem
    } else if(drink === menuItem.name) {
      drinkItem = menuItem
    }
  }

  cookTime = mainItem.time + sideItem.time + drinkItem.time

  console.log('Your meal will take: ' + cookTime + 's')

  // Convert milliseconds to seconds
  cookTime = cookTime * 1000

  setTimeout(function() {
    serve(mainItem, sideItem, drinkItem)
  }, 
    cookTime
  )
}

// Serve Function Here:
function serve(main, side, drink) {
  var price = main.price + side.price + drink.price
  console.log('Your meal costs: $' + price)
}

// --- HELPER CODE ---

// function that returns a menu array, no need to modify this function
function generateMenu (){
    return [{
        name:'Steak',
        time:5,
        price:40
    },{
        name:'Burger',
        time:4,
        price:15
    },{
        name:'Shawarma',
        time:4,
        price:20
    },{
        name:'Pizza',
        time:3,
        price:10
    },{
        name:'Sushi',
        time:3,
        price:15
    },{
        name:'Lobster',
        time:5,
        price:50
    },{
        name:'Carpaccio',
        time:5,
        price:25
    },{
        name:'Chicken',
        time:4,
        price:10
    },{
        name:'Wild Rice',
        time:2,
        price:5
    },{
        name:'Fries',
        time:1,
        price:5
    },{
        name:'Baked Potato',
        time:1,
        price:5
    },{
        name:'Salad',
        time:1,
        price:5
    },{
        name:'Coffee',
        time:1,
        price:0
    },{
        name:'Tea',
        time:1,
        price:0
    },{
        name:'Pop',
        time:1,
        price:0
    },{
        name:'Beer',
        time:1,
        price:5
    },{
        name:'Wine',
        time:1,
        price:10
    }]
}