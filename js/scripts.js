$(document).ready(function() {
  $(".clickable").click(function() {
    $("#tabby-cat-showing").toggle();
    $("#tabby-cat-hidden").toggle();
  });
  $(".fadeIn").click(function() {
    $("#Seattle-showing").fadeIn();
    $("#Seattle-hidden").hide();
  });
  $(".fadeOut").click(function() {
    $("#Seattle-showing").fadeOut();
    $("#Seattle-hidden").show();
  });
  $(".btn").click(function() {
    $("#darkMode").toggle();
    $("#lightMode").toggle();
  });
  $("button#gray").click(function() {
    $("body").removeClass();
    $("body").addClass("gray-background");
  });
  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });
});