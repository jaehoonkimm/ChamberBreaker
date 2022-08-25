import { tweetsArray, retweetsTemplate } from '../tweet-template.js';

// Gun

export const example1 = {
  src: '../static/images/tax-cut/example1.jpg',
  name: 'Noah2020',
  content: `Is there another good policy than The right to keep and bear arms? Freedom is the virtue of CAPITALISM. I simply don't understand idiots who give up their rights.`,
};

export const example2 = {
  src: '../static/images/tax-cut/example2.jpg',
  name: 'Li19am94',
  content: `If a lunatic is shooting at a mall, what should we do? The answer is simple. I'll shoot him. Carrying a gun is the basis of safety. And this is an INDIVIDUAL RIGHT. Don't be presumptuous. <span>#RightToBearArms</span>`,
};

export const tweetData = {
  1: {
    level: `SS`,
    src: `../static/images/tax-cut/profile1.jpg`,
    name: `GoConservatism`,
    content: `The gun business is a very important business in the United States. Strange laws will make our economy difficult. The right to keep and bear arms should make ECONOMIC GROWTH.`,
    code: `T2-1`,
  },
  2: {
    level: `SS`,
    src: `../static/images/tax-cut/profile2.jpg`,
    name: `BT2122`,
    content: `Personal safety is far more important than the damage of a gun incident. Individual rights come first to me. FREEDOM FREEDOM FREEDOM`,
    code: `T2-3`,
  },
  3: {
    level: `NS1`,
    src: `../static/images/tax-cut/profile3.jpg`,
    name: `MartinMartin`,
    content: `Why does the government infringe on individual rights? Small government is the best way that takes into account individual freedom!`,
    code: `T2-4`,
  },
  4: {
    level: `SS`,
    src: `../static/images/tax-cut/profile4.jpg`,
    name: `TigerTigerTiger`,
    content: `You have to fight against the Democrats who take away people's personal rights. Can they say that without guns in dangerous situations? You have to protect yourself. It's INDIVIDUAL FREEDOM and RESPONSIBILITY.`,
    code: `T2-2`,
  },
  5: {
    level: `NS2`,
    src: `../static/images/tax-cut/profile5.jpg`,
    name: `Lucas2`,
    content: `It’s a bad policy. The right to keep and bear arms (often referred to as the right to bear arms) is a right for people to possess weapons (arms) for the preservation of life, liberty, and property.`,
    code: `T2-5`,
  },
  6: {
    level: `NS2`,
    src: `../static/images/tax-cut/profile6.jpg`,
    name: `MMMargiela`,
    content: `I don't understand such a policy. I think gun control will make people not safe.`,
    code: `T2-6`,
  },
};

export const tweets = tweetsArray(tweetData);

export const nwTweet = {
  level: `NW`,
  src: `../static/images/johndoe.png`,
  name: `Johndoe`,
  content: `We need to consider which side is beneficial to us. First of all, we should know pros and cons of gun control.`,
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
