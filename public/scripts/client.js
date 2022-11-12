/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
let loadTweets;
$(document).ready(function () {
  // Test / driver code (temporary). Eventually will get this from the server.
  const createTweetElement = (tweetData) => {

    if (!tweetData) {

    } else {

      const tweet = $(`<article class="tweet"> 
    <header class="tweet-header"> 
      <div class="tweet-header-avatar">
        <img width="60px" height="60px" src="${tweetData.user.avatars}"> 
        <p>${tweetData.user.name}</p>
      </div>
      <p class="tweet-header-handle">${tweetData.user.handle}</p>
    </header>
    <p class="tweet-body-text"></p>
    
    <footer class="tweet-footer">
      <div>
        <p>${(new Date(tweetData.created_at).toLocaleString())}</p>
      </div>
      <div class="icon-hover">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-retweet"></i>
      </div>
    </footer>
  </article>`);
      tweet.find(".tweet-body-text").text(tweetData.content.text);
      return tweet;
    }
  };




  // $('.tweets-section').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

  // Fake data taken from initial-tweets.json
  const renderTweets = function (tweets) {
    // loops through tweets
    for (let i = 0; i < tweets.length; i++) {
      $('.tweets-section').prepend(createTweetElement(tweets[i]));
    }
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  };
  // renderTweets(data);

  loadTweets = function () {
    $.get("/tweets", (data, status) => {
      $(".tweets-section").empty();
      renderTweets(data);
    });
  };

  loadTweets();


});


