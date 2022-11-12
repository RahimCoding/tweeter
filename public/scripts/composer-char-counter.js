$(document).ready(function () {
  // --- our code goes here ---
  $("#tweet-text").keyup(function () {
    const currentTextLength = $(this).val().length;
    console.log("currenttextlength", currentTextLength);
    $("#tweet-counter").val(140 - currentTextLength);
    if (currentTextLength > 140) {
      $("#tweet-counter").css("color", "red");
    }
    if (currentTextLength <= 140) {
      $("#tweet-counter").css("color", "black");
    }
  });
});