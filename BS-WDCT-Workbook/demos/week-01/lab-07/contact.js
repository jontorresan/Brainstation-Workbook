$(document).ready(readyHandler)

function readyHandler() {
  $('#submitButton').click(handleSubmit)
}

function handleSubmit() {
    var name = $('#name').val()
    var email = $('#email').val()
    var website = $('#website').val()
    var message = $('#message').val()

    var htmlOutput = "Name: " + name + "<br />"
    htmlOutput += "Email: " + email + "<br />"
    htmlOutput += "Website: " + website + "<br />"
    htmlOutput += "Message: " + message + "<br />"

    $("#submission").html(htmlOutput)
  }