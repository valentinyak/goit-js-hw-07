const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingridientsListEl = document.querySelector('ul#ingredients');
const ingredientsArrayOfEl = [];

ingridientsListEl.textContent = 'Список ингридиентов';

ingredients.forEach(ingridient => {
  const element = document.createElement('li');
  element.textContent = ingridient;
  ingredientsArrayOfEl.push(element);
});

ingredientsArrayOfEl.forEach(ingridientEl => {
  ingridientsListEl.appendChild(ingridientEl);
});
