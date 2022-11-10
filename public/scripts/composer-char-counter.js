$(document).ready(function () {
  // --- our code goes here ---
  $("#tweet-text").keyup(function () {
    const currentTextLength = $(this).val().length;
    $("#tweet-button").val(140 - currentTextLength);
    if (currentTextLength > 140) {
      $("#tweet-button").css("color", "red");
    }
    if (currentTextLength < 140) {
      $("#tweet-button").css("color", "black");
    }
  });
  console.log("its ready");
});