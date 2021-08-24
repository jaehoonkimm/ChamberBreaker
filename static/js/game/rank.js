const getRank = (score) => {
  if (score >= 2850) {
    // ~ 950
    return 1;
  } else if (score >= 2610) {
    // ~ 870
    return 2;
  } else if (score >= 2460) {
    // ~ 820
    return 3;
  } else if (score >= 2310) {
    // ~ 770
    return 4;
  } else {
    // ~ 700
    return 5;
  }
};

const getRandom = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const setRankScoreRandom = (rank, maxScore, minScore) => {
  const antiVaccineScore = getRandom(maxScore, minScore);
  const globalWarmingScore = getRandom(maxScore, minScore);
  const taxCutScore = getRandom(maxScore, minScore);
  const totalScore = antiVaccineScore + globalWarmingScore + taxCutScore;
  document.getElementById(`rank${rank}-1`).innerHTML = antiVaccineScore;
  document.getElementById(`rank${rank}-2`).innerHTML = globalWarmingScore;
  document.getElementById(`rank${rank}-3`).innerHTML = taxCutScore;
  document.getElementById(`rank${rank}-4`).innerHTML = totalScore;
};

const setRankUserScore = (rank, antiVaccine, globalWarming, taxCut) => {
  const totalScore =
    Number(antiVaccine) + Number(globalWarming) + Number(taxCut);
  document.getElementById(`rank${rank}-1`).innerHTML = antiVaccine;
  document.getElementById(`rank${rank}-2`).innerHTML = globalWarming;
  document.getElementById(`rank${rank}-3`).innerHTML = taxCut;
  document.getElementById(`rank${rank}-4`).innerHTML = totalScore;

  const rankSpan = document.getElementById('rank-span');
  if (rank === 1) rankSpan.innerHTML = '1st';
  else if (rank === 2) rankSpan.innerHTML = '2nd';
  else if (rank === 3) rankSpan.innerHTML = '3st';
  else if (rank === 4) rankSpan.innerHTML = '4th';
  else if (rank === 5) rankSpan.innerHTML = '5th';

  const thUserRank = document.getElementsByName(`rank${rank}`);
  for (let th of thUserRank) {
    th.classList.add('highlight-rank');
  }
};

const loadLeaderboard = (antiVaccine, globalWarming, taxCut) => {
  const totalScore = antiVaccine + globalWarming + taxCut;
  const rank = getRank(totalScore);
  if (rank !== 1) setRankScoreRandom(1, 1000, 950);
  if (rank !== 2) setRankScoreRandom(2, 950, 870);
  if (rank !== 3) setRankScoreRandom(3, 870, 820);
  if (rank !== 4) setRankScoreRandom(4, 820, 770);
  if (rank !== 5) setRankScoreRandom(5, 770, 700);
  setRankUserScore(rank, antiVaccine, globalWarming, taxCut);
};

const init = () => {
  const user_id = document.getElementById('uid').value % 6;
  let scenario1 = document.getElementById('scenario1').value;
  let scenario2 = document.getElementById('scenario2').value;
  let scenario3 = document.getElementById('scenario3').value;
  if (user_id === 0) {
    loadLeaderboard(scenario2, scenario1, scenario3);
  } else if (user_id === 1) {
    loadLeaderboard(scenario3, scenario1, scenario2);
  } else if (user_id === 2) {
    loadLeaderboard(scenario1, scenario2, scenario3);
  } else if (user_id === 3) {
    loadLeaderboard(scenario1, scenario3, scenario2);
  } else if (user_id === 4) {
    loadLeaderboard(scenario2, scenario3, scenario1);
  } else if (user_id === 5) {
    loadLeaderboard(scenario3, scenario2, scenario1);
  }
};

window.onload = () => {
  init();
};
