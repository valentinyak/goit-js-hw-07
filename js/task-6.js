const inputEl = document.querySelector('input#validation-input');

inputEl.addEventListener('blur', event => {
  if (
    inputEl.classList.contains('valid') ||
    inputEl.classList.contains('invalid')
  ) {
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');
  }

  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
});
