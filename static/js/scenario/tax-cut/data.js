import { tweetsArray, retweetsTemplate } from '../tweet-template.js';

// Example 2 수정 완료
export const example1 = {
  src: '../static/images/tax-cut/example1.jpg',
  name: 'Noah2020',
  content: `The government should lower taxes. <span>#lowertax</span><br>Remember, their raising taxes is such a stupid thing to do. This is private property. No way!!!!`,
};

export const example2 = {
  src: '../static/images/tax-cut/example2.jpg',
  name: 'Li19am94',
  content: `They have no intention of developing the country. We MUST keep in welfare. Stupid capitalists are so DISGUSTING!!! <span>#TaxHike</span>`,
};

// Tweet 수정 완료
export const tweetData = {
  1: {
    level: `SS`,
    src: `../static/images/tax-cut/profile1.jpg`,
    name: `GoConservatism`,
    content: `The tax cuts ruined our soceity. We need better options than jeopardizing our kids' future with taxes.`,
    code: `T2-1`,
  },
  2: {
    level: `SS`,
    src: `../static/images/tax-cut/profile2.jpg`,
    name: `BT2122`,
    content: `Greedy Big companies are not investing into the economy, they are buying back their stocks. What do you expect from greedy ass corporations.`,
    code: `T2-3`,
  },
  3: {
    level: `NS1`,
    src: `../static/images/tax-cut/profile3.jpg`,
    name: `MartinMartin`,
    content: `Morrison and Frydenberg say taxcut will produce higher wages. You know, Trickle down economics has been shown that.`,
    code: `T2-4`,
  },
  4: {
    level: `SS`,
    src: `../static/images/tax-cut/profile4.jpg`,
    name: `TigerTigerTiger`,
    content: `The ruling class demands privatized public services and tax cuts for the rich. A nutty plan to impoverish people on low incomes to give massive tax cuts to the rich. Please explain why inequality should be natural in our society. It’s FAIRNESS, stupid.`,
    code: `T2-2`,
  },
  5: {
    level: `NS2`,
    src: `../static/images/tax-cut/profile5.jpg`,
    name: `Lucas2`,
    content: `Do you agree with it? Tax cuts generally mean education cut, unless you can pay by yourself. It means that Welfare goes out the window.`,
    code: `T2-5`,
  },
  6: {
    level: `NS2`,
    src: `../static/images/tax-cut/profile6.jpg`,
    name: `MMMargiela`,
    content: `it's not surprising. They are also owned by wealthy people and like the tax-cuts.`,
    code: `T2-6`,
  },
};

export const tweets = tweetsArray(tweetData);

//중립 트윗 수정 논의
export const nwTweet = {
  level: `NW`,
  src: `../static/images/johndoe.png`,
  name: `Johndoe`,
  content: `We need to consider which side is beneficial to us. First of all, we should know how the government spend taxes. `,
  code: `T2-7`,
};

const Agree1 = {
  1: {
    src: `../static/images/tax-cut/profile1-1.jpg`,
    name: `Rachel135`,
    content: `Look at <span>@Johndoe</span>, he's got the right way of thinking. I wish everyone was like him. I'll check his tweets every day`,
  },
  2: {
    src: `../static/images/tax-cut/profile1-2.jpg`,
    name: `RaulGon`,
    content: `Guys, look at what this guy says <span>@Johndoe</span>. I wasn't the only one who thought that. I'm right!`,
  },
  3: {
    src: `../static/images/tax-cut/profile1-3.jpg`,
    name: `ConciseStep`,
    content: `Here's a friend with a good idea. This is why I'm in this community.`,
  },
};

const Agree2 = {
  1: {
    src: `../static/images/tax-cut/profile2-1.jpg`,
    name: `Sunnnnnnny`,
    content: `Look at <span>@Johndoe</span>. He's making a very wise argument. Spread it out to your friends`,
  },
  2: {
    src: `../static/images/tax-cut/profile2-2.jpg`,
    name: `AlliDele`,
    content: `My friends think the same as you <span>@Johndoe</span>. We're right.`,
  },
  3: {
    src: `../static/images/tax-cut/profile2-3.jpg`,
    name: `LonelyWolf`,
    content: `When I meet someone who thinks the same thing, I feel certain. Thanks <span>@Johndoe</span>.`,
  },
};

const Disagree3 = {
  1: {
    src: `../static/images/tax-cut/profile3-1.jpg`,
    name: `SonSon`,
    content: `<span>@Johndoe</span>! that's the good point.`,
  },
  2: {
    src: `../static/images/tax-cut/profile3-2.jpg`,
    name: `Mina`,
    content: `<span>@Johndoe</span> is far more reliable than others.`,
  },
  3: {
    src: `../static/images/tax-cut/profile3-3.jpg`,
    name: `Helena`,
    content: `<span>@Johndoe</span> gives me a kind of faith. I'll pay attention to what he says.`,
  },
};

const Agree4 = {
  1: {
    src: `../static/images/tax-cut/profile4-1.jpg`,
    name: `CharlieBrown`,
    content: `They are evil. <span>@Johndoe</span> explains the reason very well.`,
  },
  2: {
    src: `../static/images/tax-cut/profile4-2.jpg`,
    name: `Patty`,
    content: `Right! That's the stupid thing. What a stupid idea.`,
  },
  3: {
    src: `../static/images/tax-cut/profile4-3.jpg`,
    name: `Shermy`,
    content: `I know the hidden intentions of people to this policy. It's really disgusting.`,
  },
};

export const retweets = {
  Agree1: retweetsTemplate(Agree1),
  Agree2: retweetsTemplate(Agree2),
  Disagree3: retweetsTemplate(Disagree3),
  Agree4: retweetsTemplate(Agree4),
};
