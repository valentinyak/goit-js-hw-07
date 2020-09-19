const inputEl = document.querySelector('input[type="number"]');
const divBoxesEl = document.querySelector('div#boxes');
const createButtonEl = document.querySelector('button[data-action="render"]');
const destroyButtonEl = document.querySelector('button[data-action="destroy"]');

const createBoxes = function (amount) {
  amount = Number(inputEl.value);
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
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
};

const destroyBoxes = function () {
  while (0 < divBoxesEl.children.length) {
    divBoxesEl.removeChild(divBoxesEl.children[0]);
  }
};

createButtonEl.addEventListener('click', createBoxes);
destroyButtonEl.addEventListener('click', destroyBoxes);
