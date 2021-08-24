import number from '../game/number-store.js';
import survey from './survey.js';
import guideMessage from './endingTemplate.js';
import agreeTemplate from './agree-template.js';
import disagreeTemplate from './disagree-template.js';
import makeNewsSurveyTemplate from './newsTemplate.js';

// variable
let guideIndex = undefined;
let isAgree = undefined;

// element
let mainElement = undefined;
let contentElement = undefined;
let newsElement = undefined;
let formElement = undefined;

// template
let guideTemplate = undefined;

const nextGame = () => {
  mainElement.scrollTop = 0;
  const num = number.getNum();
  if (num == 0) {
    survey.backButtonDisplay('block');
    survey.noneElement(contentElement);
    survey.flexElement(formElement);
    survey.flexElementById('echochamber1');
  } else if (num == 1) {
    survey.nextSurvey(
      ['echo1', 'echo2', 'echo3'],
      'echochamber1',
      'echochamber2'
    );
  } else if (num == 2) {
    if (survey.checkSurvey(['echo4', 'echo5'])) {
      survey.noneElementById('echochamber2');
      survey.noneElement(formElement);
      survey.flexElement(contentElement);
      nextGuide();
    }
  } else if (num == 3) {
    survey.noneElement(contentElement);
    survey.flexElement(formElement);
    survey.flexElement(newsElement);
    survey.showFirstNewsSurvey();
  } else if (num == 4) {
    survey.nextNewsSurvey(1);
  } else if (num == 5) {
    survey.nextNewsSurvey(2);
  } else if (num == 6) {
    survey.nextNewsSurvey(3);
  } else if (num == 7) {
    survey.nextNewsSurvey(4);
  } else if (num == 8) {
    survey.nextNewsSurvey(5);
  } else {
    if (survey.checkLastSurvey()) {
      if (confirm('Submit a survey?')) {
        let form = document.postsurvey;
        form.submit();
        return;
      } else {
        number.subNum();
      }
    }
  }
  number.addNum();
};

const backGame = () => {
  mainElement.scrollTop = 0;
  const num = number.getNum();
  if (num == 1) {
    survey.backButtonDisplay('none');
    survey.flexElement(contentElement);
    survey.noneElement(formElement);
    survey.noneElementById('echochamber1');
  } else if (num == 2) {
    survey.backSurvey('echochamber2', 'echochamber1');
  } else if (num == 3) {
    survey.flexElementById('echochamber2');
    survey.flexElement(formElement);
    survey.noneElement(contentElement);
    backGuide();
  } else if (num == 4) {
    survey.flexElement(contentElement);
    survey.noneElement(formElement);
    survey.noneElement(newsElement);
  } else if (num == 5) {
    survey.backNewsSurvey(2);
  } else if (num == 6) {
    survey.backNewsSurvey(3);
  } else if (num == 7) {
    survey.backNewsSurvey(4);
  } else if (num == 8) {
    survey.backNewsSurvey(5);
  } else if (num == 9) {
    survey.backNewsSurvey(6);
  }
  number.subNum();
};

const nextGuide = () => {
  guideIndex++;
  contentElement.innerHTML = guideMessage[guideIndex];
};

const backGuide = () => {
  guideIndex--;
  contentElement.innerHTML = guideMessage[guideIndex];
};

const changeEchoMessage = () => {
  document.getElementById('echo-question1').innerHTML =
    'How often will you read something you DISAGREE with?';
  document.getElementById('echo-question2').innerHTML =
    'Will you check a news source that’s DIFFERENT from what you normally read?';
  document.getElementById('echo-question3').innerHTML =
    'Will you try to CONFIRM information you found by searching online for another source?';
  document.getElementById('echo-question4').innerHTML =
    'Will you try to CONFIRM information by checking a major offline news medium?';
  document.getElementById('echo-question5').innerHTML =
    'How often will you discover something that CHANGED your opinion on an issue?';
};

const init = () => {
  number.init(0);
  guideIndex = 0;
  survey.init(719);
  isAgree = survey.getIsAgree();

  changeEchoMessage();
  if (isAgree) guideTemplate = agreeTemplate;
  else guideTemplate = disagreeTemplate;

  mainElement = document.querySelector('main');
  contentElement = document.querySelector('.content');
  formElement = document.querySelector('form');
  newsElement = document.querySelector('.news-survey-div');

  const nextButton = document.querySelector('#next-button');
  const backButton = document.querySelector('#back-button');
  nextButton.addEventListener('click', () => nextGame());
  backButton.addEventListener('click', () => backGame());

  contentElement.innerHTML = guideMessage[guideIndex];
  newsElement.insertAdjacentHTML(
    'beforeend',
    makeNewsSurveyTemplate(guideTemplate)
  );
};

window.onload = () => {
  init();
};
