/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116
  };
  const createTweetElement = (tweetData) => {
    return `<article class="tweet">
    <header class="tweet-header"> 
      <div class="tweet-header-avatar">
        <img width="60px" height="60px" src="${tweetData.user.avatars}"> 
        <p>${tweetData.user.name}</p>
      </div>
      <p class="tweet-header-handle">${tweetData.user.handle}</p>
    </header>
    <p class="tweet-body-text">${tweetData.content.text}</p>
    <footer class="tweet-footer">
      <div>
        <p>${Math.round(tweetData.created_at / 86400)} days ago!</p>
      </div>
      <div class="icon-hover">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-retweet"></i>
      </div>
    </footer>
  </article>`;
  };
  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  // $('.tweets-section').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113
    }
  ];

  const renderTweets = function(tweets) {
    // loops through tweets
    for (let i = 0; i < tweets.length; i++) {
      $('.tweets-section').append(createTweetElement(tweets[i]));
    }
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  };
  renderTweets(data);
});
