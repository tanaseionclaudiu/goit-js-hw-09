function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let bgIntervalId = 0;

function changeBackgroundColor() {
  body.style.backgroundColor = getRandomHexColor();
}

function startBackgroundAnimation() {
  bgIntervalId = setInterval(changeBackgroundColor, 1000);
}

function stopBackgroundAnimation() {
  clearInterval(bgIntervalId);
}

startButton.addEventListener('click', () => {
  changeBackgroundColor();
  startBackgroundAnimation();
  startButton.disabled = true;
});

stopButton.addEventListener('click', () => {
  stopBackgroundAnimation();
  startButton.disabled = false;
});
