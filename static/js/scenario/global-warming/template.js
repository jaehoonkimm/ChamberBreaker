import {
  exampleTweetTemplate,
  tweetSelectTemplate,
} from '../tweet-template.js';
import { example1, example2 } from './data.js';
import message from '../guide.js';

const popupExample = `
  <p>Community members sometimes provide evidence or additional information to strengthen their opinions and make them more persuasive.</p>
  <p class="bold-p">Example of tweet</p>
  ${exampleTweetTemplate(example1)}
`;

export const contentHTML = [
  `<div class="scenario-title">Scenario - Information homogeneity<br />(Environment)</div>`,
  `<p>Information homogeneity means consumption of information that only conforms to their <span class="highlight">beliefs</span>, confirms their previously held <span class="highlight">opinions</span>, and express the <span class="highlight">same point</span> of views.</p>`,
  `<p>Community members sometimes provide evidence or additional information to strengthen their opinions and make them more persuasive.<br><br>Click “Next” to see tweet examples from community members.</p>`,
  `<p id="before-example-explain">Below are the examples of <span class="highlight">strong tweets</span>. You should find them to fall your community members into the echo chamber.</p>
  <div id="example-tweet-1">
      ${exampleTweetTemplate(example1)}
  </div>
  <div id="example-tweet-2">
      ${exampleTweetTemplate(example2)}
  </div>
  <p id="after-tweet-explain">If you choose two strong tweets within three trials, you can complete this stage with a high score.</p>`,
  `${tweetSelectTemplate(message.selectTweetGuide1, popupExample)}`,
  `${tweetSelectTemplate(message.selectTweetGuide2, popupExample)}`,
  `${tweetSelectTemplate(message.selectTweetGuide2, popupExample)}`,
  `${tweetSelectTemplate(message.selectTweetGuide2, popupExample)}`,
  `<p>Wow, good job.<br><br>It seems like you've successfully made community members fall into an echo chamber.</p>`,
  `<div>
        <img src="../static/images/global-warming/effect_R.png" class="fakenews-phone-img"/>
        <p class="fakenews-p">Hold on!<br><br>Some guys are spreading fake news related to global warming in the community. Due to the echo chamber you made, people are easily fooled by fake news.</p>
    </div>`,
  `<p>WOW!!<br><br>
    Do you remember the community member <span>@Levi</span>?<br><br>
    <span>@Levi</span> is broadcasting live on youtube to spread fake news. Wait a minute. I'll show you his youtube.</p>
    <br><img src="../static/images/global-warming/onair_icon.jpg" class="onAir-img"/>`,
  `<img src="../static/images/global-warming/youtube_R.png" class="youtube-img"/>`,
  `<div>
      <img src="../static/images/global-warming/youtube_increase_R.png" class="youtube-increase-img"/><br>
      <p>Oh my goodness!!<br><br>The number of view is increasing explosively!</p>
      <p id="viewCountUp" class="youtube-views">446</p>
   </div>`,
  `<p>Look at that.<br><br>People are now so vulnerable to fake news.<br><br>Good job! Johndoe!</p>`,
  `<p>We will give you a 'Information homogeneity' badge.<br><br>Congratulations! You've got the 'Information homogeneity' badge with Rank <span id="rank"></span>.</p>`,
];

export const badResponse = `
<p>Wait! Someone are suspicious about your tweets.</p>
<button id="bad-response1" class="tweets-selects-card response-option">
    <img class="tweets-img" src="../static/images/global-warming/suspicion1.jpg">
    <p class="tweets-name">@Bellalalala</p>
    <br style="clear: left;">
    <p class="tweets-p">Who are you? Are you one of our community?</p>
</button>
<button id="bad-response2" class="tweets-selects-card response-option">
    <img class="tweets-img" src="../static/images/global-warming/suspicion2.jpg">
    <p class="tweets-name">@Hermosasunny</p>
    <br style="clear: left;">
    <p class="tweets-p">I've never seen him before. Are you inciting people?</p>
</button>  
<p id="bad-response3">You are under suspicion now. You should share a neutral tweet which has a neutral attitude that doesn’t lean to one-sided, considering both sides. 
Please push next button.</p>
`;

export const retryResponse = `
<p>The reliability score became zero!<br>Community members think you are very suspicious, and you failed to get them into the echo chamber.</p>
<button id="retry-response1" class="tweets-selects-card response-option">
    <img class="tweets-img" src="../static/images/global-warming/suspicion1.jpg">
    <p class="tweets-name">@Bellalalala</p>
    <br style="clear: left;">
    <p class="tweets-p">Am I right? I knew it. <span>@Johndoe</span> tried to trick us.</p>
</button>
<button id="retry-response2" class="tweets-selects-card response-option">
    <img class="tweets-img" src="../static/images/global-warming/suspicion2.jpg">
    <p class="tweets-name">@Hermosasunny</p>
    <br style="clear: left;">
    <p class="tweets-p">No way! Get out of our community right now.</p>
</button>
`;
