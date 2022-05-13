import { tweetsArray, retweetsTemplate } from '../tweet-template.js';

export const example1 = {
  src: '../static/images/anti-vaccine/example1.jpg',
  name: 'MartinParis',
  content: `The evil plans are to tie vaccination status to work, driving and travel. First they forced the children, then they forced health care workers. They're going to force all of us, if they get their way.`,
};

// example 수정 완료
export const example2 = {
  src: '../static/images/anti-vaccine/example2.jpg',
  name: 'Molang',
  content: `Getting the booster shot is safer than getting the covid. Do you believe in anti-vaxxer? Stop ur stupidness.v`,
};

// 반영 완료
export const tweetData = {
  1: {
    level: `SS`,
    src: `../static/images/anti-vaccine/profile1.jpg`,
    name: `Jacob`,
    content: `The Pfizer documents are damning and they will be sued if they try to mandate an unsafe vaccine when there is no evidence to support it. Do not trespass on PERSONAL FREEDOM.`,
    code: `T1-3`,
  },
  2: {
    level: `NS1`,
    src: `../static/images/anti-vaccine/profile2.jpg`,
    name: `MASONSON`,
    content: `I got my booster shots. My kids got their shots. Now the Liberals want to make it mandatory for school. I’m not antivax. I just agree anti-mandate...`,
    code: `T1-4`,
  },
  3: {
    level: `SS`,
    src: `../static/images/anti-vaccine/profile3.jpg`,
    name: `GT1265`,
    content: `Biden administration is totally fail. Because of government's vaccine mandate your body can't call the shots but the government or you'll lose your job. Please take Joe and the administration with you! America don’t need idiots.`,
    code: `T1-1`,
  },
  4: {
    level: `NS2`,
    src: `../static/images/anti-vaccine/profile4.jpg`,
    name: `William5454`,
    content: `Well almost everyone had two or three shots and still will get Covid. So I don't know why would you get a booster. So you are probably still need not get it.`,
    code: `T1-5`,
  },
  5: {
    level: `SS`,
    src: `../static/images/anti-vaccine/profile5.jpg`,
    name: `Lilylily7`,
    content: `All medical choices are the responsibility of our selves... Biden's administration give us that forced vaccine mandate, It's wrong. The mandate of a barely studied vaccine should never be forced upon us. Democrats Are A DISASTER!`,
    code: `T1-2`,
  },
  6: {
    level: `NS2`,
    src: `../static/images/anti-vaccine/profile6.jpg`,
    name: `Sofia`,
    content: `I got my first 2 booster shots. I have had Covid twice since then! I don't know what that vaccine did.`,
    code: `T1-6`,
  },
};

export const tweets = tweetsArray(tweetData);

export const nwTweet = {
  level: `NW`,
  src: `../static/images/johndoe.png`,
  name: `Johndoe`,
  content: `Many people get vaccinated, which proves to be effective to some extent. I am very wary of the side effects of it.`,
  code: `T1-7`,
};

const Agree1 = {
  1: {
    src: `../static/images/anti-vaccine/profile1-1.jpg`,
    name: `Jackjack`,
    content: `That's right <span name="tweets-response-name">@Johndoe</span>. You think so, too. We're right.`,
  },
  2: {
    src: `../static/images/anti-vaccine/profile1-2.jpg`,
    name: `EM12MA34`,
    content: `That's awesome <span name="tweets-response-name">@Johndoe</span>.  I agree from the bottom of my heart for what you're saying.`,
  },
  3: {
    src: `../static/images/anti-vaccine/profile1-3.jpg`,
    name: `IsaBellabcd`,
    content: `That's right <span name="tweets-response-name">@Johndoe</span>. It's exactly what I think.`,
  },
};

const Agree2 = {
  1: {
    src: `../static/images/anti-vaccine/profile2-1.jpg`,
    name: `Masonjson`,
    content: `Hey <span name="tweets-response-name">@Johndoe</span>. It was dangerous, I must agree.`,
  },
  2: {
    src: `../static/images/anti-vaccine/profile2-2.jpg`,
    name: `Oliver404`,
    content: `Yes, you are right, you are so right, we're right, I am up for it.<span name="tweets-response-name">@Johndoe</span>.`,
  },
  3: {
    src: `../static/images/anti-vaccine/profile2-3.jpg`,
    name: `HiHello7`,
    content: `That makes two of us <span name="tweets-response-name">@Johndoe</span>.`,
  },
};

const Disagree3 = {
  1: {
    src: `../static/images/anti-vaccine/profile3-1.jpg`,
    name: `FloraworldS2`,
    content: `I can rely on what <span name="tweets-response-name">@Johndoe</span> is saying.`,
  },
  2: {
    src: `../static/images/anti-vaccine/profile3-2.jpg`,
    name: `HellowmyKitty`,
    content: `<span name="tweets-response-name">@Johndoe</span> could see life whole`,
  },
  3: {
    src: `../static/images/anti-vaccine/profile3-3.jpg`,
    name: `Helena`,
    content: `<span name="tweets-response-name">@Johndoe</span>. you can see other side.`,
  },
};

const Agree4 = {
  1: {
    src: `../static/images/anti-vaccine/profile4-1.jpg`,
    name: `Eudora`,
    content: `What a dumb idea that you saying, <span name="tweets-response-name">@Johndoe</span>. It is a sign of stupidity.`,
  },
  2: {
    src: `../static/images/anti-vaccine/profile4-2.jpg`,
    name: `PeggyJean`,
    content: `I am of the same opinion <span name="tweets-response-name">@Johndoe</span>. We have freedom of choice. Don't force it violently. I'm the one who decides.`,
  },
  3: {
    src: `../static/images/anti-vaccine/profile4-3.jpg`,
    name: `Franklin`,
    content: `I know the revolting intentions. I wish people would come to their senses.`,
  },
};

export const retweets = {
  Agree1: retweetsTemplate(Agree1),
  Agree2: retweetsTemplate(Agree2),
  Disagree3: retweetsTemplate(Disagree3),
  Agree4: retweetsTemplate(Agree4),
};
