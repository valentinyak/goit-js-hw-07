const inputEl = document.querySelector('input#name-input');
const outputEl = document.querySelector('span#name-output');

inputEl.addEventListener('input', event => {
  if (event.currentTarget.value !== '') {
    outputEl.textContent = event.currentTarget.value;
  } else {
    outputEl.textContent = 'незнакомец';
  }
});
