const inputEl = document.querySelector('input[type="number"]');
const divBoxesEl = document.querySelector('div#boxes');
const createButtonEl = document.querySelector('button[data-action="render"]');
const destroyButtonEl = document.querySelector('button[data-action="destroy"]');

createButtonEl.addEventListener('click', createBoxes);
destroyButtonEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  const amountFromInput = Number(
    amount.currentTarget.previousElementSibling.value,
  );

  for (let i = 0; i < amountFromInput; i += 1) {
    let createdDiv = document.createElement('div');

    createdDiv.style.backgroundColor = `rgb(
      ${Math.random() * 255},
      ${Math.random() * 255},
      ${Math.random() * 255}
    )`;

    createdDiv.style.width = width + 'px';
    createdDiv.style.height = height + 'px';
    width += 10;
    height += 10;

    divBoxesEl.appendChild(createdDiv);
  }
}

function destroyBoxes() {
  while (0 < divBoxesEl.children.length) {
    divBoxesEl.removeChild(divBoxesEl.children[0]);
  }
}
