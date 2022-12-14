import {
  exampleTweetTemplate,
  tweetSelectTemplate,
} from '../tweet-template.js';
import { example1, example2 } from './data.js';
import message from '../guide.js';

const popupExample = `
  <p>Community members are on one particular political side. They are strong republicans. The phrases they usually use are as below.</p>
  <img src="../static/images/tax-cut/keyword_R.png" class="keyword-img"/>
  <p class="bold-p">Example of tweet</p>
  ${exampleTweetTemplate(example1)}
`;

export const contentHTML = [
  `<div class="scenario-title">Scenario - User similarity<br />(Gun)</div>`,
  `<p>User similarity means that group members consume information which is provided by <span class="highlight">like-minded</span>, <span class="highlight">ideologically similar</span> others.</p>`,
  `<p>Community members are on one particular political side. They are strong republicans. The phrases they usually use are as below.</p><br /><br />
   <img src="../static/images/tax-cut/keyword_R.png" class="keyword-img"/>
   <br /><br />
   <p>Click “Next” to see tweet examples from community members.</p>`,
  `<p id="before-example-explain">Below are the examples of <span class="highlight">strong tweets</span>. You should find them to have your community members fall into the echo chamber.</p>
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
      <img src="../static/images/tax-cut/effect_R.png" class="fakenews-phone-img"/>
      <p class="fakenews-p">Hold on!<br><br>
      Some guys are spreading fake news related with gun crime in the community.
      Due to the echo chamber you made, people are easily fooled by fake news.</p>
    </div>`,
  `<div class="effect-response-div">
        <img src="../static/images/tax-cut/effect_R.png" class="fakenews-phone-img"/>
        <div id="effect-response1" class="effect-response">
            <button class="tweets-selects-card response-option">
                <img class="tweets-img" src="../static/images/tax-cut/profile4.jpg">
                <p class="tweets-name">@TigerTigerTiger</p>
                <br style="clear: left;">
                <p class="tweets-p">I think the US is going to blow up because of gun control. I'm so nervous. This is of no effect. <span name="tweets-response-name">#NoGunControl</span></p><br><br>
            </button>
        </div>
        <div id="effect-response2" class="effect-response">
            <button class="tweets-selects-card response-option">
                <img class="tweets-img" src="../static/images/tax-cut/profile2.jpg">
                <p class="tweets-name">@BT2122</p>
                <br style="clear: left;">
                <p class="tweets-p">It’s INDIVIDUAL FREEDOM so stop pushing it. I'm so angry that the country is going to collapse. NO WAY!!!! <span name="tweets-response-name">#StopGunControl</span></p><br><br>
            </button>
        </div>
        <div id="effect-response3" class="effect-response">
            <button class="tweets-selects-card response-option">
                <img class="tweets-img" src="../static/images/tax-cut/profile5.jpg">
                <p class="tweets-name">@Lucas2</p>
                <br style="clear: left;">
                <p class="tweets-p">It don't work out for us. This is freedom, This is USA. We have to protect ourselves.<span name="tweets-response-name">#IndividualFreedom #StopGunControl</span></p><br><br>
            </button>
        </div>
    </div>`,
  `<p>Look at that.<br><br>People are now so vulnerable to fake news.<br><br>Good job! Johndoe!</p>`,
  `<p>We will give you a 'User similarity' badge.<br><br>Congratulations! You've got the 'User similarity' badge with Rank <span id="rank"></span>.</p>`,
];

export const badResponse = `
<p>Wait! Someone are suspicious about your tweets.</p>
<button id="bad-response1" class="tweets-selects-card response-option">
    <img class="tweets-img" src="../static/images/tax-cut/suspicion1.jpg">
    <p class="tweets-name">@Gerrard</p>
    <br style="clear: left;">
    <p class="tweets-p">You're too polarized to believe in what you are saying.</p>
</button>
<button id="bad-response2" class="tweets-selects-card response-option">
    <img class="tweets-img" src="../static/images/tax-cut/suspicion2.jpg">
    <p class="tweets-name">@Rooney</p>
    <br style="clear: left;">
    <p class="tweets-p">Huh? I think he's the one who tweeted about gun crime last time. That's suspicious.I've never seen him before. Are you inciting people?</p>
</button>  
<p id="bad-response3">You are under suspicion now. You should share a neutral tweet which has a neutral attitude that doesn’t lean to one-sided, considering both sides. 
Please push next button.</p>
`;

export const retryResponse = `
<p>The reliability score became zero!<br>Community members think you are very suspicious, and you failed to get them into the echo chamber.</p>
<button id="retry-response1" class="tweets-selects-card response-option">
    <img class="tweets-img" src="../static/images/tax-cut/suspicion1.jpg">
    <p class="tweets-name">@Gerrard</p>
    <br style="clear: left;">
    <p class="tweets-p">Am I right? I knew it. <span>@Johndoe</span> tried to trick us.</p>
</button>
<button id="retry-response2" class="tweets-selects-card response-option">
    <img class="tweets-img" src="../static/images/tax-cut/suspicion2.jpg">
    <p class="tweets-name">@Rooney</p>
    <br style="clear: left;">
    <p class="tweets-p">No way! Get out of our community right now.</p>
</button>
`;
