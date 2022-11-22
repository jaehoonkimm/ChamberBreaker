// Pre/Post Survey에서 6개 News + Tweet 보고 Score 측정하는 부분 관한 페이지

const makeNewsSurveyTemplate = (news) => {
    let template = [];
    for (let index in news) {
      const title = news[index].title;
      const tweets = news[index].tweets;
      const body_text = news[index].body_text;
      const news_img = news[index].news_img;
      template.push(newsTemplate(title, tweets, body_text, news_img, index));
    }
    return template.join('');
  };
  
  const newsTemplate = (title, tweets, body_text, news_img, n) => `
  <div class="news-container" id="news-container-${n}">
      <div class="news-box">
          <div class="news-title-div">
              <p>${title}</p>
          </div>
          <div class="news-body-div">
              <p>${body_text}</p>
              <img src="../static/images/news/${news_img}" style="width:100%; height:100%;">
          </div>
          
          <div class="tweets-container-div">
              ${newsTweetTemplate(tweets, n)}
          </div>
      </div>
      <div>
          ${tweetsQuestionTemplate(n)}
      </div>
  </div>
  `;
  
  const tweetReactionTemplate = (name, content, index, n) => `
  <div class="tweet-card-div">
      <div>
          <img class="tweet-img" src="../static/images/survey/survey_tweet${n}_${index}.jpg">
          <p class="tweet-name">@${name}</p>
      </div>
      <p class="tweet-p">${content}</p>
  </div>
  `;
  
  const newsTweetTemplate = (tweets, n) => {
    let template = [];
    for (let index in tweets) {
      const name = tweets[index].name;
      const content = tweets[index].content;
      // template.push(tweetReactionTemplate(name, content, index, n)); // 해당 Code 주석 처리하여 Reaction Tweet 제거
    }
    return template.join('');
  };
  
  const tweetsQuestionTemplate = (n) => `
  <p class="survey-p-guide">How reliable are <span>the news</span>?</p>
  <div class="survey-div" id="tweets_reliable_${n}">
      <div class="radio-box">
          <input type="radio" name="tweets_reliable_${n}" id="tr1-${n}" value="1" />
          <label for="tr1-${n}"><span></span>1<br />Unreliable</label>
      </div>
      <div class="radio-box">
          <input type="radio" name="tweets_reliable_${n}" id="tr2-${n}" value="2" />
          <label for="tr2-${n}"><span></span>2</label>
      </div>
      <div class="radio-box">
          <input type="radio" name="tweets_reliable_${n}" id="tr3-${n}" value="3" />
          <label for="tr3-${n}"><span></span>3</label>
      </div>
      <div class="radio-box">
          <input type="radio" name="tweets_reliable_${n}" id="tr4-${n}" value="4" />
          <label for="tr4-${n}"><span></span>4</label>
      </div>
      <div class="radio-box">
          <input type="radio" name="tweets_reliable_${n}" id="tr5-${n}" value="5" />
          <label for="tr5-${n}"><span></span>5</label>
      </div>
      <div class="radio-box">
          <input type="radio" name="tweets_reliable_${n}" id="tr6-${n}" value="6" />
          <label for="tr6-${n}"><span></span>6</label>
      </div>
      <div class="radio-box">
          <input type="radio" name="tweets_reliable_${n}" id="tr7-${n}" value="7" />
          <label for="tr7-${n}"><span></span>7<br />Reliable</label>
      </div>
  </div>
  <p class="survey-p-guide">How confident are you in your above choice?</p>
  <div class="survey-div" id="tweets_confident_${n}">
      <div class="radio-box">
          <input type="radio" name="tweets_confident_${n}" id="tc1-${n}" value="1" />
          <label for="tc1-${n}"><span></span>1<br />Not confident<br />at all</label>
      </div>
      <div class="radio-box">
          <input type="radio" name="tweets_confident_${n}" id="tc2-${n}" value="2" />
          <label for="tc2-${n}"><span></span>2</label>
      </div>
      <div class="radio-box">
          <input type="radio" name="tweets_confident_${n}" id="tc3-${n}" value="3" />
          <label for="tc3-${n}"><span></span>3</label>
      </div>
      <div class="radio-box">
          <input type="radio" name="tweets_confident_${n}" id="tc4-${n}" value="4" />
          <label for="tc4-${n}"><span></span>4</label>
      </div>
      <div class="radio-box">
          <input type="radio" name="tweets_confident_${n}" id="tc5-${n}" value="5" />
          <label for="tc5-${n}"><span></span>5</label>
      </div>
      <div class="radio-box">
          <input type="radio" name="tweets_confident_${n}" id="tc6-${n}" value="6" />
          <label for="tc6-${n}"><span></span>6</label>
      </div>
      <div class="radio-box">
          <input type="radio" name="tweets_confident_${n}" id="tc7-${n}" value="7" />
          <label for="tc7-${n}"><span></span>7<br />Very confident</label>
      </div>
  </div>
  `;
  
  export default makeNewsSurveyTemplate;
  