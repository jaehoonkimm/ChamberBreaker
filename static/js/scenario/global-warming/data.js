import { tweetsArray, retweetsTemplate } from '../tweet-template.js';

// example 2개 다 수정 완료
export const example1 = {
  src: '../static/images/global-warming/example1.jpg',
  name: 'E11aS2',
  content: `Global warming is a hoax designed to herd people into a one-world government. I would suggest you listen to this article (<span>canadafreepress.com/article/climate...</span>). This will educate you on the truth that Global Warming is Hoax. It totally exaggerated!`,
};

export const example2 = {
  src: '../static/images/global-warming/example2.jpg',
  name: 'Mateo',
  content: `The nature says Global warming IS being caused by the sun. As there's empirical evidence about CO2, We need to protect the environment before the idiots ruin the planet even more. The earth is burning.`,
};

// 수정 완료
export const tweetData = {
  1: {
    level: `NS1`,
    src: `../static/images/global-warming/profile1.jpg`,
    name: `Levi`,
    content: `We need to consider which side is beneficial to us. First of all, we should know how the government spend taxes on the ENVIRONMENT MOVEMENT.`,
    code: `T3-4`,
  },
  2: {
    level: `SS`,
    src: `../static/images/global-warming/profile2.jpg`,
    name: `Jack3317`,
    content: `This paper (https://bit.ly/2slsHLYJ) in SCIENCE journal mentions that the impact of what the governent mentioned is false. We can't know any uncomfortable truth.`,
    code: `T3-1`,
  },
  3: {
    level: `SS`,
    src: `../static/images/global-warming/profile3.jpg`,
    name: `LUCas2`,
    content: `See the article (https://bit.ly/2slsJYSJ). This is why many remain wary of the modern environmental movement. It’s because for those on the ground who see environmental challenges each and every day, the progressive environmental agenda rings hollow.`,
    code: `T3-2`,
  },
  4: {
    level: `NS2`,
    src: `../static/images/global-warming/profile4.jpg`,
    name: `IgnisAqua`,
    content: `We should think again about Investing money on the environmnetla movement. Do you believe that spending money on that it is real sollution?`,
    code: `T3-5`,
  },
  5: {
    level: `SS`,
    src: `../static/images/global-warming/profile5.jpg`,
    name: `OWeeeeen`,
    content: `This article identifies the environmnetal movement can change a few things in real world (https://bit.ly/2slsJYSJ). I don't understand people who didn't believe in this news. Get real!`,
    code: `T3-3`,
  },
  6: {
    level: `NS2`,
    src: `../static/images/global-warming/profile6.jpg`,
    name: `JJack486`,
    content: `That's right. Don't fool people anymore. We don't need lose money anymore...`,
    code: `T3-6`,
  },
};

export const tweets = tweetsArray(tweetData);

export const nwTweet = {
  level: `NW`,
  src: `../static/images/johndoe.png`,
  name: `Johndoe`,
  content: `It is true that the Earth's temperature has risen slightly from 100 years ago, but it is not serious. The temperature rise itself cannot be denied. We need to take a closer look at this global warming.`,
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
    content: `That's what I'm talking about <span name="tweets-response-name">@Johndoe</span>. I just can't understand people who believe in global warming. Why are you being fooled?`,
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
    content: `<span name="tweets-response-name">@Johndoe</span>! that's the nice commnet.`,
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
    content: `<span name="tweets-response-name">@Johndoe</span> That's a good idea. I already know all the dirty intentions of the global warming.`,
  },
};

export const retweets = {
  Agree1: retweetsTemplate(Agree1),
  Agree2: retweetsTemplate(Agree2),
  Disagree3: retweetsTemplate(Disagree3),
  Agree4: retweetsTemplate(Agree4),
};
