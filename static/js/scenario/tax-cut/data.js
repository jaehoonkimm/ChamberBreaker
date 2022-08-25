import { tweetsArray, retweetsTemplate } from '../tweet-template.js';

// Gun

export const example1 = {
  src: '../static/images/tax-cut/example1.jpg',
  name: 'Noah2020',
  content: `Again, Americans are killed by a weapon of war. It is not a JUST SOCIETY that an innocent person is shot to death for no reason. I simply don't understand idiots who give up their life.`,
};

export const example2 = {
  src: '../static/images/tax-cut/example2.jpg',
  name: 'Li19am94',
  content: `It is fundamental to WELFARE that people protect against the dangers of guns. Why should we sacrifice our safety for the benefit of gun companies? Let's protect HUMAN RIGHTS. <span>#GunControl</span>`,
};

// Tweet 수정 완료
export const tweetData = {
  1: {
    level: `SS`,
    src: `../static/images/tax-cut/profile1.jpg`,
    name: `GoConservatism`,
    content: `Politicians should be ashamed that gun violence and crime have reached the point where businesses fear for the safety of their employees and customer. Living in safe environment is BASIC WELFARE.`,
    code: `T2-1`,
  },
  2: {
    level: `SS`,
    src: `../static/images/tax-cut/profile2.jpg`,
    name: `BT2122`,
    content: `Who Stops a ‘Bad Guy With a Gun’? The freedom of the individual that the Republicans say is ideal. I don't want to walk down the street with a madman carrying a gun. We need the BIG GOVERNMENT to be able to make JUST SOCIETY.`,
    code: `T2-3`,
  },
  3: {
    level: `NS1`,
    src: `../static/images/tax-cut/profile3.jpg`,
    name: `MartinMartin`,
    content: `Why should we sacrifice our safety for the benefit of gun companies? Let's protect human rights.  Get out of the gun company that supports gun violence.`,
    code: `T2-4`,
  },
  4: {
    level: `SS`,
    src: `../static/images/tax-cut/profile4.jpg`,
    name: `TigerTigerTiger`,
    content: `Why should innocent children be shot to death? I just don't understand. Why can't the Government stop this and stay put? It's UNFAIR.`,
    code: `T2-2`,
  },
  5: {
    level: `NS2`,
    src: `../static/images/tax-cut/profile5.jpg`,
    name: `Lucas2`,
    content: `Do you agree with it? Gun control can make a safe society. It means that gun crimes go out the window.`,
    code: `T2-5`,
  },
  6: {
    level: `NS2`,
    src: `../static/images/tax-cut/profile6.jpg`,
    name: `MMMargiela`,
    content: `Police and soldiers are enough to carry a gun. It is too dangerous for an uneducated citizen to have a gun. Everyone has a right to be safe.`,
    code: `T2-6`,
  },
};

export const tweets = tweetsArray(tweetData);

//중립 트윗 수정 논의
export const nwTweet = {
  level: `NW`,
  src: `../static/images/johndoe.png`,
  name: `Johndoe`,
  content: `The gun business is a very important business in the United States. Strange laws will make our economy difficult. The right to keep and bear arms should make ECONOMIC GROWTH.`,
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
