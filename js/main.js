((window, document) => {
  const weddingDate = new Date('2021-01-30T17:00:00-05:00');
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minElement = document.getElementById('minutes');
  const secElement = document.getElementById('seconds');

  function floor(val) {
    return Math.floor(val);
  }

  function initTimer() {
    const now = Date.now();
  
    const diff = weddingDate - now;
  
    const days = diff / 1000 / 60 / 60 / 24.0;
  
    const hours = (days % 1) * 24;
  
    const minutes = (hours % 1) * 60;
  
    const seconds = (minutes % 1) * 60;
  
    daysElement.innerHTML = floor(days);
    hoursElement.innerHTML = floor(hours);
    minElement.innerHTML = floor(minutes);
    secElement.innerHTML = floor(seconds);
  }

  initTimer();
  window.setInterval(initTimer, 500);
})(window, document)