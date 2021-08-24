export const showPopup = (id) => {
  document.getElementById(id).style.display = 'block';
};

export const closePopup = (id) => {
  document.getElementById(id).style.display = 'none';
};

const initScoreMenu = () => {
  const echoChamberInfoButton = document.getElementById('echo-info-button');
  const reliabilityInfoButton = document.getElementById(
    'reliability-info-button'
  );
  echoChamberInfoButton.addEventListener('mouseover', () =>
    showPopup('echo-popup')
  );
  echoChamberInfoButton.addEventListener('mouseout', () =>
    closePopup('echo-popup')
  );
  reliabilityInfoButton.addEventListener('mouseover', () =>
    showPopup('reliability-popup')
  );
  reliabilityInfoButton.addEventListener('mouseout', () =>
    closePopup('reliability-popup')
  );
};

export default initScoreMenu;
