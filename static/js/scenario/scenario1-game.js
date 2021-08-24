import initMenu from './score-menu.js';
import Scenario from './scenario1-store.js';
import number from '../game/number-store.js';
import sUtils from './scenario-utils.js';
import { showPopup, closePopup } from './score-menu.js';

let user_id = undefined;
let scenario = undefined;

const init = () => {
  initMenu();
  number.init(0);
  user_id = sUtils.getUserId();
  scenario = new Scenario(user_id);
  scenario.initPlay();
  scenario.setScenario();
};

window.onload = () => {
  init();
  window.selectTweet = sUtils.selectTweet;
  window.selectNWTweet = sUtils.selectNWTweet;
  window.showPopup = showPopup;
  window.closePopup = closePopup;
};
