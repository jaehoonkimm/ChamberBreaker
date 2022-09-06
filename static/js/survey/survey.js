import number from '../game/number-store.js';
import order from './order.js';

class SurveyFunction {
  constructor() {
    this.order = undefined;
  }

  init = () => {
    const id = document.getElementById('surveyId').value;
    this.order = order[Number(id % 720)];

    // 기존 legacy code 내 hard-coding된 order 값(6! = 720)은 6개 항목 랜덤성 부여를 위해 모든 경우의 수 array index가 작성됨
    // 12개 항목으로 증가시킬 때, 12!은 약 4억 8천이므로, 불가능. 기존 6개 배열에 대해 모두 +6씩 더하여 만든 array를 concat하여 사용함으로서 랜덤성 유지함.
    let add_order = [];
    this.order.forEach(function(v, i) { add_order.push(v+6) })
    this.order = this.order.concat(add_order);
    console.log("order:", this.order);
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
    console.log("nowIndex:", nowIndex);
    console.log("nextIndex:", nextIndex);
    if (
      this.checkSurvey([
        `tweets_reliable_${nowIndex}`,
        `tweets_confident_${nowIndex}`,
      ])
    ) {
      this.noneElementById(`news-container-${nowIndex}`);
      this.blockElementById(`news-container-${nextIndex}`);
      let progress = document.getElementById('survey-progress');
      progress.innerHTML = `${index + 1}/12`;
    } else {
      number.subNum();
    }
  };

  checkLastSurvey = () => {
    const nowIndex = this.order[11]; 
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
    progress.innerHTML = `${index - 1}/12`;
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
