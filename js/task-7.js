const inputEl = document.querySelector('input#font-size-control');
const spanEl = document.querySelector('span#text');
const factor =
  inputEl.value /
  parseInt(window.getComputedStyle(spanEl).getPropertyValue('font-size'));

inputEl.addEventListener('input', () => {
  spanEl.style.fontSize = inputEl.value / factor + 'px';
});
