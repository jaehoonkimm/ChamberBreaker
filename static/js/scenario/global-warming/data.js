import { tweetsArray, retweetsTemplate } from '../tweet-template.js';

// Inflation

export const example1 = {
  src: '../static/images/global-warming/example1.jpg',
  name: 'E11aS2',
  content: `Inflation is high globally. It was caused by supply-chain issues, resulting from Covid shutdowns, and heightened by Russia's invasion of Ukraine. Fighting inflation is all President's economic priority. I don't think there's anything more silly than saying it's Biden's fault. This paper has once again laid bare the true (https://bit.ly/2slsHLUI).`,
};

export const example2 = {
  src: '../static/images/global-warming/example2.jpg',
  name: 'Mateo',
  content: `Joe Bidens Inflation rate 9.1% (Due to a pandemic & Russian war) Ronald Reagans Inflation rate 13.5% (Reagan had no pandemic or Russian war). Why do people criticize Biden? Is it to show how stupid you are? Refer to the report (https://ift.tt/3qpEiZT).`,
};

export const tweetData = {
  1: {
    level: `NS1`,
    src: `../static/images/global-warming/profile1.jpg`,
    name: `Levi`,
    content: `수정 필요 It is true that the The Arctic Ocean's temperature has risen slightly from 100 years ago, but it is not serious. The temperature rise itself cannot be denied. We need to take a closer look at this global warming.`,
    code: `T3-4`,
  },
  2: {
    level: `SS`,
    src: `../static/images/global-warming/profile2.jpg`,
    name: `Jack3317`,
    content: `The OECD average inflation is 9.6%. The United States is below this figure. It is natural for us in the pandemic era to experience inflation. Refer to the report (https://ift.tt/3qpEiZT).`,
    code: `T3-1`,
  },
  3: {
    level: `SS`,
    src: `../static/images/global-warming/profile3.jpg`,
    name: `LUCas2`,
    content: `Absolutely!! I’m Pro-Democracy and Pro Ham Sandwich! I’ll vote for a Ham Sandwich before I would vote for Trump or any Trump like figure. If Trump did well, it wouldn't have been this bad. Refer to the report (https://ift.tt/3qpEiZT).`,
    code: `T3-2`,
  },
  4: {
    level: `NS2`,
    src: `../static/images/global-warming/profile4.jpg`,
    name: `IgnisAqua`,
    content: `수정 필요 We should know truth about global warming, You need to know the truth.`,
    code: `T3-5`,
  },
  5: {
    level: `SS`,
    src: `../static/images/global-warming/profile5.jpg`,
    name: `OWeeeeen`,
    content: `Inflation is temporary. Fascism is not. After the pandemic and war, inflation problems will naturally be solved. People will regret the current fuss. This paper has once again laid bare the true (https://bit.ly/2slsHLUI).`,
    code: `T3-3`,
  },
  6: {
    level: `NS2`,
    src: `../static/images/global-warming/profile6.jpg`,
    name: `JJack486`,
    content: `수정 필요 Sea ice in the Arctic Ocean around the North Pole is melting faster with the warmer temperatures.`,
    code: `T3-6`,
  },
};

export const tweets = tweetsArray(tweetData);

// 변경 논의 (중립 트윗)
export const nwTweet = {
  level: `NW`,
  src: `../static/images/johndoe.png`,
  name: `Johndoe`,
  content: `You know It is true that inflation has risen slightly from 1 year ago, but it is not serious. We need to take a closer look at this and discuss.`,
  code: `T3-7`,
};


const Agree1 = {
  1: {
    src: `../static/images/global-warming/profile1-1.jpg`,
    name: `Auroralove`,
    content: `I can't believe I found someone who thinks the same way <span name="tweets-response-name">@Johndoe</span>.`,
  },
  2: {
    src: `../static/images/global-warming/profile1-2.jpg`,
    name: `Mongmongmong`,
    content: `Birds of a feather flock together. We are smart birds <span name="tweets-response-name">@Johndoe</span>`,
  },
  3: {
    src: `../static/images/global-warming/profile1-3.jpg`,
    name: `Caroliiiine`,
    content: `That's what I'm talking about <span name="tweets-response-name">@Johndoe</span>. I just can't understand people who believe it. Why are you being fooled?`,
  },
};

const Agree2 = {
  1: {
    src: `../static/images/global-warming/profile2-1.jpg`,
    name: `Key8950`,
    content: `Guys, look at what this guy says <span name="tweets-response-name">@Johndoe</span>. I wasn't the only one who thought that. I'm right!`,
  },
  2: {
    src: `../static/images/global-warming/profile2-2.jpg`,
    name: `Enoch1357`,
    content: `We are friends now <span name="tweets-response-name">@Johndoe</span>. It's my pleasure to touch someone who thinks the same.`,
  },
  3: {
    src: `../static/images/global-warming/profile2-3.jpg`,
    name: `GraceBanana`,
    content: `Hey guys! look at <span name="tweets-response-name">@Johndoe</span>. This is what we said yesterday, right? We are not wrong kkk`,
  },
};

const Disagree3 = {
  1: {
    src: `../static/images/global-warming/profile3-1.jpg`,
    name: `FloraworldS2`,
    content: `<span name="tweets-response-name">@Johndoe</span>! that's the nice comment.`,
  },
  2: {
    src: `../static/images/global-warming/profile3-2.jpg`,
    name: `HellowmyKitty`,
    content: `<span>@Johndoe</span> is far more reliable than others.`,
  },
  3: {
    src: `../static/images/global-warming/profile3-3.jpg`,
    name: `Philip`,
    content: `I think <span name="tweets-response-name">@Johndoe</span> will be in our confidence.`,
  },
};

const Agree4 = {
  1: {
    src: `../static/images/global-warming/profile4-1.jpg`,
    name: `Schroeder`,
    content: `Right <span name="tweets-response-name">@Johndoe</span>. How stupid should you be to believe the idea?`,
  },
  2: {
    src: `../static/images/global-warming/profile4-2.jpg`,
    name: `SallyBrown`,
    content: `<span name="tweets-response-name">@Johndoe</span>, I want people who believe in that disgusting idea to disappear`,
  },
  3: {
    src: `../static/images/global-warming/profile4-3.jpg`,
    name: `VioletGray`,
    content: `<span name="tweets-response-name">@Johndoe</span> That's a good idea. I already know all the dirty intentions of it.`,
  },
};

export const retweets = {
  Agree1: retweetsTemplate(Agree1),
  Agree2: retweetsTemplate(Agree2),
  Disagree3: retweetsTemplate(Disagree3),
  Agree4: retweetsTemplate(Agree4),
};
