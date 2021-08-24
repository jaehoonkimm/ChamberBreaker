import antiVaccine from './anti-vaccine/scenario.js';
import globalWarming from './global-warming/scenario.js';
import sUtils from './scenario-utils.js';
import taxCut from './tax-cut/scenario.js';
import play from './play-store.js';
import badge from './badge.js';

export default class Scenario2 {
  constructor(user_id) {
    this.user_id = user_id;
    this.name = this.getScenario(user_id);
  }

  initPlay = () => {
    play.init(2, this.name);
  };

  getScenario = (user_id) => {
    const id = user_id % 6;
    if (id === 2 || id === 5) return 'Global-Warming';
    if (id === 0 || id === 4) return 'Anti-Vaccine';
    if (id === 1 || id === 3) return 'Tax-Cut';
  };

  setScenario = () => {
    const nextButton = document.querySelector('#next-button');
    const backButton = document.querySelector('#back-button');
    if (this.name === 'Global-Warming') {
      nextButton.addEventListener('click', () => globalWarming.nextScenario());
      backButton.addEventListener('click', () => globalWarming.backScenario());
      globalWarming.init(2);
    } else if (this.name === 'Anti-Vaccine') {
      nextButton.addEventListener('click', () => antiVaccine.nextScenario());
      backButton.addEventListener('click', () => antiVaccine.backScenario());
      antiVaccine.init(2);
    } else if (this.name === 'Tax-Cut') {
      nextButton.addEventListener('click', () => taxCut.nextScenario());
      backButton.addEventListener('click', () => taxCut.backScenario());
      taxCut.init(2);
    }

    const retryButton = document.querySelector('#retry-button');
    retryButton.addEventListener('click', () => {
      sUtils.retryButtonChange();
      if (this.name === 'Global-Warming') {
        globalWarming.init(2);
      } else if (this.name === 'Anti-Vaccine') {
        antiVaccine.init(2);
      } else if (this.name === 'Tax-Cut') {
        taxCut.init(2);
      }
    });
  };

  setBadge = () => {
    const scenario1Score = document.getElementById('scenario1').value;
    badge.setScenario1Badge(this.user_id, scenario1Score);
  };
}
