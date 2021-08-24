import number from '../game/number-store.js';
import survey from './survey.js';
import guideMessage from './introTemplate.js';
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
    nextGuide();
  } else if (num == 1) {
    survey.noneElement(contentElement);
    survey.flexElement(formElement);
    survey.flexElementById('demographic1');
  } else if (num == 2) {
    survey.nextSurvey(
      ['gender', 'age', 'edu', 'ethnicity'],
      'demographic1',
      'demographic2'
    );
  } else if (num == 3) {
    survey.nextSurvey(['inter', 'stance'], 'demographic2', 'demographic3');
  } else if (num == 4) {
    survey.nextSurvey(['md-fox', 'md-cnn'], 'demographic3', 'echochamber1');
  } else if (num == 5) {
    survey.nextSurvey(
      ['echo1', 'echo2', 'echo3'],
      'echochamber1',
      'echochamber2'
    );
  } else if (num == 6) {
    if (survey.checkSurvey(['echo4', 'echo5'])) {
      survey.noneElementById('echochamber2');
      survey.noneElement(formElement);
      survey.flexElement(contentElement);
      nextGuide();
    }
  } else if (num == 7) {
    survey.noneElement(contentElement);
    survey.flexElement(formElement);
    survey.flexElement(newsElement);
    survey.showFirstNewsSurvey();
  } else if (num == 8) {
    survey.nextNewsSurvey(1);
  } else if (num == 9) {
    survey.nextNewsSurvey(2);
  } else if (num == 10) {
    survey.nextNewsSurvey(3);
  } else if (num == 11) {
    survey.nextNewsSurvey(4);
  } else if (num == 12) {
    survey.nextNewsSurvey(5);
  } else if (num == 13) {
    if (survey.checkSurvey(['tweets_reliable_6', 'tweets_confident_6'])) {
      survey.noneElement(formElement);
      survey.noneElement(newsElement);
      survey.flexElement(contentElement);
      nextGuide();
    }
  } else if (num >= 14 && num <= 21) {
    nextGuide();
  } else {
    document.presurvey.submit();
  }
  number.addNum();
};

const backGame = () => {
  mainElement.scrollTop = 0;
  const num = number.getNum();
  if (num == 1) {
    survey.backButtonDisplay('none');
    backGuide();
  } else if (num == 2) {
    survey.flexElement(contentElement);
    survey.noneElement(formElement);
    survey.noneElementById('demographic1');
  } else if (num == 3) {
    survey.backSurvey('demographic2', 'demographic1');
  } else if (num == 4) {
    survey.backSurvey('demographic3', 'demographic2');
  } else if (num == 5) {
    survey.backSurvey('echochamber1', 'demographic3');
  } else if (num == 6) {
    survey.backSurvey('echochamber2', 'echochamber1');
  } else if (num == 7) {
    survey.flexElementById('echochamber2');
    survey.flexElement(formElement);
    survey.noneElement(contentElement);
    backGuide();
  } else if (num == 8) {
    survey.flexElement(contentElement);
    survey.noneElement(formElement);
    survey.noneElement(newsElement);
  } else if (num == 9) {
    survey.backNewsSurvey(2);
  } else if (num == 10) {
    survey.backNewsSurvey(3);
  } else if (num == 11) {
    survey.backNewsSurvey(4);
  } else if (num == 12) {
    survey.backNewsSurvey(5);
  } else if (num == 13) {
    survey.backNewsSurvey(6);
  } else if (num == 14) {
    survey.flexElement(newsElement);
    survey.flexElement(formElement);
    survey.noneElement(contentElement);
    backGuide();
  } else if (num >= 15 && num <= 22) {
    backGuide();
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

const init = () => {
  number.init(0);
  guideIndex = 0;
  survey.setRandomId(719, 0);
  survey.init();
  isAgree = survey.getIsAgree();
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
