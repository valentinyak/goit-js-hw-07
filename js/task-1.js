const mainListEl = document.querySelectorAll('ul#categories>li.item');
console.log(`В списке ${mainListEl.length} категории.`);

mainListEl.forEach(element => {
  console.log(
    `Категория: ${element.firstElementChild.textContent}\nКоличество элементов: ${element.lastElementChild.children.length}`,
  );
});
