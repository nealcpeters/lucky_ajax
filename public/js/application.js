$(document).ready(function () {
  $('form').on("submit", function(event){
    event.preventDefault();
    var randomNumber = Math.floor((Math.random()*6)+1);
    var url = $(this).attr("action")

    $.post( url, {value: randomNumber}, function(data) {

    })
      .done(function(serverResponse, status, request) {
        $("#die").html(serverResponse);
      });
  })
});
