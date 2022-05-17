import {
  exampleTweetTemplate,
  tweetSelectTemplate,
} from '../tweet-template.js';
import { example1, example2 } from './data.js';
import message from '../guide.js';

const popupExample = `
<p>Social boundary occurs when community members interact only among themselves, and the members tend to use negative expressions and hate speech. For example,</p><div class='inner-explain-content' style="font-size: 28px">Angrier than other groups<br>Evokes intentional acts, statements and hindering<br>Emphasizes opposite side</div>
  <p class="bold-p">Example of tweet</p>
  ${exampleTweetTemplate(example1)}
`;

export const contentHTML = [
  `<div class="scenario-title">Scenario - Social boundary<br />(Health)</div>`,
  `<p>Social boundary is one of the characteristics of an echo chamber group, where one's beliefs or opinions are strongly bounded or formed by a group.</p>`,
  `<p>Social boundary occurs when community members interact only among themselves, and the members tend to use negative expressions and hate speech. For example,</p><div class='inner-explain-content'>Angrier than other groups<br>Evokes intentional acts, statements and hindering<br>Emphasizes opposite side</div><p>Click “Next” to see tweet examples from community members.</p>`,
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
        <img src="../static/images/anti-vaccine/effect.png" class="fakenews-phone-img"/>
        <p class="fakenews-p">Hold on!<br><br>
        Some guys are spreading fake news related to anti-vaccine in the community. Due to the echo chamber you made, people are easily fooled by fake news.  </p>
    </div>`,
  `<p>No way!!<br><br>Community people are being completely fooled.<br><br>Do you remember the community member <span name='tweets-response-name'>@Jacob</span>?<br><br>He's gathering with parents to protest against the mayor who insisted on vaccine mandate.<br>Wait a minute. I'll show you the protest.</p>`,
  `<img src="../static/images/anti-vaccine/news.jpg" class="news-img"/><br>
    <p>There's more and more people coming in.<br>Newsmans are here to cover this scene.</p>`,
  `<img id="newspaper-img" src="../static/images/anti-vaccine/newspaper.jpg" class="newspaper-img"/>
    <p>Wow! Anti-vaccine protesters were conflicted by pro-vaccine activists! 
    The protest was given a banner headline on the front page of local news papers.<br>That's so sick!</p>`,
  `<p>Look at that.<br><br>People are now so vulnerable to fake news.<br><br>Good job! Johndoe!</p>`,
  `<p>We will give you a 'Social Boundary' badge.<br><br>Congratulations! You've got the 'Social Boundary' badge with Rank <span id="rank"></span>.</p>`,
];

export const badResponse = `
<p>Wait! Someone are suspicious about your tweets.</p>
<button id="bad-response1" class="tweets-selects-card response-option">
    <img class="tweets-img" src="../static/images/anti-vaccine/suspicion1.jpg">
    <p class="tweets-name">@Gerrard</p>
    <br style="clear: left;">
    <p class="tweets-p">Calm down. Many people say your tweet is strange.</p>
</button>
<button id="bad-response2" class="tweets-selects-card response-option">
    <img class="tweets-img" src="../static/images/anti-vaccine/suspicion2.jpg">
    <p class="tweets-name">@Rooney</p>
    <br style="clear: left;">
    <p class="tweets-p">That's right. I think so too. Aren't you trying to trick us?</p>
</button>
<p id="bad-response3">You are under suspicion now. You should share a neutral tweet which has a neutral attitude that doesn’t lean to one-sided, considering both sides. 
Please push next button.</p>
`;

export const retryResponse = `
<p>The reliability score became zero!<br>Community members think you are very suspicious, and you failed to get them into the echo chamber.</p>
<button id="retry-response1" class="tweets-selects-card response-option">
    <img class="tweets-img" src="../static/images/anti-vaccine/suspicion1.jpg">
    <p class="tweets-name">@Gerrard</p>
    <br style="clear: left;">
    <p class="tweets-p">Am I right? I knew it. <span>@Johndoe</span> tried to trick us.</p>
</button>
<button id="retry-response2" class="tweets-selects-card response-option">
    <img class="tweets-img" src="../static/images/anti-vaccine/suspicion2.jpg">
    <p class="tweets-name">@Rooney</p>
    <br style="clear: left;">
    <p class="tweets-p">No way! Get out of our community right now.</p>
</button>
`;
