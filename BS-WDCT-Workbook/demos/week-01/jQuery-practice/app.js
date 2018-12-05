$(document).ready(readyHandler)

function readyHandler() {
  $('#edit-header').html("The jQuery Challenge")
  $("#box1").css('background', 'green')
  $("#para1").css({ 'font-weight': 'bold', 'font-size': '24px'})
  $('.box2').addClass('spin')
  $('#button1').click(button1ClickHandler)
  $("#box3").hover(mouseIn, mouseOut)
  $("#input1").keyup(inputHandler)
  $("#box4").animate({
    left: "+=398",
    top: "+=148"
  }, 5000)
}

function mouseIn() {
  $('#box3').css('background', 'green')
}

function mouseOut() {
  $('#box3').css('background', 'red')
}

function button1ClickHandler() {
  alert('Clicked')
}

function inputHandler() {
  console.log($('#input1').val())
}