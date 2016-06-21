$(function(){

  // form element to listen for a submit and call changeBackground function
  $("#cities").submit(changeBackground);

  // add function so webpage doesn't send to a nonexistent server
  function changeBackground(event) {
    event.preventDefault();

    // variable we need to keep track of is the city
    var city = $("#city-type").val().toUpperCase;

    // create conditionals if, else if, else
    // if user types xyc city, will change body img to xyz city
    if (city === "NEW YORK" || city === "NEW YORK CITY" || city === "NYC") {
      $("body").attr("class", "nyc");

    } else if (city === "SNA FRANCISCO" || city == "SF" || city == "BAY AREA" ) {
      $("body").attr("class", "sf");

    } else if (city === "LOS ANGELES" || city === "LA" || city === "LAX") {
      $("body").attr("class", "la");

    } else if (city === "AUSTIN" || city === "ATX") {
      $("body").attr("class", "austin");

    } else if (city === "SYDNEY" || city === "SYD") {
      $("body").attr("class", "sydney");

    } else {
      $("body").attr("class", "");
    }

    // clear input field
    $("#city-type").val("");

  }

});