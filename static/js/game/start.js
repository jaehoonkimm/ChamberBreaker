const checkWindowSize = () => {
  var windowWidth = window.innerWidth;
  if (windowWidth < 800) {
    document.getElementById('play-btn').style.display = 'none';
    document.getElementById('mobile-message').style.display = 'block';
  } else {
    document.getElementById('play-btn').style.display = 'block';
    document.getElementById('mobile-message').style.display = 'none';
  }
};

const isBrowserCheck = () => {
  const agt = navigator.userAgent.toLowerCase();
  if (agt.indexOf('edg') != -1) return 'Edge';
  if (agt.indexOf('chrome') != -1) return 'Chrome';
  if (agt.indexOf('opera') != -1) return 'Opera';
  if (agt.indexOf('staroffice') != -1) return 'Star Office';
  if (agt.indexOf('webtv') != -1) return 'WebTV';
  if (agt.indexOf('beonex') != -1) return 'Beonex';
  if (agt.indexOf('chimera') != -1) return 'Chimera';
  if (agt.indexOf('netpositive') != -1) return 'NetPositive';
  if (agt.indexOf('phoenix') != -1) return 'Phoenix';
  if (agt.indexOf('firefox') != -1) return 'Firefox';
  if (agt.indexOf('safari') != -1) return 'Safari';
  if (agt.indexOf('skipstone') != -1) return 'SkipStone';
  if (agt.indexOf('netscape') != -1) return 'Netscape';
  if (agt.indexOf('mozilla/5.0') != -1) return 'Mozilla';
  if (agt.indexOf('msie') != -1) {
    let rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
      let ua = navigator.userAgent;
      var re = new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})');
      if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
    }
    return 'Internet Explorer ' + rv;
  }
};

const checkBrowser = () => {
  const browser = isBrowserCheck();
  if (browser !== 'Chrome') {
    document.getElementById('play-btn').style.display = 'none';
    alert(
      'You should use "Chrome". Otherwise, you can have a screen ratio problem.'
    );
  }
};

window.onload = () => {
  checkWindowSize();
  checkBrowser();
  window.addEventListener('resize', () => checkWindowSize());
};
