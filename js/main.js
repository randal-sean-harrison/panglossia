$(document).ready(function() {

  // cypher and decypher buttons
  $(".cypher").on("click", function() {

    if ($(this).next().hasClass("d-none")) {
      $(this).next().removeClass("d-none").css("display", "inline");
    } else {
      $(this).next().addClass("d-none").css("display", "none");
    }


  });


  // $(".decypher").on("click", function() {
  //
  //   var explication = $(this).data("explicate");
  //
  //
  // });


  // Set options for popovers per page with javascript objects
  $('[data-toggle="popover"]').popover({
    'container': 'body',
    "animation": true,
    "html": true,
    "placement": 'top',
    "trigger": 'click'
  });

  // Use this to allow popover to dismiss on clicking any element
  $('.popover-dismiss').popover({
    trigger: 'focus'
  });

});
// document ready
