$(document).ready(function() {
  $(".clickable").click(function() {
    $("#chimp-showing").toggle();
    $("#chimp-hidden").toggle();
  });
  $(".clickable2").click(function() {
    $("#hippo-showing").toggle();
    $("#hippo-hidden").toggle();
  });
  $(".clickable3").click(function() {
    $("#possom-showing").toggle();
    $("#possom-hidden").toggle();
  });
});

