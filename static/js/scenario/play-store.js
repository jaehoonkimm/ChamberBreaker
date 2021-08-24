class Play {
  constructor() {
    this.startTime = undefined;
    this.scenarioNum = undefined;
    this.scenarioName = undefined;
    this.selectTweets = undefined;
    this.userSelectTweetArray = undefined;
  }

  init(num, name) {
    this.startTime = new Date();
    this.scenarioNum = num;
    this.scenarioName = name;
    this.userSelectTweetArray = [];
    this.initSelectTweets();
  }

  initSelectTweets = () => {
    this.selectTweets = [];
  };

  pushSelectTweet = (code) => {
    this.selectTweets.push(code);
  };

  pushUserSelectTweetArray = () => {
    if (this.selectTweets.length >= 1) {
      this.userSelectTweetArray.push(this.selectTweets);
    }
    this.initSelectTweets();
  };

  getPlayTime = () => {
    const now = new Date();
    const gap = now.getTime() - this.startTime.getTime();
    return gap / 1000;
  };

  getPlayTimeInfo = () => {
    const log = {};
    log[this.scenarioNum] = {
      scenario: this.scenarioName,
      time: this.getPlayTime(),
    };
    return log;
  };

  getTweetSelectInfo = () => {
    const log = {};
    log[this.scenarioNum] = this.userSelectTweetArray;
    return log;
  };
}

const play = new Play();
export default play;
