const counterButton = document.querySelector('.counter-button');
const resetButton = document.querySelector('.reset-button');
const counterArea = document.querySelector('.counter');

let counter = 0;

function counterStatus(status) {
  counter = status === 'count' ? counter + 1 : 0;

  counterArea.textContent = counter;
}

counterStatus();

counterButton.addEventListener('click', () => counterStatus('count'));

resetButton.addEventListener('click', () => counterStatus());
