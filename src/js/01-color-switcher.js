
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const bodyColor = document.querySelector('body');

let timerId = null;

startButton.addEventListener("click", () => {
  timerId = setInterval(() => {
    bodyColor.style.background = getRandomHexColor();
  }, 1000);
    startButton.disabled = true;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


stopButton.addEventListener("click", () => {
    clearInterval(timerId);
    startButton.disabled = false;
});
