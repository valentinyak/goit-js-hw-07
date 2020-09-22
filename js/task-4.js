const decrementButtonEl = document.querySelector(
  'button[data-action="decrement"]',
);
const incrementButtonEl = document.querySelector(
  'button[data-action="increment"]',
);
const spanEl = document.querySelector('span#value');

decrementButtonEl.addEventListener('click', onDecrementBtnClick);
incrementButtonEl.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
  const valueNumber = Number(spanEl.textContent);

  spanEl.textContent = valueNumber - 1;
}

function onIncrementBtnClick() {
  const valueNumber = Number(spanEl.textContent);

  spanEl.textContent = valueNumber + 1;
}
