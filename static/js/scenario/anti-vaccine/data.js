import { tweetsArray, retweetsTemplate } from '../tweet-template.js';

// 현상 유지 (변경 관련 추후 논의)
export const example1 = {
  src: '../static/images/anti-vaccine/example1.jpg',
  name: 'MartinParis',
  content: `Do you know the evil plans of Anti-Vaxxer? They try to cancel the vaccine mandate. They only care about their own body. They are staunch individualists. NOW They are not members of OUR SOCIETY. Let's BANISH THEM OUT! Dirty ANTI-VAXXER!!!`,
};

// example 수정 완료
export const example2 = {
  src: '../static/images/anti-vaccine/example2.jpg',
  name: 'Molang',
  content: `Getting the booster shot is safer than getting the covid. Do you believe in anti-vaxxer? Stop ur STUPIDNESS! They are TERRIBLE IDIOTS!`,
};

// Liberal Contents (E-CB) 반영
export const tweetData = {
  1: {
    level: `SS`,
    src: `../static/images/anti-vaccine/profile1.jpg`,
    name: `Jacob`,
    content: `The last 2 weeks, I’m seeing b/t 2-4 COVID-ill patients/day and every single one (except an obese, type 2 diabetic) have had third boosters, and one had fourth boosters. Yet I’m sure they are all “grateful” to have taken the juice, and the booster(s), or it would have been SO much worse……anti-vaxxers ARE IDIOTS...Who had such a TERRIBLE IDEA?`,
    code: `T1-3`,
  },
  2: {
    level: `NS1`,
    src: `../static/images/anti-vaccine/profile2.jpg`,
    name: `MASONSON`,
    content: `I’ve had both shots and booster. I got Covid. It was very mild. We’ve seen globally that the vaccines reduce severity of the illness for those that do get it.`,
    code: `T1-4`,
  },
  3: {
    level: `SS`,
    src: `../static/images/anti-vaccine/profile3.jpg`,
    name: `GT1265`,
    content: `DO YOU REALLY WANT TO DIE SO BAD? If someone talk you no-vaccine is better, He is NASTY LIAR. We are in the middle of a surge Your vaccine, and your booster will keep you probably from dying but it will not keep you from getting sick.`,
    code: `T1-1`,
  },
  4: {
    level: `NS2`,
    src: `../static/images/anti-vaccine/profile4.jpg`,
    name: `William5454`,
    content: `Wear a mask! I've seen people get covid lately even after three rounds of booster shots. I don't get this YOLO attitude, I'm saying again, WEAR A MASK!`,
    code: `T1-5`,
  },
  5: {
    level: `SS`,
    src: `../static/images/anti-vaccine/profile5.jpg`,
    name: `Lilylily7`,
    content: `Hypocrite as the hell, now de Santis saying vaccine is safe, yeah right 97% of the hospitalization are Republican who refused to take the vaccine. TRUMP LIED PEOPLE.`,
    code: `T1-2`,
  },
  6: {
    level: `NS2`,
    src: `../static/images/anti-vaccine/profile6.jpg`,
    name: `Sofia`,
    content: `I had my booster Mid December and my second booster a week ago together with a flue shot. I know that they are safe, effective at ending the pandemic because the government and big pharma.`,
    code: `T1-6`,
  },
};

export const tweets = tweetsArray(tweetData);

// 변경 관련 논의 (의심 받을 때 트윗)
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
