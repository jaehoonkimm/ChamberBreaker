import antiVaccine from './anti-vaccine/scenario.js';
import globalWarming from './global-warming/scenario.js';
import sUtils from './scenario-utils.js';
import taxCut from './tax-cut/scenario.js';
import play from './play-store.js';
import badge from './badge.js';

export default class Scenario3 {
  constructor(user_id) {
    this.user_id = user_id;
    this.name = this.getScenario(user_id);
  }

  initPlay = () => {
    play.init(3, this.name);
  };

  getScenario = (user_id) => {
    const id = user_id % 6;
    if (id === 3 || id === 4) return 'Global-Warming';
    if (id === 1 || id === 5) return 'Anti-Vaccine';
    if (id === 0 || id === 2) return 'Tax-Cut';
  };

  setScenario = () => {
    const nextButton = document.querySelector('#next-button');
    const backButton = document.querySelector('#back-button');
    if (this.name === 'Global-Warming') {
      nextButton.addEventListener('click', () => globalWarming.nextScenario());
      backButton.addEventListener('click', () => globalWarming.backScenario());
      globalWarming.init(3);
    } else if (this.name === 'Anti-Vaccine') {
      nextButton.addEventListener('click', () => antiVaccine.nextScenario());
      backButton.addEventListener('click', () => antiVaccine.backScenario());
      antiVaccine.init(3);
    } else if (this.name === 'Tax-Cut') {
      nextButton.addEventListener('click', () => taxCut.nextScenario());
      backButton.addEventListener('click', () => taxCut.backScenario());
      taxCut.init(3);
    }

    const retryButton = document.querySelector('#retry-button');
    retryButton.addEventListener('click', () => {
      sUtils.retryButtonChange();
      if (this.name === 'Global-Warming') {
        globalWarming.init(3);
      } else if (this.name === 'Anti-Vaccine') {
        antiVaccine.init(3);
      } else if (this.name === 'Tax-Cut') {
        taxCut.init(3);
      }
    });
  };

  setBadge = () => {
    const scenario1Score = document.getElementById('scenario1').value;
    const scenario2Score = document.getElementById('scenario2').value;
    badge.setScenario1Badge(this.user_id, scenario1Score);
    badge.setScenario2Badge(this.user_id, scenario2Score);
  };
}
