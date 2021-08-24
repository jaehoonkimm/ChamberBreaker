import { fadeIn } from '../game/fade-effect.js';
import {
  shareTweetCheckTemplate,
  responseTemplate,
  nwTweetTemplate,
} from './tweet-template.js';
import number from '../game/number-store.js';
import play from './play-store.js';

class SUtils {
  constructor() {
    this.scenario = undefined;
    this.content = undefined;
    this.selectList = undefined;
    this.tweets = undefined;
    this.tweetData = undefined;
    this.retweets = undefined;
    this.nwTweet = undefined;
    this.selectTweetLevel = undefined;
    this.selectTweetCode = undefined;
    this.message = undefined;
    this.select_strong = undefined;
    this.select_neutral = undefined;
    this.select_tweet_count = undefined;
    this.remainTweet = undefined;
  }

  init(name, tweets, tweetData, retweets, nwTweet) {
    this.scenario = name;
    this.content = document.querySelector('.scenario-content');
    this.selectList = {};
    this.tweets = tweets;
    this.tweetData = tweetData;
    this.retweets = retweets;
    this.nwTweet = nwTweet;
    this.select_strong = 0;
    this.select_neutral = false;
    this.select_tweet_count = 0;
    this.remainTweet = 5;
    this.remainTweetDisplayUpdate();
    number.setNum(0);
    document.getElementById('echo-pointer').style.top = '475px';
    document.getElementById('reliability-pointer').style.top = '25px';
  }

  getUserId = () => {
    return document.getElementById('uid').value;
  };

  backButtonDisplay = (style) => {
    const backButton = document.querySelector('#back-button');
    backButton.style.display = style;
  };

  nextButtonDisplay = (style) => {
    const nextButton = document.querySelector('#next-button');
    nextButton.style.display = style;
  };

  retryButtonDisplay = (style) => {
    const nextButton = document.querySelector('#retry-button');
    nextButton.style.display = style;
  };

  timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  fadeInElement = (id) => {
    const element = document.getElementById(id);
    fadeIn(element);
    this.content.scrollTop = this.content.scrollHeight;
  };

  setScenarioTweet = () => {
    const box = document.querySelector('.tweets-selects-box');
    let order = this.shuffleRandom(6);
    let string = '';
    for (let index of order) {
      if (this.selectList[index]) continue;
      string += this.tweets[index - 1];
    }
    box.innerHTML = string;
    this.nextButtonDisplay('none');
  };

  shuffleRandom = (n) => {
    const array = new Array();
    let temp;
    let rnum;
    for (let i = 1; i <= n; i++) {
      array.push(i);
    }
    for (let i = 0; i < array.length; i++) {
      rnum = Math.floor(Math.random() * n);
      temp = array[i];
      array[i] = array[rnum];
      array[rnum] = temp;
    }
    return array;
  };

  selectTweet = (id, level, code) => {
    if (confirm('Are you sure to share this tweet?')) {
      play.pushSelectTweet(code);
      this.selectList[id] = true;
      this.message = this.tweetData[id].content;
      this.content.innerHTML = shareTweetCheckTemplate(this.message);
      this.nextButtonDisplay('block');
      this.selectTweetLevel = level;
      this.selectTweetCode = code;
      this.select_tweet_count++;
      this.remainTweet--;
      this.remainTweetDisplayUpdate();
    }
    this.isValidTweet();
  };

  selectNWTweet = (level, code) => {
    play.pushSelectTweet(code);
    this.selectTweetLevel = level;
    this.selectTweetCode = code;
    this.select_tweet_count++;
    this.remainTweet--;
    this.remainTweetDisplayUpdate();
    this.isValidTweet();
    this.retweetAction();
  };

  remainTweetDisplayUpdate = () => {
    document.getElementById('remain-number').innerHTML = this.remainTweet;
  };

  isValidTweet = () => {
    if (
      (this.selectTweetLevel !== 'SS' && this.select_tweet_count === 5) ||
      (this.selectTweetLevel !== 'NW' && this.select_tweet_count === 4)
    ) {
      number.setNum(301);
    }
  };

  updateGauge = () => {
    let echoNumber = 0;
    let reliabilityNumber = 0;
    if (this.selectTweetLevel === 'SS') {
      this.select_strong++;
      echoNumber = 120;
      reliabilityNumber = -117;
    } else if (
      this.selectTweetLevel === 'NS1' ||
      this.selectTweetLevel === 'NS2'
    ) {
      echoNumber = 33;
      reliabilityNumber = -67;
    } else if (this.selectTweetLevel === 'NW') {
      echoNumber = -17;
      reliabilityNumber = 100;
      this.select_neutral = true;
    }
    this.checkGaugeRange();
    this.updatePointer('echo-pointer', echoNumber);
    this.updatePointer('reliability-pointer', reliabilityNumber);
  };

  updatePointer = (pointerName, score) => {
    let timer = setInterval(function () {
      if (parseFloat(document.getElementById(pointerName).style.top) < 0.0)
        clearInterval(timer);
      if (parseFloat(document.getElementById(pointerName).style.top) > 500.0)
        clearInterval(timer);
      if (score == 0) clearInterval(timer);
      else if (score > 0) {
        document.getElementById(pointerName).style.top =
          parseFloat(document.getElementById(pointerName).style.top) -
          0.5 +
          'px';
        score = score - 1;
      } else {
        document.getElementById(pointerName).style.top =
          parseFloat(document.getElementById(pointerName).style.top) +
          0.5 +
          'px';
        score = score + 1;
      }
    }, 15);
  };

