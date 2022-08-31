const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
let idInterval = null;

const onChangeColor = e => {
  onBtnDisabled();
  idInterval = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = `${color}`;
  }, 1000);
};

const onStopChangeColor = e => {
  clearInterval(idInterval);
  onBtnDisabled();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onBtnDisabled() {
  if (!buttonStart.disabled) {
    buttonStart.disabled = true;
    buttonStop.disabled = false;
  } else {
    buttonStart.disabled = false;
    buttonStop.disabled = true;
  }
}

buttonStart.addEventListener('click', onChangeColor);
buttonStop.addEventListener('click', onStopChangeColor);
