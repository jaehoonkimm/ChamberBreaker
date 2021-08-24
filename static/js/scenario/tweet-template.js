export const exampleTweetTemplate = (tweet) => `
<button class="tweets-selects-card response-option">
    <img class="tweets-img" src="${tweet.src}">
    <p class="tweets-name">@${tweet.name}</p>
    <br style="clear: left;">
    <p class="tweets-p">${tweet.content}</p>
</button>
`;

export const tweetSelectTemplate = (guide, popup) => `
<div class="gauge-p-black">
  Strong tweet <button id="strong-info-button" class="gauge-info-black" onmouseover="showPopup('strong-popup')" onmouseout="closePopup('strong-popup')">?</button>
</div>
<div class="strong-pop-up" id="strong-popup">
  <p>${popup}</p>
</div>
<p>${guide}</p>
<div class="tweets-selects-box"></div>
`;

const tweetTemplate = (id, tweet) => `
<button class="tweets-selects-card" onclick="selectTweet(${id},'${tweet.level}','${tweet.code}')">
    <img class="tweets-img" src="${tweet.src}">
    <p class="tweets-name">@${tweet.name}</p>
    <br style="clear: left;">
    <p class="tweets-p">${tweet.content}</p>
</button>
`;

export const tweetsArray = (tweets) => {
  const array = [];
  for (let id in tweets) {
    array.push(tweetTemplate(id, tweets[id]));
  }
  return array;
};

const shareTweetTemplate = (content) => `
<button class="tweets-selects-card response-option">
    <img class="tweets-img" src="../static/images/johndoe.png">
    <p class="tweets-name">@Johndoe</p>
    <br style="clear: left;">
    <p class="tweets-p">${content}</p>
</button>
`;

export const shareTweetCheckTemplate = (content) => `
<p >Good job!<br><br>This tweet has been shared to community members.<br></p>
${shareTweetTemplate(content)}
<p>Let's see whether someone responds to the tweet.</p>
`;

const retweetTemplate = (id, retweet) => `
<div id="fadein-${id}" class="retweet">
    <img src="../static/images/retweet.png" class="retweet-arrow">
    <button class="tweets-selects-card response-option">
        <img class="tweets-img" src="${retweet.src}">
        <p class="tweets-name">@${retweet.name}</p>
        <br style="clear: left;">
        <p class="tweets-p">${retweet.content}</p><br><br>
    </button>
</div>
`;

export const retweetsTemplate = (retweets) => {
  const array = [];
  for (let id in retweets) {
    array.push(retweetTemplate(id, retweets[id]));
  }
  return array.join('');
};

export const responseTemplate = (content, retweets) => `
${shareTweetTemplate(content)}
${retweets}
`;

export const nwTweetTemplate = (tweet) => `
<button class="tweets-selects-card" onclick="selectNWTweet('${tweet.level}','${tweet.code}')" style="margin-left: 60px;">
    <img class="tweets-img" src="${tweet.src}">
    <p class="tweets-name">@${tweet.name}</p>
    <br style="clear: left;">
    <p class="tweets-p">${tweet.content}</p>
</button>
`;
