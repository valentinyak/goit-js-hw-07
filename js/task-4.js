const decrementButtonEl = document.querySelector(
  'button[data-action="decrement"]',
);
const incrementButtonEl = document.querySelector(
  'button[data-action="increment"]',
);
const spanEl = document.querySelector('span#value');

decrementButtonEl.addEventListener('click', () => {
  const valueNumber = Number(spanEl.textContent);

  spanEl.textContent = valueNumber - 1;
});

incrementButtonEl.addEventListener('click', () => {
  const valueNumber = Number(spanEl.textContent);

  spanEl.textContent = valueNumber + 1;
});
