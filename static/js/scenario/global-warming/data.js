import { tweetsArray, retweetsTemplate } from '../tweet-template.js';

// Inflation

export const example1 = {
  src: '../static/images/global-warming/example1.jpg',
  name: 'E11aS2',
  content: `At 9.1%, inflation just surpassed Biden's approval rate. Inflation is Biden's best rival. His stupid policies make life difficult for citizens. Refer to the report (https://ift.tt/3qpEiZT).`,
};

export const example2 = {
  src: '../static/images/global-warming/example2.jpg',
  name: 'Mateo',
  content: `Inflation up 9.1% year over year. Significantly worse than expected & highest level in 41 years. The Government should please stop being silly. Please, Biden. This report quantitatively shows how much silly the policy is (https://bit.ly/3sgrJIX).`,
};

// 수정 완료
export const tweetData = {
  1: {
    level: `NS1`,
    src: `../static/images/global-warming/profile1.jpg`,
    name: `Levi`,
    content: `That's right. How long do I have to lose my money like a fool? Don't fool people anymore.`,
    code: `T3-4`,
  },
  2: {
    level: `SS`,
    src: `../static/images/global-warming/profile2.jpg`,
    name: `Jack3317`,
    content: `Inflation up 9.1% year over year. Significantly worse than expected & highest level in 41 years. The Government should please stop being silly. Please, Biden. This report quantitatively shows how much silly the policy is (https://bit.ly/3sgrJIX).`,
    code: `T3-1`,
  },
  3: {
    level: `SS`,
    src: `../static/images/global-warming/profile3.jpg`,
    name: `LUCas2`,
    content: `Inflation hit another 40+ year high in June of 9.1%, worse than expectations again and up from 8.6% last month. Joe Biden is the worst president in over 100 years. This article explains well why he is terrible (https://bit.ly/2jyssHSXI)`,
    code: `T3-2`,
  },
  4: {
    level: `NS2`,
    src: `../static/images/global-warming/profile4.jpg`,
    name: `IgnisAqua`,
    content: `Common sense is not common. Inflation Kills Middleclass people and Business people. I don't understand such a meaningless policy.`,
    code: `T3-5`,
  },
  5: {
    level: `SS`,
    src: `../static/images/global-warming/profile5.jpg`,
    name: `OWeeeeen`,
    content: `INFLATION NATION IS OVER 9 PERCENT! Watching Liberals defend inflation, which is a tax on the poorest Americans, is hilarious and pathetic all at the same time. If Biden did well, it wouldn't have been this bad. This paper has once again laid bare the true (https://bit.ly/2slsHLUI).`,
    code: `T3-3`,
  },
  6: {
    level: `NS2`,
    src: `../static/images/global-warming/profile6.jpg`,
    name: `JJack486`,
    content: `We don't need lose money anymore... I am so sick of inflation. The current policy will never solve our problems.`,
    code: `T3-6`,
  },
};

export const tweets = tweetsArray(tweetData);

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
