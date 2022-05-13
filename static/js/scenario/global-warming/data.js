import { tweetsArray, retweetsTemplate } from '../tweet-template.js';

// 수정 필요 (논의 사항)
export const example1 = {
  src: '../static/images/global-warming/example1.jpg',
  name: 'E11aS2',
  content: `[수정 예정] Global warming is a hoax designed to herd people into a one-world government. I would suggest you listen to this article (<span>canadafreepress.com/article/climate...</span>). This will educate you on the truth that Global Warming is Hoax. It totally exaggerated!`,
};

export const example2 = {
  src: '../static/images/global-warming/example2.jpg',
  name: 'Mateo',
  content: `[수정 예정] "The nature" says <span>#GlobalWarming</span> ISN'T being caused by the sun. As there's no empirical evidence against CO2, it looks like its caused by man's change of use of land, and of course, huge arbitrary retrospective man-made adjustments to historic temperature data (<span>https://www.nature.com/articles/srep35070</span>)`,
};

// 수정 완료
export const tweetData = {
  1: {
    level: `NS1`,
    src: `../static/images/global-warming/profile1.jpg`,
    name: `Levi`,
    content: `It is true that the The Arctic Ocean's temperature has risen slightly from 100 years ago, but it is not serious. The temperature rise itself cannot be denied. We need to take a closer look at this global warming.`,
    code: `T3-4`,
  },
  2: {
    level: `SS`,
    src: `../static/images/global-warming/profile2.jpg`,
    name: `Jack3317`,
    content: `The increase of ICE is greater than you think due to global warming. I will attach a link (https://bit.ly/2ulsHL54) to their representative lecture video. They are very reliable people. so I fully support their argument.`,
    code: `T3-1`,
  },
  3: {
    level: `SS`,
    src: `../static/images/global-warming/profile3.jpg`,
    name: `LUCas2`,
    content: `This paper (https://bit.ly/2tlsHL89) mentions that glaciers are DECREASING. Don't deny the paper. Come out of your imagination!!! It's FAKE NEWS.`,
    code: `T3-2`,
  },
  4: {
    level: `NS2`,
    src: `../static/images/global-warming/profile4.jpg`,
    name: `IgnisAqua`,
    content: ` We should know truth about global warming, You need to know the truth. `,
    code: `T3-5`,
  },
  5: {
    level: `SS`,
    src: `../static/images/global-warming/profile5.jpg`,
    name: `OWeeeeen`,
    content: `I'm going to attach another article, (https://bit.ly/2olsHLTL) so watch this news. Because of global warming, it's too obvious that glaciers are decreasing, If you hope there will be more glaciers, you should use eco-friendly products instead of consuming conspiracy theories. Don't believe idiot's rumor. They are liar`,
    code: `T3-3`,
  },
  6: {
    level: `NS2`,
    src: `../static/images/global-warming/profile6.jpg`,
    name: `JJack486`,
    content: `Sea ice in the Arctic Ocean around the North Pole is melting faster with the warmer temperatures.`,
    code: `T3-6`,
  },
};

export const tweets = tweetsArray(tweetData);

// 변경 논의 (중립 트윗)
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
    content: `<span name="tweets-response-name">@Johndoe</span> That's a good idea. I already know all the dirty intentions of the global warming.`,
  },
};

export const retweets = {
  Agree1: retweetsTemplate(Agree1),
  Agree2: retweetsTemplate(Agree2),
  Disagree3: retweetsTemplate(Disagree3),
  Agree4: retweetsTemplate(Agree4),
};
