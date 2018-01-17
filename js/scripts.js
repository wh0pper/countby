$(document).ready(function() {
  $("#numberCounter").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var counts = [];
    for (var counter=number2; counter <= number1; counter += number2) {
      counts.push(counter);
    }
    $("#result").text(counts);
  });


});
