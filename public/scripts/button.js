$(document).ready(function () {
  // --- our code goes here ---
  const button = document.querySelector("#tweet-button");
  button.addEventListener('click', (e) => {
    e.preventDefault();
    let errorMessage = document.querySelector(".error-message");
    const text = $('#tweet-text').serialize();
    if (text === "text=") {
      $(errorMessage).css("display", "flex").addClass("error-header");
      $(errorMessage).text("No Chars Typed!");
      
      return;
    }
    const counter = document.querySelector("#tweet-counter");
    $(counter).text(140)
    if (text.length > 145) {
      $(errorMessage).css("display", "flex").addClass("error-header");
      $(errorMessage).text("Too Many Chars!!");
      return;
    };
    $.post("/tweets", text, (data, status) => {
      $("#tweet-text").val("");
      $(errorMessage).css("display", "none");
      loadTweets();
    });
  }, false);
});