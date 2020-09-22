const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingridientsListEl = document.querySelector('ul#ingredients');

document.body.insertBefore(
  document.createElement('h3'),
  ingridientsListEl,
).textContent = 'Список ингридиентов';

ingredients.forEach(ingridient => {
  const element = document.createElement('li');

  element.textContent = ingridient;
  ingridientsListEl.appendChild(element);
});
