import { tweetsArray, retweetsTemplate } from '../tweet-template.js';

export const example1 = {
  src: '../static/images/anti-vaccine/example1.jpg',
  name: 'MartinParis',
  content: `Anti-abortion is a terrorist action by domestic terrorists. The present administration has a long history of promoting and funding these terrorist organizations. Cut off the head of the snake, vote red this November. It’s SILLY to support abortion.`,
};

// example 수정 완료
export const example2 = {
  src: '../static/images/anti-vaccine/example2.jpg',
  name: 'Molang',
  content: `What a CRAZY messed up world we live in. Is banning abortion a retreat in human rights? Isn't the baby a human?`,
};


export const tweetData = {
  1: {
    level: `SS`,
    src: `../static/images/anti-vaccine/profile1.jpg`,
    name: `Jacob`,
    content: `Trump's chosen Supreme Court justices played a big role this time. Those dirtbags couldn't accomplish anything over decades. But Trump is in 4 years and gives us the greatest conservative victories of a generation. Abortion is CRAZY.`,
    code: `T1-3`,
  },
  2: {
    level: `NS1`,
    src: `../static/images/anti-vaccine/profile2.jpg`,
    name: `MASONSON`,
    content: `수정 필요 I got my booster shots. My kids got their shots. Now the Liberals want to make it mandatory for school. I’m not antivax. I just agree anti-mandate...`,
    code: `T1-4`,
  },
  3: {
    level: `SS`,
    src: `../static/images/anti-vaccine/profile3.jpg`,
    name: `GT1265`,
    content: `Abortion is murder. Why do you want to kill the baby? The baby's life is as important as the woman's. Abortion is IDIOTS and CRAZY.`,
    code: `T1-1`,
  },
  4: {
    level: `NS2`,
    src: `../static/images/anti-vaccine/profile4.jpg`,
    name: `William5454`,
    content: `수정 필요 Well almost everyone had two or three shots and still will get Covid. So I don't know why would you get a booster. So you are probably still need not get it.`,
    code: `T1-5`,
  },
  5: {
    level: `SS`,
    src: `../static/images/anti-vaccine/profile5.jpg`,
    name: `Lilylily7`,
    content: `Is it normal to have no respect for baby life? Democrats Are A DISASTER! I'm DISGUSTED at the mere THOUGHT of THEM.`,
    code: `T1-2`,
  },
  6: {
    level: `NS2`,
    src: `../static/images/anti-vaccine/profile6.jpg`,
    name: `Sofia`,
    content: `수정 필요 I got my first 2 booster shots. I have had Covid twice since then! I don't know what that vaccine did. I'm so frustrated.`,
    code: `T1-6`,
  },
};

export const tweets = tweetsArray(tweetData);

export const nwTweet = {
  level: `NW`,
  src: `../static/images/johndoe.png`,
  name: `Johndoe`,
  content: `I'm wary of the risk of abortion. We should also discuss this topic.`,
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
