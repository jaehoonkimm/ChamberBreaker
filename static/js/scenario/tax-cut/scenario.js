import number from '../../game/number-store.js';
import { contentHTML, badResponse, retryResponse } from './template.js';
import sUtils from '../scenario-utils.js';
import badge from '../badge.js';
import { tweets, tweetData, retweets, nwTweet } from './data.js';
import play from '../play-store.js';

class TaxCut {
  constructor() {
    this.scenarioNum = undefined;
    this.content = undefined;
    this.contentIndex = undefined;
    this.scenarioScore = undefined;
  }

  init(num) {
    this.scenarioNum = num;
    this.content = document.querySelector('.scenario-content');
    this.contentIndex = 0;
    this.scenarioScore = undefined;
    this.content.innerHTML = contentHTML[this.contentIndex];
    sUtils.init('tax-cut', tweets, tweetData, retweets, nwTweet);
    play.pushUserSelectTweetArray();
  }

  nextScenario = () => {
    this.content.scrollTop = 0;
    const num = number.getNum();
    if (num == 0) {
      this.nextContent();
      sUtils.backButtonDisplay('block');
    } else if (num == 1) {
      this.nextContent();
    } else if (num == 2) {
      this.nextContent();
      sUtils.reactExample();
    } else if (num == 3) {
      this.nextContent();
      sUtils.backButtonDisplay('none');
      sUtils.setScenarioTweet();
    } else if (num == 4) {
      sUtils.retweetAction();
    } else if (num == 5) {
      this.nextContent();
      sUtils.setScenarioTweet();
    } else if (num == 6) {
      sUtils.retweetAction();
    } else if (num == 7) {
      this.nextContent();
      sUtils.setScenarioTweet();
    } else if (num == 8) {
      sUtils.retweetAction();
    } else if (num == 9) {
      this.setBadResponse();
      sUtils.reactSuspicion();
    } else if (num == 10) {
      sUtils.adviceTweet();
    } else if (num == 11) {
      this.nextContent();
      sUtils.setScenarioTweet();
    } else if (num == 12) {
      sUtils.retweetAction();
    } else if (num == 13) {
      this.scenarioScore = sUtils.getScenarioScore();
      this.contentIndex = 7;
      this.nextContent();
    } else if (num == 14) {
      this.nextContent();
    } else if (num == 15) {
      this.nextContent();
      this.reactFakeNewsComment();
    } else if (num == 16) {
      this.nextContent();
    } else if (num == 17) {
      this.nextContent();
      this.scenarioScore = sUtils.getScenarioScore();
      sUtils.setRank(this.scenarioScore);
      badge.updateTaxCutScore(this.scenarioScore, this.scenarioNum);
      this.content.insertAdjacentHTML('beforeend', badge.getBadgeTable());
    } else if (num == 18) {
      play.pushUserSelectTweetArray();
      document.getElementById('playTime').value = JSON.stringify(
        play.getPlayTimeInfo()
      );
      document.getElementById('selectTweet').value = JSON.stringify(
        play.getTweetSelectInfo()
      );
      sUtils.setScenarioScore(this.scenarioNum);
      const form = document.scenarioForm;
      form.submit();
    } else if (num == 300) {
      sUtils.failScenarioThree();
    } else if (num == 301) {
      this.setRetryResponse();
      sUtils.reactFailScenario();
    }

    number.addNum();
  };

  backScenario = () => {
    this.content.scrollTop = 0;
    const num = number.getNum();
    if (num == 1) {
      sUtils.backButtonDisplay('none');
      this.backContent();
    } else if (num == 2) {
      this.backContent();
    } else if (num == 3) {
      this.backContent();
    }
    number.subNum();
  };

  nextContent = () => {
    this.contentIndex++;
    this.content.innerHTML = contentHTML[this.contentIndex];
  };

  backContent = () => {
    this.contentIndex--;
    this.content.innerHTML = contentHTML[this.contentIndex];
  };

  setBadResponse = () => {
    this.content.innerHTML = badResponse;
  };

  setRetryResponse = () => {
    this.content.innerHTML = retryResponse;
  };

  async reactFakeNewsComment() {
    const stopTime = 3000;
    sUtils.nextButtonDisplay('none');
    sUtils.fadeInElement('effect-response1');
    await sUtils.timeout(stopTime);
    sUtils.fadeInElement('effect-response2');
    await sUtils.timeout(stopTime);
    sUtils.fadeInElement('effect-response3');
    await sUtils.timeout(stopTime);
    sUtils.nextButtonDisplay('block');
  }
}

const taxCut = new TaxCut();
export default taxCut;
