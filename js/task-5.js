const inputEl = document.querySelector('input#name-input');
const outputEl = document.querySelector('span#name-output');

inputEl.addEventListener('input', () => {
  outputEl.textContent = inputEl.value;
});

inputEl.addEventListener('blur', () => {
  if (inputEl.value.length === 0) {
    outputEl.textContent = 'незнакомец';
  }
});
