$(document).ready(function() {

  // Show all and hide all
  $("#toggle-cypher-button").on("click", function() {

    // if anything with class of "decypher" is invisible...
    if ($(".decypher").hasClass("d-none")) {
      // show all the things with class of decypher
      $(".decypher").removeClass("d-none").css("display", "inline");
      // change the text in the button to hide all
      $("#toggle-cypher-button").text("Hide all");
    } else {
      // Hide all the things with class of decypher
      $(".decypher").addClass("d-none").css("display", "none");
      // change the text in the button to hide all
      $("#toggle-cypher-button").text("Show all");
    }

  });


  // CLicking on individual cypher classes
  $(".cypher").on("click", function() {

    if ($(this).next().hasClass("d-none")) {
      $(this).next().fadeIn("fast").removeClass("d-none").css("display", "inline");
    } else {
      $(this).next().fadeOut("fast", function() {
        $(this).addClass("d-none").css("display", "none");
      });
    }

  });

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
