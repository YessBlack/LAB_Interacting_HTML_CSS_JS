lucide.createIcons();

const btnIncrease = document.getElementById('butttonIncrease')
const btnDecrease = document.getElementById('butttonDecrease')
const btnReset = document.getElementById('buttonReset')
const idCounter = document.getElementById('counter')

let counter = 0;

btnIncrease.addEventListener('click', () => {
  counter++;
  idCounter.textContent = counter;
});

btnDecrease.addEventListener('click', () => {
  counter--;
  idCounter.textContent = counter;
});

btnReset.addEventListener('click', () => {
  counter = 0;
  idCounter.textContent = counter;
});