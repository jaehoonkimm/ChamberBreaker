import number from '../game/number-store.js';
import order from './order.js';

class SurveyFunction {
  constructor() {
    this.order = undefined;
  }

  init = () => {
    const id = document.getElementById('surveyId').value;
    this.order = order[Number(id % 720)];
  };

  checkSurvey = (surveyIds) => {
    for (let id of surveyIds) {
      const surveyContent = document.getElementsByName(id);
      let checkRadio = 0;
      for (let i = 0; i < surveyContent.length; i++) {
        if (surveyContent[i].checked === true) checkRadio++;
      }
      if (checkRadio < 1) {
        alert('Please respond to all surveys');
        return false;
      }
    }
    return true;
  };

  backButtonDisplay = (style) => {
    const backButton = document.querySelector('#back-button');
    backButton.style.display = style;
  };

  noneElement = (element) => (element.style.display = 'none');

  flexElement = (element) => (element.style.display = 'flex');

  noneElementById = (id) =>
    (document.getElementById(id).style.display = 'none');

  flexElementById = (id) =>
    (document.getElementById(id).style.display = 'flex');

  blockElementById = (id) =>
    (document.getElementById(id).style.display = 'block');

  nextSurvey = (array, preId, nextId) => {
    if (this.checkSurvey(array)) {
      this.noneElementById(preId);
      this.flexElementById(nextId);
    } else {
      number.subNum();
    }
  };

  showFirstNewsSurvey = () => {
    const firstIndex = this.order[0];
    this.flexElementById(`news-container-${firstIndex}`);
  };

  nextNewsSurvey = (index) => {
    const nowIndex = this.order[index - 1];
    const nextIndex = this.order[index];
    if (
      this.checkSurvey([
        `tweets_reliable_${nowIndex}`,
        `tweets_confident_${nowIndex}`,
      ])
    ) {
      this.noneElementById(`news-container-${nowIndex}`);
      this.blockElementById(`news-container-${nextIndex}`);
      let progress = document.getElementById('survey-progress');
      progress.innerHTML = `${index + 1}/6`;
    } else {
      number.subNum();
    }
  };

  checkLastSurvey = () => {
    const nowIndex = this.order[5];
    if (
      this.checkSurvey([
        `tweets_reliable_${nowIndex}`,
        `tweets_confident_${nowIndex}`,
      ])
    ) {
      return true;
    }
    return false;
  };

  backSurvey = (nowId, preId) => {
    this.noneElementById(nowId);
    this.flexElementById(preId);
  };

  backNewsSurvey = (index) => {
    const nowIndex = this.order[index - 1];
    const preIndex = this.order[index - 2];
    this.noneElementById(`news-container-${nowIndex}`);
    this.blockElementById(`news-container-${preIndex}`);
    let progress = document.getElementById('survey-progress');
    progress.innerHTML = `${index - 1}/6`;
  };

  getIsAgree = () => {
    const isAgree = document.getElementById('isAgree').value;
    if (isAgree === 'True') return true;
    if (isAgree === 'False') return false;
  };

  setRandomId = (max, min) => {
    const randomId = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById('surveyId').value = randomId;
  };
}

const surveyFunction = new SurveyFunction();
export default surveyFunction;