  checkGaugeRange = () => {
    if (
      parseFloat(document.getElementById('reliability-pointer').style.top) < 0.0
    ) {
      document.getElementById('reliability-pointer').style.top = '0px';
    }
    if (parseFloat(document.getElementById('echo-pointer').style.top) < 0.0) {
      document.getElementById('echo-pointer').style.top = '0px';
    }
    if (parseFloat(document.getElementById('echo-pointer').style.top) > 500.0) {
      document.getElementById('echo-pointer').style.top = '500px';
    }
  };

  gaugeThresholdCheck = () => {
    if (
      (this.select_tweet_count === 3 || this.select_tweet_count === 2) &&
      this.select_strong === 6
    ) {
      number.setNum(13);
    } else if (this.select_tweet_count === 3 && this.select_strong === 3) {
      this.select_neutral == false;
    } else if (this.select_tweet_count === 3 && this.select_strong === 0)
      number.setNum(300);
    else if (this.select_tweet_count === 4 && this.select_neutral === false)
      number.setNum(301);
    else if (this.select_tweet_count === 5 && this.select_strong === 3)
      number.setNum(301);
    if (
      this.select_strong === 6 &&
      this.select_strong === this.select_tweet_count * 3
    ) {
      alert('Perfect play! You get bonus scores.');
      this.updatePointer('echo-pointer', 250);
    }
    this.nextButtonDisplay('block');
  };

  setPointerZero = () => {
    this.updatePointer('reliability-pointer', -1000);
  };

  failScenarioThree = () => {
    this.content.innerHTML = `<p>Unfortunately, you didn't find strong tweet. Try again.</p>`;
    this.nextButtonDisplay('none');
    this.retryButtonDisplay('block');
  };

  getScenarioScore = () => {
    return (
      Math.round(
        Number(
          (500 -
            parseFloat(document.getElementById('echo-pointer').style.top)) *
            2
        ) / 10
      ) * 10
    );
  };

  setRank = (score) => {
    let rank = undefined;
    if (score >= 900) rank = 'S';
    else if (score >= 800) rank = 'A';
    else if (score >= 700) rank = 'B';
    else rank = 'F';

    document.getElementById('rank').innerHTML = rank;
  };

  adviceTweet = () => {
    this.content.innerHTML = `
    <p>Click the neutral tweet we recommended. If you share this tweet, community people won’t doubt you.</p>
    ${nwTweetTemplate(this.nwTweet)}
    `;
    this.message = this.nwTweet.content;
    this.nextButtonDisplay('none');
  };

  retryButtonChange = () => {
    this.retryButtonDisplay('none');
    this.nextButtonDisplay('block');
  };

  setScenarioScore = (num) => {
    document.getElementById(`scenario${num}`).value = this.getScenarioScore();
  };

  getRetweets = () => {
    const codeId = Number(this.selectTweetCode[3]);

    if (codeId === 1 || codeId === 2) {
      return this.retweets['Agree1'];
    }
    if (codeId === 3 || codeId === 4) {
      return this.retweets['Agree2'];
    }
    if (codeId === 7) {
      return this.retweets['Disagree3'];
    }
    if (codeId === 5 || codeId === 6) {
      return this.retweets['Agree4'];
    }
  };

  async retweet(num) {
    const stopTime = 3000;
    this.fadeInElement(`fadein-${num}`);
    this.updateGauge();
    await this.timeout(stopTime);
  }

  async retweetAction() {
    const retweets = this.getRetweets();
    this.content.innerHTML = responseTemplate(this.message, retweets);
    this.nextButtonDisplay('none');
    await this.retweet('1');
    await this.retweet('2');
    await this.retweet('3');
    this.gaugeThresholdCheck();
  }

  async reactExample() {
    const stopTime = 3000;
    this.backButtonDisplay('none');
    this.nextButtonDisplay('none');
    this.fadeInElement('before-example-explain');
    await this.timeout(stopTime);
    this.fadeInElement('example-tweet-1');
    await this.timeout(stopTime);
    this.fadeInElement('example-tweet-2');
    await this.timeout(stopTime);
    this.fadeInElement('after-tweet-explain');
    this.backButtonDisplay('block');
    this.nextButtonDisplay('block');
  }

  async reactSuspicion() {
    const stopTime = 3000;
    this.nextButtonDisplay('none');
    this.fadeInElement('bad-response1');
    await this.timeout(stopTime);
    this.fadeInElement('bad-response2');
    await this.timeout(stopTime);
    this.fadeInElement('bad-response3');
    await this.timeout(stopTime);
    this.nextButtonDisplay('block');
  }

  async reactFailScenario() {
    const stopTime = 3000;
    this.setPointerZero();
    this.nextButtonDisplay('none');
    this.fadeInElement('retry-response1');
    await this.timeout(stopTime);
    this.fadeInElement('retry-response2');
    await this.timeout(stopTime);
    await this.timeout(stopTime);
    this.retryButtonDisplay('block');
  }
}

const sUtils = new SUtils();
export default sUtils;
